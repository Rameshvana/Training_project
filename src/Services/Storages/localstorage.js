
export function setLocalStorageItem(key,value){
          value = JSON.stringify(value)
          localStorage.setItem(key,value)
}

export function getLocalStorageItem(key){
          return localStorage.getItem(key)
}