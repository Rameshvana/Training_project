  import {Link} from 'react-router-dom'
  import './admin-menu.component.css';
  
  export function AdminMenu(){
      return(
        
          <div className="admin-menu">
             <h2 className='mb-3'>Admin Menu</h2>
             <div>
                <h6 className='typeone'>Propertyies</h6>
                <ul className='unorder-list'>
                    <li><Link to='/property-type' className='property-link'>Property Type</Link></li>
                    <li><Link to='/property-add' className='property-link'>Add Property</Link></li>
                    <li><Link to='/property-view' className='property-link'>View Property</Link></li>
                </ul>
             </div>
             <div>
                <h6 className='typeone'>Facilities</h6>
                <ul className='unorder-list'>
                    <li><Link className='property-link'>Facility Type</Link></li>
                    <li><Link className='property-link'>Add Facility</Link></li>
                    <li><Link className='property-link'>View Facility</Link></li>
                </ul>
             </div>
          </div>
      )
  }