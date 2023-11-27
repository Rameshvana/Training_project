import { AuthRoute } from "../../../../Services/AuthRoute";
import { AddProperty } from "../../property/add-property/add-property.component";
import { PropertyType } from "../../property/propety-type/property-type.component";
import { AdminMenu } from "../admin-menu/admin-menu.component";


export function AdminLayout(){
  return (
    <AuthRoute>
    <div className="row">
        <div className="col-3">
          <AdminMenu/>
        </div>
        <div className="col-9">
            <></>
        </div>
    </div>
   </AuthRoute>
  )
  
}