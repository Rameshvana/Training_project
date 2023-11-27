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




/// Add Property Api Calls here only 
const addPropertyUrl = 'http://localhost:8000/Add-property/'

export function saveAddpropertyData(data){
  return saveData(addPropertyUrl,data)
}

export function getAddPropertyData(){
  return getData(addPropertyUrl)
}

export function deleteAddPropertyData(data){
  return deleteItem(addPropertyUrl,data)
}

export function updateAddPropertyData(data){
  return updateData(addPropertyUrl,data)
}