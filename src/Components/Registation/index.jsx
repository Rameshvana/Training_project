import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import {  savetheData } from '../../Services/user.service';
import './index.css'

function Registation (){

   const navigate = useNavigate();

 // Save User Enter Data in db and take user data from input
   function SaveRegistationData(event) {

      let userName = document.getElementById('name').value
      let Email = document.getElementById('email').value
      let phoneNumber = document.getElementById('mobile').value
      let dateofbirth = document.getElementById('dateofbirth').value
      let password = document.getElementById('password').value
      let city = document.getElementById('city').value

      let data = {
         id:0,
         Name: userName,
         Email,
         phoneNumber,
         password,
         dateofbirth,
         city
      }

      savetheData(data)
      .then((res) => {
         alert('Data Saved Succsefully..')
         clearData();
      })
      .catch(()=>{
         alert('Data not Saved')
      })
   }

   function navigateLog(){
      alert('AS')
      navigate('/Login')
   } 


   function clearData(){
      let userName = document.getElementById('name').value = ''
      let Email = document.getElementById('email').value = ''
      let phoneNumber = document.getElementById('mobile').value = ''
      let dateofbirth = document.getElementById('dateofbirth').value = ''
      let password = document.getElementById('password').value = ''
      let city = document.getElementById('city').value = '' 
   }

// Validations used restrict the user in a form
   const {
      register,
      handleSubmit,
      formState : {errors},
   } = useForm();

   
    return(
     <div className='container'>
       
       <form className="my-form" onSubmit={handleSubmit(SaveRegistationData)}>
         <h1 className='registationform-heading'>Registation Form</h1>
         
          
            <div className="userinput-card">
               <label className='regi-label' for="name"><span>*</span>FullName</label> <br/>
               <input type='text' {...register('FullName',{required:true})}
               className="form-control regi-input" id='name'/>
               {errors.FullName && <p className='text-danger'>fullName Required </p>}
            </div>
            <div className="userinput-card">
               <label className='regi-label' for='email'> <span>*</span>Email</label>
               <input  type='email' {...register('Email',{required:true})}
               className="form-control regi-input" id='email'/>
               {errors.Email && <p className='text-danger'>Email Required</p>}
            </div>
            <div className="userinput-card">
               <label className='regi-label' for='mobile'> <span>*</span>Mobile No</label>
               <input type='text' {...register('MobileNo',{required:true})} 
               className="form-control regi-input" id='mobile'/>
               {errors.MobileNo && <p className='text-danger'>Mobile No Required</p>}
            </div>
            <div className="userinput-card">
               <label className='regi-label' for='dateofbirth'> <span>*</span>Date of birth</label>
               <input type='date' {...register('Dateofbirth',{required:true})}
               className="form-control regi-input" id='dateofbirth'/>
               {errors.Dateofbirth && <p className='text-danger'>Date of Birth Required</p>}
            </div>
        
            <div className="userinput-card">
               <label className='regi-label' for='password'> <span>*</span>Password</label>
               <input type='password' {...register('password',{required:true})}
               className="form-control regi-input" id='password'/>
               {errors.password && <p className='text-danger'>Password Required</p>}
            </div>
            <div className="userinput-card">
               <label className='regi-label' for='city'> <span>*</span>Choose your City</label>
               <select id='city' className="form-control regi-input">
                  <option value='Andrapradesh'>Andra pradesh</option>
                  <option value='Telangana'>Telangana</option>
                  <option value='Karnataka'>Karnataka</option>
               </select>
            </div>
            <div className='btns-card'>
               <button type='submit' className='btn btn-danger'>Submit</button> &nbsp; &nbsp; &nbsp; &nbsp;
               <button type='button' className='btn btn-success' onClick={navigateLog}>Login</button>
            </div>
      
       </form>
     </div>
   )
}
 
export default Registation