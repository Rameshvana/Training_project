  import './admin-menu.component.css';
  
  export function AdminMenu(){
      return(
          <div className="admin-menu">
             <h4>Admin Menu</h4>
             <div>
                <h6 className='text-light'>Propertyies</h6>
                <ul className='unorder-list'>
                    <li>Property Type</li>
                    <li>Add Property</li>
                    <li>View Property</li>
                </ul>
             </div>
             <div>
                <h6 className='text-light'>Facilities</h6>
                <ul className='unorder-list'>
                    <li>Facility Type</li>
                    <li>Add Facility</li>
                    <li>View Facility</li>
                </ul>
             </div>
          </div>
      )
  }