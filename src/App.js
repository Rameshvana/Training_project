import { BrowserRouter } from "react-router-dom"

import Menu from "./Components/Menu"
import Routing from "./Routing"
import { AdminLayout } from "./Components/admin/layout/admin-layout/admin-layout.component"

const App = () => (
  <BrowserRouter>
     <Menu/>
     <Routing/>
  </BrowserRouter>
)


export default App