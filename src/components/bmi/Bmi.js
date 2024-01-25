import React, { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { userLoginContext } from '../../context/userLoginContext';
import './Bmi.css';
function Bmi() {
  let { loginStatus, currentUser } = useContext(userLoginContext);
  console.log(loginStatus);
  console.log(currentUser);
  //const [age, setAge] = useState();
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState();
  const [msg, setMsg] = useState('');

  const reload = () => {
    setMsg('');
    window.location.reload()
  }

  const calculateBmi = (bmi) => {
    if (bmi < 25) {
      setMsg("You are UnderWeight");

    }


    else if (bmi > 30) {
      setMsg("You are OverWeight");

    }
    else {
      setMsg("You are Healthy");

    }
  }

  const handleCalculations = (e) => {
    e.preventDefault()
    const heightInMeters = height / 100;

    if (weight.length === 0 || height.length === 0) {
      alert('Please enter a valid number')
    }
    else {
      let bmiFormula = weight / (heightInMeters * heightInMeters);
      let res = bmiFormula.toFixed(2);
      setBmi(res);
      calculateBmi(bmi);
      console.log(bmi);
    }


    // if (bmi < 25) {
    //   setMsg("You are Underweight")
    //   console.log(bmi);


    // }
    // else if (bmi >= 25 || bmi <= 30) {
    //   setMsg("You are Healthy")
    //   console.log(bmi);

    // }
    // else {
    //   setMsg("You are Unhealthy, please seek for medication")
    //   console.log(bmi);
    // }
  }



  return (
    <div className='bgimg1' style={{ minHeight: "100vh" }}>
      <div className='container'>



        {/* <h2 className='center'>BMI Calculator</h2> */}
        <div className='fw-bold'>
          <p className='mt-4 p-3 rounded bg-info-subtle text-dark'>GET FIT AND HEALTHY WITH US NOW
            <Link className='ps-3' to='/membershipplans'>VIEW PLANS</Link></p>
        </div>
        <form className='formStyling'>

          <h2 className='center fw-bold mb-4'>BMI Calculator</h2>
          <div className="mb-3">
            <label htmlFor="weight" className="form-label">Weight (in KGs)</label>
            <input type="number" value={weight} placeholder="Weight...." onChange={(e) => setWeight(e.target.value)} className="form-control" id="name" />

          </div>

          <div className="mb-3">
            <label htmlFor="height" className="form-label">Height (in cms) </label>
            <input type="number" value={height} placeholder="Height...." onChange={(e) => setHeight(e.target.value)} className="form-control" id="name" />

          </div>

          <div className="mb-3">
            <button className='btn btn-primary mt-3 me-5 ms-1' type='submit' onClick={handleCalculations}>Calculate</button>
            <button className='btn btn-primary mt-3 ms-2' type='submit' onClick={reload}>clear</button>
          </div>
          {/* <div>
          <button className='btn btn-reload btn-primary' type='submit' onClick={reload}>Clear</button>
        </div> */}



          <div className='mb-3'>
            {/* <h3>Age:{age}</h3> */}
            <h3 className='fw-bold'>Your BMI is:{bmi}</h3>
            <p className='p-msg'>{msg}</p>
          </div>
        </form>
        <div className='fw-bold'>
          <p className='mt-4 p-3 rounded bg-info-subtle text-dark'>GET FIT AND HEALTHY WITH US NOW
            <Link className='ps-3' to='/membershipplans'>VIEW PLANS</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Bmi;
