import { useEffect, useState } from "react";
import './ProductList.css'
import { Link } from "react-router-dom";
import StarsIcon from '@mui/icons-material/Stars';
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
function ProductList(){
   
    const [productDetails,setProductDetails]=useState([]);
    const [initialProduct,setInitialProduct]=useState([]);
     useEffect(()=>{
           fetchdata();
           
     },[]);

   async function fetchdata(){
         const data= await fetch('https://dummyjson.com/products');
         const result=await data.json();
         console.log(result);
         setProductDetails(result.products);
         setInitialProduct(result.products);
   }  

   function handleChange(e){
    const searchText=e.target.value;

     if(searchText==''){
        setProductDetails(initialProduct)
     }
     else{
        const filterDataSearch=initialProduct.filter((product)=>{
            if(product.title.toLowerCase().includes(searchText.toLowerCase())){
                return true;
            }
        })
        setProductDetails(filterDataSearch);
     }
   
   }
   const dispatch=useDispatch()
   function handleClick(item){
        dispatch(addItem(item))
   }

    return (
        <>
            <div className="text-center m-3">
                <input type="text" id='input' onChange={(e)=>{
                    handleChange(e)
                }} placeholder="Search by Product Name" />
            </div>
      
            <div className="product-container ">
                {productDetails.map((product)=>{
                   
                    return (
                        
                           <div className="grid-items" key={product.id}>
                            <div className="img-cont flex h-[10rem] justify-center ">
                            <img src={product.images[0]} alt=""  />
                            </div>
                             
                              <h1 className="text-center font-bold">{product.title}</h1>
                              <h3 className="text-center font-semibold text-[#ed983d]"> <StarsIcon/>{product.rating}</h3>
                              <h3 className="text-[0.799rem] font-[300] p-1">{product.description}</h3>
                              <div className="price flex justify-between">
                                <h2 className="font-semibold text-[#ed983d] m-2 price-tag-sec"> ${product.price}</h2>
                                <div className="buttonDetails m-1">
                                    <button  onClick={()=>{handleClick(product)}}
                                     className="py-1 px-3 font-[500] bg-[#ed983d] text-white mr-2 rounded-md hover:bg-[#837665f3] ">Add to cart</button>
                                    <Link to={`/product/${product.id}`}><button className="py-1 px-3 font-[500] bg-[#ed983d] text-white rounded-md hover:bg-[#837665f3] " >Details</button></Link>
                                </div>
                              </div>
                           </div>
                        
                    )
                })}
            </div>
           
        </>
    )
}
export default ProductList;