import './Body.css';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
function Body() {
    return (
        <>
            <div className="container-Body">
                <div className="left-sec-Body">
                    <h1>
                        SHOP SMART, SAVE BIG
                    </h1>
                    <h2>Browse the Best Selections for the Best Value.</h2>
                    <div className='text-center'> <Link to='/products'><button className='left-sec-button'>Shop Now</button></Link></div>
                </div>
                <div className="right-sec-Body">
                    <img src="https://cdn.pixabay.com/photo/2024/05/10/09/05/e-commerce-8752533_960_720.jpg" alt="Image" />
                </div>
            </div>

            <footer className=' footer-sec w-[60%] mx-auto flex flex-col items-center'>
                <div className='footer-sec1 flex items-center m-1'>
                    <img src="https://cdn.icon-icons.com/icons2/3767/PNG/512/bag_shopping_icon_231414.png" alt="" width='40px' height='40px' />

                    <h1 className='text-2xl font-bold text-[#E19E58]' id='footer-head1'>ShoppyGlobe</h1>
                </div>
                <div className='footer-sec2 m-1'>
                    <a href="" className='mr-2 text-[#E19E58]'><LocalPhoneIcon className='hover:text-[#6329CC]' /></a>
                    <a href="" className='mr-3 text-[#E19E58]' > <AttachEmailIcon className='hover:text-[#6329CC]' /></a>
                    <a href="" className='mr-2 text-[#E19E58]' ><InstagramIcon className='hover:text-[#6329CC]' /></a>
                </div>
                <div className='footer-sec3 m-1'>
                    <h1 className='text-[1rem] font-semibold' id='footer-head'> <span className='text-[#e19e58] font-bold'>&copy; </span>Copyright 2024, All rights Reserved</h1>
                </div>
            </footer>
        </>
    )
}
export default Body;