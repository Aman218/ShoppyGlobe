import {  useDispatch,useSelector } from "react-redux";
import { decrementItem, incrementItem } from "../utils/cartSlice";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link } from "react-router-dom";
// import HomeIcon from '@mui/icons-material/Home';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import './cart.css';
function Cart() {

    const cartItems = useSelector((store) => store.cart.items);
    console.log('cart_items',cartItems)
     const dispatch=useDispatch()
    function handleIncrement(item){
          dispatch(incrementItem(item))
    }
    function handleDecrement(item){
        dispatch(decrementItem(item))
    }
    return (
        <>
           {cartItems.length==0?  

           <div className="not-found-container flex flex-col h-[100vh] items-center justify-center">
                <h1 className='text-4xl font-semibold'>No items Found</h1>
                <Link to='/products' ><button className='bg-[#f49547] rounded-md mt-3 text-white font-medium py-2 flex items-center px-4 hover:bg-[#e34212]'> <ShoppingBasketIcon />Browse-More </button></Link>
            </div>:
           <>
            {cartItems.map((data) => {
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
                                    <h1 id='price' className="font-bold text-[#f0a14c]"> ${data.price}</h1>
                                    <h1 id='quantityAdded' className="font-bold text-[#f0a14c]"> Quantity Added: {data.quantity}</h1>
                                    <div>
                                    <button
                                    id="add_icon"
                                    onClick={()=>{
                                         handleIncrement(data)
                                    }}
                                     className="bg-[#E19E58] text-[#4a6d7c] font-bold hover:text-[#eaa153] hover:bg-[#4a6d7c] py-[0.1rem] px-[0.6rem] mr-2 rounded-md "><AddIcon/></button>
                                    <button 
                                    id="remove-icon"
                                    onClick={()=>{
                                        handleDecrement(data)
                                    }}
                                    className="bg-[#E19E58] text-[#4a6d7c] font-bold hover:text-[#eaa153] hover:bg-[#4a6d7c] py-[0.1rem] px-[0.6rem] rounded-md "><RemoveIcon/></button>
                                    </div>
                                   
                                </div>

                            </div>
                        </div>
                       
                    </div>
                )
            })}
            </>
           }
        </>
    )
}
export default Cart;