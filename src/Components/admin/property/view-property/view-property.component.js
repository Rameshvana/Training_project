import { AdminMenu } from "../../layout/admin-menu/admin-menu.component"

const ViewProperty  = () => {
  return(
    <div className="row">
       <div className="col-3">
          <AdminMenu/>
       </div>
       <div className="col-8">
          <h2>View Property</h2>
       </div>
    </div>
  )
}

export default ViewProperty