import axios from "axios";

// get call for data using axios
export function getData(Url){
          return axios.get(Url);
}

export function saveData(Url,data){
          return axios.post(Url,data)
}


export function updateData(Url,data){
   return axios.put(Url+(data.id),data)
}


export function deleteItem(Url,data){
  return axios.delete(Url+data)
}