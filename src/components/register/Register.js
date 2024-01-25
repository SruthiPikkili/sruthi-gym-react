import React from 'react';
import './Register.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { useState } from 'react';


function Register() {



  // let [data, setData] = useState([]);

  let [username, setUserName] = useState('');
  let [password, setPassword] = useState('');
  let [email, setEmail] = useState('');
  let [gender, setGender] = useState(null);
  let [mobile, setMobile] = useState('');
  let [age, setAge] = useState('');

  const navigate = useNavigate();

  // const handleGenderChange=(event)=>{
  //   setGender(event.target.value)
  // }

  let handleSubmit = async (e) => {
    e.preventDefault();
    let userData = {};


    try {
      console.log("/hello");
      userData.username = username;
      userData.email = email;
      userData.mobile = mobile;
      userData.gender = gender;
      userData.age = age;
      userData.password = password;


      let res = await axios.post("http://localhost:5000/users", userData);
      // setData(res.data);

      if(email.length === 0 && password.length === 0){
        alert("Please enter valid details");
      }
      else{
        alert("Registered");
        navigate('/Login');
      }
      
      console.log(res.data);
      
    }
    catch (error) {
      console.log(error);
    }



  }
  return (
    <div className='bgimg1' style={{ minHeight: "100vh" }}>
      <div className='container'>
        <form className='formStyle'>
          <h2 className='fw-bold align-items-center'>Registration Form</h2>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} className="form-control" id="name" required/>

          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" required/>

          </div>

          <div className="mb-3">
            <label htmlFor="mobile" className="form-label">Mobile</label>
            <input type="number" value={mobile} onChange={(e) => setMobile(e.target.value)} className="form-control" id="mobile" required/>
          </div>

          <div className="mb-3">
            <label htmlFor="gender" className="form-label">Gender</label>
            <div className='d-flex '>
              <input type="radio" name="gender" value="male" checked={gender==="male"} onChange={(e) => setGender(e.target.value)} className="form-check-input" id="Male" />Male
              <input type="radio" name="gender" value="female" checked={gender==="female"} onChange={(e) => setGender(e.target.value)} className="form-check-input ms-5" id="Female" />Female
            </div>

            <div className="mb-3">
              <label htmlFor="age" className="form-label">Age</label>
              <input type="number" value={age} onChange={(e) => setAge(e.target.value)} className="form-control" id="age" required/>
            </div>

            <div className="mb-3 ">
              <label htmlFor="password" className="form-label w-50">Password</label>
              <input type="password" name='password' value={password} className="form-control" id="password" placeholder='Enter new password' onChange={(e) => setPassword(e.target.value)} required/>
            </div>

            {/* <div>
            <label htmlFor="plans" className="form-label">Membership Plans</label><br></br>

            <select>
              <option>--Select--</option>
              <option>Premium</option>
              <option>Standard</option>
              <option>Regular</option>
            </select>
            </div> */}
          </div>

          {/* <div className='mt-2 '>
            <button type="submit" className="btn btn-primary">Register</button>
          </div> */}

          <div className='d-flex justify-content-center pt-2'>
            <button type="submit" onClick={handleSubmit} className="btn btn-primary ms-4 ps-4 pe-4 pt-2 pb-2">Register</button> 
          </div>
            <div className='d-flex justify-content-center p-4'>
              <p className='d-flex'>Already Registered!!! Please <Link className='text-decoration-none ps-2' to='/login'> LOGIN</Link></p>

            </div>

            {/* <p>Already Registered!!! Please <Link to='/login'>Login</Link></p> */}
            {/* <button type="submit" onSubmit={handleSubmit} className="btn btn-primary ms-4">Register</button> */}
          







        </form>


      </div>
    </div>
  );
}

export default Register;
