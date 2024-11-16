import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import './ProductDetail.css';
import { addItem } from "../utils/cartSlice";

function ProductDetails() {
    const dataD = useParams();
    // console.log(data.id);
    const [productData, set_product_data] = useState([]);
    useEffect(() => {
        fetchdata();
    }, [])
    async function fetchdata() {
        const data= await fetch(`https://dummyjson.com/products/${dataD.id}`);
        const result=await data.json();
        console.log(result);
        set_product_data([result])

        
    }
    const dispatch=useDispatch();
        function  handleClick(item){
            dispatch(addItem(item))
        }
    return (
        <>
            {productData.map((data) => {
                return (
                    <div key={data.id}>
                        <div className="flex w-[80%] mx-auto" id="product-detail-container1">
                            <div id='img-cont' className="w-[40%] " >
                                <img id='img-sec' src={data.images[0]} alt="" className="w-[100%] h-[60vh] " />
                            </div>
                            <div id='product-detail-container1-right' className="w-[50%] h-[60vh]  flex flex-col justify-center items-center">
                                <h1 id='title' className="font-bold text-2xl underline">{data.title}</h1>
                                <h2 id='des' className="text-center m-2">{data.description}</h2>
                                <div className='flex justify-between  w-[100%]'>
                                    <h1 className="font-bold text-[#f0a14c]"> ${data.price}</h1>
                                    <button
                                    onClick={()=>{
                                        handleClick(data)
                                    }}
                                     className="bg-[#E19E58] text-[#4a6d7c] font-bold hover:text-[#eaa153] hover:bg-[#4a6d7c] py-[0.3rem] px-[1rem] rounded-md ">Add to cart</button>
                                </div>

                            </div>
                        </div>
                        <div className="product-details-container flex flex-col items-center mb-3">
                            <h1 id='title2' className="text-3xl font-bold underline">Product Details</h1>

                            <h2> <span className="font-bold text-[#ea9c4a] ">Category:</span> {data.category}</h2>
                            <h2> <span className="font-bold text-[#ea9c4a] " >Return Policy:</span> {data.returnPolicy}</h2>
                            <h2>  <span className="font-bold text-[#ea9c4a] ">Shipping Info: </span>{data.shippingInformation}</h2>
                            <h2 className=""> <span className="font-bold text-[#ea9c4a] ">Stock:</span> {data.stock}</h2>
                            <h2> <span className="font-bold text-[#ea9c4a] ">Warranty: </span>{data.warrantyInformation}</h2>
                            <h2 className=""> <span className="font-bold text-[#ea9c4a] ">Brand:</span> {data.brand}</h2>
                        </div>
                    </div>
                )
            })}
        </>

    )
}
export default ProductDetails;