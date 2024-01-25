import React from 'react';
import './Header1.css';

import {Link} from "react-router-dom";

function Header1(){
    return(
        <div className='d-flex flex-row '>
        <nav className='list container-fluid'>
            <ul className='d-flex flex-row justify-content-end'>
                <h2>FITGYM</h2>
                <li className='list'>
                    <Link className='list' to="/">Home</Link>
                </li>
                <li className='list'>
                    <Link className='list' to="/about">About Us</Link>
                </li>
                <li className='list'>
                    <Link className='list' to="/membershipplans">Membership plans</Link>
                </li>
                <li className='list'>
                    <Link className='list' to="/workouts">Workouts</Link>
                </li>
                
                <li className='list'>
                    <Link className='list' to="/bmicalculator">BMI Calculator</Link>
                </li>
                <li className='list'>
                    <Link className='list' to="/testimonials">Testimonials</Link>
                </li>
                <li className='list'>
                    <Link className='list'  to="/register">Register</Link>
                </li>
                
            </ul>
        </nav>
        </div>
    );
}

export default Header1;