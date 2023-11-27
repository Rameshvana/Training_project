import { getData, saveData } from "./context.service";

let registationUrl = 'http://localhost:8000/Registations'

export function savetheData(data){
   return saveData(registationUrl,data)
}

export function gettheData(url){
  return getData(registationUrl)
}