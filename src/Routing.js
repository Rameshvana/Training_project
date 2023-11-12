import { Routes,Route } from "react-router-dom"


import GridComponent from "./Components/Grid/grid.component."
import Registation from "./Components/Registation"
import  Login  from "./Components/login/login.component"
import { AdminLayout } from "./Components/admin/layout/admin-layout/admin-layout.component"

const Routing = () => (
  <Routes>
    <Route path='/Registation' element={<Registation></Registation>}/>
    <Route path='/Table' element={<GridComponent></GridComponent>}/>
    <Route path='/Login' element={<Login></Login>}/>
    <Route path='/Admin' element={<AdminLayout></AdminLayout>}/>
  </Routes>
)

export default Routing