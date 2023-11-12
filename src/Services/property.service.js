import { deleteItem, getData, saveData, updateData } from "./context.service"

const propertyUrl = 'http://localhost:8000/Property-type/'

export function savePropertyType(data){
  return saveData(propertyUrl,data)
}

export function getPropertyTypeData(){
  return getData(propertyUrl)
}

export function updatePropertyTypeData(data){
  return updateData(propertyUrl,data)
}

export function deletePropertyTypeData(data){
  return deleteItem(propertyUrl,data)
}