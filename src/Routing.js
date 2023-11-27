import { Routes,Route } from "react-router-dom"


import GridComponent from "./Components/Grid/grid.component."
import Registation from "./Components/Registation"
import  {Login ,Wellcome} from "./Components/login/login.component"
import { AdminLayout } from "./Components/admin/layout/admin-layout/admin-layout.component"
import { PropertyType } from "./Components/admin/property/propety-type/property-type.component"
import { AddProperty } from "./Components/admin/property/add-property/add-property.component"
import ViewProperty from "./Components/admin/property/view-property/view-property.component"

export const Routing = () => (
  <Routes>
    <Route path='/Registation' element={<Registation></Registation>}/>
    <Route path='/Table' element={<GridComponent></GridComponent>}/>
    <Route path='/Login' element={<Wellcome></Wellcome>}/>
    <Route path='Admin' element={<AdminLayout></AdminLayout>}/>
    <Route path='/property-type' element={<PropertyType></PropertyType>}/>
    <Route path='/property-add' element={<AddProperty></AddProperty>}/>
    <Route path='/property-view' element={<ViewProperty></ViewProperty>}/>
  </Routes>
)



