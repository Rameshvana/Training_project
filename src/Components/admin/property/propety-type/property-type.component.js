import {useRef,useState,useEffect} from 'react'
import './property-type.component.css'
import { deletePropertyTypeData, getPropertyTypeData, savePropertyType, updatePropertyTypeData } from '../../../../Services/property.service';
import SharedComponent from '../../../Shared/shared.component';

export function PropertyType(){

    const [showMsg,setshowMsg] = useState(false)
    const [propertyGridData,setpropertyGridData] = useState([]);
    const [saveBtntext,setSaveBtntext] = useState('Save')
    const [propertyId,setpropertyId] = useState(0)

    const headers = [ 'iD','Property Name','Description','Facility', 'Actions' ]
   
  const propertyNameRef = useRef();
  const propertyDisRef = useRef();
  const propertyFacilitiesRef = useRef();

  // Save the UserDta in Db and get the data from user
  const savePropertyTypeData = () => {

          let data = {
          id:propertyId,
          propertyName: propertyNameRef.current.value,
          propertyDescription: propertyDisRef.current.value,
          propertyFacility: propertyFacilitiesRef.current.value
          }

          if (propertyId == 0){
               savePropertyType(data)
               .then((res) => {
                    setshowMsg(true)
                    setSaveBtntext('Save')
                    hideMassage()
                    CallThedata()
                    
               })
               .catch(() => {
               alert('PropertyType Data Saved Failed')
               })
     }else{
          updatePropertyTypeData(data)
          .then((res) => {
            CallThedata()
            ClearData()
          })
          .catch(() => {
            alert('Data upte Failed')
          })
     } 
  }

  // Get the data in database by using useEffect() hook
  const CallThedata = () => {

     getPropertyTypeData()
     .then((res) => {
          setpropertyGridData(res.data)
          console.log(res.data)
          
     })
     .catch(() => {
          alert('Calcel')
     })

  }
     useEffect(() => {
          CallThedata()
     },[])

  // Update the data
  const UpdatePropertyGrid = (item) => {

     propertyFacilitiesRef.current.value = item.propertyFacility
     propertyDisRef.current.value= item.propertyDescription
     propertyNameRef.current.value= item.propertyName

     setSaveBtntext('Update')
     setpropertyId(item.id)
     console.log(item.id)
     
  }

  // delete property data
  const deleteItemGrid = (item) => {
    
    deletePropertyTypeData(item.id)
    .then((res) => {
      CallThedata()
    })
    .catch(() => {
     alert('Not deleted')
    })
  }
     

  // Hide the success Msg of save data in db
  const hideMassage = () => {
     setTimeout(()=> {

          setshowMsg(false)
     },5000)
  }
  
  // clear the user entered data in input tags
  const ClearData = () => {
          propertyFacilitiesRef.current.value = ''
          propertyDisRef.current.value=''
          propertyNameRef.current.value=''
          setSaveBtntext('Save')
  }

  return(
  <div>
     <div className="form-group">
          <label className='propty-label'>Property Name:</label>
          <input type='text' className="form-control input" ref={propertyNameRef}/>
     </div>
     <div className="form-group">
       <label className='propty-label'>Property Description:</label>
       <input type='text' className="form-control input" ref={propertyDisRef}/>
     </div>
     <div className="form-group">
       <label className='propty-label'>Property Facilities:</label>
       <input type='text' className="form-control input" ref={propertyFacilitiesRef}/>
     </div>
     <div className="mt-5">
          <button type='button' className='btn btn-primary' onClick={savePropertyTypeData}>{saveBtntext}</button> &nbsp; &nbsp;
          <button type="button" className="btn btn-secondary" onClick={ClearData}>Cancel</button>
     </div>
     {showMsg ?  <p className='Msg-para'>PropertyType data saved Succefully...</p> : <p></p>}
     <div className='mt-5'>
          {<SharedComponent key='A' title={"Property Type"}  headers = {headers} body={propertyGridData}
           UpdatePropertyGrid={UpdatePropertyGrid} deleteItemGrid={deleteItemGrid} />}
     </div>
  </div>
  )
}