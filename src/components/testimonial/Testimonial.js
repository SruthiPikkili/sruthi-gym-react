import React from 'react';
import './Testimonial.css';
function Testimonial(props) {
    return (
        <>
            
                <div className='card mt-3 mb-3 testimg' style={{ width: "50rem" }}>
                
                    <div className='card-body'>
                        
                        <div className='card-title'>
                            <h2 className='fw-bold'><span>{props.name}</span></h2>
                            <h6><span>{props.review}</span></h6>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default Testimonial;
