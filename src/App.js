import React from 'react';
import './App.css';
import {Route,Routes} from "react-router-dom";

import Home from "./components/Home";
import About from './components/aboutUs/About';
import Plans from './components/plans/Plans';
// import PlansData from './components/plans/PlansData';
import Services from './components/services/Services';
import Bmi from './components/bmi/Bmi';
import Register from './components/register/Register';

import Payment from './components/payment/Payment';
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import LoginHome from './components/loginHome/LoginHome';
import PlansData from './components/plans/PlansData';
import Testimonial from './components/testimonial/Testimonial';
import TestimonialData from './components/testimonial/TestimonialData';
// import gym1 from './components/images/gym1.jpg';
// import gym2 from './components/images/gym2.jpeg';
// import gym3 from './components/images/gym3.jpg';
function App() {

//   let userObj=[{image:gym1,title:"Luciana F.",body:"Fitness within is the cleanest and most organized gym I’ve ever seen! I have no words to say how wonderful they are! Domenic makes you feel super comfortable, Kaitlyn helps you eat better and healthy! Fitness Within has a team of excellence! They have a place for anyone, a plan for any goal, everything is very flexible! I am extremely satisfied with Fitness Within and the entire team. 1 to 10. They are 11🥇"},
//      {image:gym2,title:"Kristine M.",body:"Since joining Fitness Within one year ago, I have become stronger and I have lost 38lbs.  The workouts are always different, hard and fun!  The trainers will push you harder than though you could go. When I joined, I also signed up for their HYBRID program.   I liked knowing you have someone there if you have questions and who is also going to hold you accountable.  The meal plans were easy to customize to your personal needs.  I really appreciate that the environment and culture is relaxed and comfortable.  (April 2020)"},
//      {image:gym3,title:"Deb W.",body:"It has been almost one year and I have lost weight and increased my strength.  I find the coaches – so motivating and supportive.  During the shred I worked with Dave and he was very motivating and held me accountable.  The nutritional guidance and meal plans are easy to follow that is realistic and plenty of food. Everyone is extremely – REAL – supportive, FUN, KNOWLEDGABLE and challenging."}
//  ]
  return (
    <div>
      <Navbar />
      {/* <Header1 /> */}
      <Routes>
        {/* <Route path="/" element={<Header1/>} /> */}
        <Route path="/" element={<Home/>} />
        <Route path="/membershipplans" element={<PlansData />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/bmicalculator" element={<Bmi />} />
        <Route path="/testimonial" element={<TestimonialData/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/LoginHome" element={<LoginHome />} />
        <Route path="/payment" element={<Payment />} />
       
      </Routes>
      
    </div>
  );
}

export default App;
