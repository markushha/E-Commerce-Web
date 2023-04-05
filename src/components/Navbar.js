import "../styles/Navbar.css";
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='flex items-center justify-between h-16 w-full bg-[#03001C]'>
      <div className='p-8'>
        <p className='font-semibold text-[26px] text-white cursor-pointer'>ShopTop</p>
      </div>
      <div className='items-center flex justify-between p-8'>
        <Link to="/cart"><p className='font-medium text-[18px] text-white cursor-pointer'>Cart</p></Link>
      </div>
    </nav>
  )
}

export default Navbar
