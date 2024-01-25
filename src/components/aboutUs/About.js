import React from 'react';
import './About.css';
function About() {
  return (
    <div>
      <div className='bgimage2' style={{ minHeight: "100vh" }}>
        <h1 className='d-flex justify-content-center text-warning fw-bold p-5'>ABOUT US</h1>
        <h5 className='d-flex justify-content-center text-warning fw-bold mt-5 '>PUSH HARDER THAN YESTERDAY IF YOU WANT A DIFFERENT TOMORROW.</h5>
      </div>
      <div className='bg-dark pt-3 pb-5'>
        {/* <h1>About Us</h1> */}
        <h1 className='d-flex justify-content-center text-light'>WELCOME TO FITNESS FIRST GYM</h1>
        <p className='justify-content-center m-5 text-light'> Fitness First is Hyderabad's premier gym for All Round Health & Fitness. Our high energy facility offers comfort and safety along with a robust exercise regime. We strongly believe in making fitness a lifestyle and changing people's lives one at a time. The fitness experience at Fiteness First will strike the perfect balance to complement your daily activities. We provide innovative programs with our trainers to cater to people of all fitness levels. Our staff is composed of highly skilled and talented people to make sure that we exceed your expectations and surpass your goals. We believe in giving you the best because that is exactly what you deserve.

          Get a well-balanced fitness experience for the healthier, happier lifestyle you desire. At Fitness First we offer this and more to keep you fit and healthy not for just a month or two but for an entire lifetime. Fitness First makes it easy to fit healthy living into your busy schedule. With motivating trainers, innovative classes and tons of world class equipment we have everything you need to get and stay in shape. From the way you feel to the friends you make, you're going to love working out here.</p>
      </div>
    </div>
  );
}

export default About;
