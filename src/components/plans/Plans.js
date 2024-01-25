import React from 'react';
import './Plans.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { userLoginContext } from '../../context/userLoginContext';
// import {PlansData} from '../plans/PlansData'
// import { NavLink } from 'react-router-dom';
function Plans(props) {
  let { loginStatus } = useContext(userLoginContext)

  const navigate = useNavigate();
  let handleViewPlans = (e) => {
    e.preventDefault();
    loginStatus ?

      navigate('/Payment')

      :

      navigate('/register');


  }
  return (
    <div>


      <div className='container'>


        <div className="">
          <div className="card p-2 m-5 5 planStyle" style={{ width: "18rem", minHeight: "460px" }}>
            <div className="card-body">
              <h2 className="card-title text-dark fw-bold"><span>{props.plan}</span></h2>
              <h4><span >{props.duration}</span></h4>
              <h5 className='fw-bold'><span>{props.price}</span></h5>
              <h5 className="card-title"><span>{props.subtitle}</span></h5>
              {
                props.features.map((item) => {
                  return (<h6>{item}</h6>)
                })
              }



              {/* <button className='btn btn-dark ms-5 align-items-center' type='submit' onClick={handleViewPlans}>BUY NOW</button> */}

              {/* <h5><span>{props.features}</span></h5> */}

            </div>
            <button className='btn btn-dark pt-3 pb-3 align-items-center' type='submit' onClick={handleViewPlans}>BUY NOW</button>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Plans;
