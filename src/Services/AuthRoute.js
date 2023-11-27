import { Navigate } from "react-router-dom";
import { getLocalStorageItem } from "./Storages/localstorage"

export function AuthRoute(props){
  let userValid = false

  userValid = getLocalStorageItem('User');

  if ( userValid ){
      return props.children;
  } else {
    return <Navigate to='/Login'></Navigate>
  }
}






