import {Link} from 'react-router-dom'
import './index.css'

function Menu (){
  return (
  <div>
     <ol className='menu'>
        <li className='menu_list'><Link to='/' className='menu-link'>Home</Link></li>
        <li className='menu_list'>AboutUs</li>
        <li className='menu_list'>Groesery
            <ul className='Grosery_sub_menu'>
              <li >Vegetables</li>
              <li >Household Care</li>
              <li >Snacks</li>
              <li >Biscuits</li>
              <li >Rice</li>
            </ul>
        </li>
        <li className='menu_list'>Mobile
            <ul className='mobiles_sub_menu'>
              <li>Apple</li>
              <li >Samsung</li>
              <li >Xiaomi</li>
              <li >OnePlus</li>
              <li >Nothing</li>
            </ul>
        </li>
        <li className='menu_list'>Electronics
            <ul className='electronics_sub_menu'>
              <li >Furnitures</li>
              <li >Fridge</li>
              <li >Cooler</li>
              <li >Mobile</li>
              <li >Fan</li>
            </ul>
          </li>
        <li className='menu_list'>
          <Link to='/Registation' className='menu-link'>Registation form</Link>
        </li>
        <li className='menu_list'>
          <Link to='/Table' className='menu-link'>Table form</Link>
        </li>
        <li className='menu_list'>
          <Link to='/Login' className='menu-link'>Login form</Link>
        </li>
        <li className='menu_list'>
          <Link to='/Admin' className='menu-link'>Admin Menu</Link>
        </li> 
     </ol>
  </div>
  )
}

export default Menu