import React, { useContext } from 'react';
import './Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { userLoginContext } from '../../context/userLoginContext';
function Login() {
  let {setLoginStatus,setCurrentUser} = useContext(userLoginContext);
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  let handleSubmit =  async(e) => {
    e.preventDefault();
    
    try{
      let  res= await axios.get(`http://localhost:5000/users?email=${email}`);
    
      let userData=res.data[0];
      // console.log(userData);
  
      if(email.length === 0 && password.length === 0){
        alert("No User found, Please enter valid details");
      }
      else if(userData.password === password){
        alert("login successfully")
        setLoginStatus(true);
        setCurrentUser(userData);
        navigate('/LoginHome')
      }
      
    }
    catch(error){
      console.log(error);
    }
  }

  return (


    <div className='bgrimg' style={{minHeight:"100vh"}}>
      <div className='container'>
        <form className='loginStyle' onSubmit={handleSubmit}>
          <h2 className='fw-bold'>Login</h2>

          <div className="mb-3 justify-content-center">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" placeholder='Enter your email id'/>
          </div>
          <div className="mb-3 justify-content-center">
            <label htmlFor="password" className="form-label w-50">Password</label>
            <input type="password" name='password' value={password} className="form-control " id="password" placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className='d-flex justify-content-center p-2'>
            <button type="submit"  className="btn btn-primary ms-4" >Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
