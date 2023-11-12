import {Component} from 'react'

import { Redirect } from 'react-router-dom'

import {useForm} from 'react-hook-form'

import './login.component.css'
import { gettheData } from '../../Services/user.service'



class Login extends Component{

  successForm = (props) => {

    const {history} = this.props

  }

  SubmitForm = (event) => {
    event.preventDefault()
      let Email = document.getElementById('email').value
      let Password = document.getElementById('password').value

      gettheData()
      .then((res) => {
        let user = res.data.filter((item) => item.Email == Email && item.password == Password)
        if (user.length > 0){
        
          
          
        } else{
          alert('User does not exist')
        }
      })
 }

 
 
  render(){
   
    return (
      <div className='main-container'>
      <form className='login-card' onSubmit={this.SubmitForm}>
          <h1 className='login-heading'>Login Page</h1>
          <hr/>
          <div>
            <label className='label-el'><span>*</span>Email</label> <br/>
            <input type='text' name='username'  id='email' className='form-control input'/>
          </div>
          <div>
            <label className='label-el'><span>*</span>Password</label> <br/>
            <input type='password' name='password' id='password' className='form-control input'/>
          </div>
          <div className='btn-card'>
            <button type='submit'  className='btn btn-success'>Login</button> &nbsp; &nbsp; &nbsp; &nbsp;
            <button type='button' className='btn btn-danger'>Calcel</button>
          </div>
      </form>
      </div>
    )
  }
}

export default Login