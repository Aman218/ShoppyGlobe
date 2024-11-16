import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
function NotFound() {
    return (
        <>
            <div className="not-found-container flex flex-col h-[100vh] items-center justify-center">
                <h1 className='text-4xl font-semibold'>Page Not Found,404</h1>
                <Link to='/' ><button className='bg-[#f49547] rounded-md mt-3 text-white font-medium py-1 px-4 hover:bg-[#e34212]'> <HomeIcon />Go Back</button></Link>
            </div>
        </>
    )
}
export default NotFound;