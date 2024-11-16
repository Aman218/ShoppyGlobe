import { useState } from 'react';
import './Header.css';
import HomeIcon from '@mui/icons-material/Home';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
    const [showMenu, setShowMenu] = useState(false);

    function handleClick() {
        setShowMenu(!showMenu);
    }

    const cartItem=useSelector((store)=>store.cart.items);
    console.log('cartItems',cartItem);
    return (
        <>
            <div className="p-2 flex justify-between header">
                <div className="nested-header left-sec flex w-[20%] items-center">
                    <div className='img-sec w-[50%]'>
                        <img src="https://cdn.icon-icons.com/icons2/3767/PNG/512/bag_shopping_icon_231414.png" alt="" />
                    </div>
                    <h1 className="p-3 heading ">SHOPPYGLOBE</h1>
                </div>

                <div className="right-sec flex items-center px-3">
                    <Link to="/" className='mr-8 anchor'> <HomeIcon /> <span>Home</span></Link>
                    <Link to="/products" className='mr-8 anchor'> <LocalMallIcon /> <span>Product</span></Link>
                    <Link to="#" className='mr-8 anchor'> <PersonIcon /><span>Login</span></Link>
                    <Link to="/cartDetails" className='mr-8 anchor'> <ShoppingCartIcon className='' /> <sub className=' font-semibold text-[#ffa938] text-[1.2rem] relative top-[-14px] right-5'>
                        {cartItem.length>0?cartItem.length:''}</sub></Link>
                </div>

                <div className="mobile-section relative px-3">
                    <Link to="/cartDetails" className='text-2xl mr-3 cursor-pointer hover:text-[#6329CC] '><ShoppingCartIcon/> <sub className=' font-semibold text-[#ffa938] text-[1.2rem] relative top-[-14px] right-5'>
                    {cartItem.length>0?cartItem.length:''}</sub> </Link>
                    <Link to="#" onClick={handleClick} className='hover:text-[#6329CC] cursor-pointer ' id='menu-tag'>
                        {!showMenu?<MenuIcon/>:<CloseIcon/>}
                    </Link>
                </div>
            </div>

            {/* Menu Options */}
            {showMenu && (
                <div className="menu-options absolute top-14 right-0 w-[40%] h-auto
                 bg-[#E19E58] bg-opacity-90 flex flex-col items-center py-3 mr-1 rounded-lg z-10">
                    <Link to="/" className="menu-item text-white text-2xl py-1 px-2 hover:bg-[#6329CC] w-full text-center">
                        Home
                    </Link>
                    <Link to="/products" className="menu-item text-white text-2xl py-1 px-2 hover:bg-[#6329CC] w-full text-center">
                        Products
                    </Link>
                    <a href="#" className="menu-item text-white text-2xl py-1 px-2 hover:bg-[#6329CC] w-full text-center">
                        Login
                    </a>
                    <a href="#" className="menu-item text-white text-2xl py-1 px-2 hover:bg-[#6329CC] w-full text-center">
                        Cart
                    </a>
                </div>
            )}
        </>
    );
}

export default Header;
