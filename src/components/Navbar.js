import "../styles/Navbar.scss";
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <div className='p-8'>
        <p className='font-semibold text-[26px] text-white cursor-pointer'>Shopify</p>
      </div>
      <div className='items-center flex justify-between p-8'>
        <Link to="/cart"><p className='font-medium text-[18px] text-white cursor-pointer'>My Cart</p></Link>
      </div>
    </nav>
  )
}

export default Navbar
