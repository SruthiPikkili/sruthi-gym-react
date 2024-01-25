import React, { useState } from 'react';
import './Payment.css';

const PaymentPage = () => {
    const [billingInfo, setBillingInfo] = useState({
        cardNumber: '',
        expirationDate: '',
        cvv: '',
        name: '',
    });
    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setBillingInfo({
    //         ...billingInfo,
    //         [name]: value,
    //     });
    // };

    const handlePaymentSubmit =(e)=>{
        e.preventDefault();
    }
    // const handlePaymentSubmit = (e) => {
    //     e.preventDefault();

    //     // console.log('Payment submitted:', billingInfo);
    // };
    return (

        <div className='payimg' style={{ minHeight: "100vh" }}>
            <div className='container'>
                <form className='payment'>
                    <h2 className='fw-bold'>Membership Payment</h2>

                    <div className="mb-3 justify-content-center">
                        <label htmlFor="cardNumber" className="form-label">Card Number</label>
                        <input type="number" value={billingInfo.cardNumber}
                             className="form-control" id="cardNumber" />
                    </div>
                    <div className="mb-3 justify-content-center">
                        <label htmlFor="expirydate" className="form-label w-50">Expiration Date</label>
                        <input type="date" name='date' value={billingInfo.expirationDate}
                             className="form-control " id="date" />
                    </div>

                    <div className="mb-3 justify-content-center">
                        <label htmlFor="cvv" className="form-label w-50">CVV:</label>
                        <input type="cvv" name='cvv' value={billingInfo.cvv}
                             className="form-control " id="cvv" />
                    </div>

                    <div className="mb-3 justify-content-center">
                        <label htmlFor="name" className="form-label w-50">Name on Card:</label>
                        <input type="text" name='name' value={billingInfo.name}
                             className="form-control " id="name" />
                    </div>

                    <div className='d-flex justify-content-center p-2'>
                        <button type="submit" className="btn btn-primary ms-4" onClick={handlePaymentSubmit}>Conform Payment</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default PaymentPage;