import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { userLoginContext } from '../../context/userLoginContext';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
function Navbar() {
    let {setLoginStatus, loginStatus,setCurrentUser ,currentUser } = useContext(userLoginContext)
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate=useNavigate()
    const handleLogout=()=>{
        currentUser=setCurrentUser('');
        loginStatus=setLoginStatus(false)
        navigate('/home')
    }
    return (
        <>
            {
                loginStatus ?
                    <>
                        <nav>
                            <Link to="/LoginHome" className='title'>FITNESS FIRST</Link>
                            <h5 className='p-2 mt-3 mb-3 text-light'> {currentUser.username}</h5>
                            <div className="menu" onClick={() => {
                                setMenuOpen(!menuOpen);
                            }}>
                                <span></span>
                                <span></span>
                                <span></span>

                            </div>
                            <ul className={menuOpen ? "open" : ""}>
                                
                                {/* <li>
                                    <NavLink to="/home" className='p-2 m-3'>{currentUser.username}</NavLink>
                                </li> */}
                                <li>
                                    <NavLink to="/bmicalculator" className='p-2 m-3 3'>BMI Calculator</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" className='p-2 m-3 3'>About</NavLink>
                                </li>

                                <li>
                                    <NavLink to="membershipplans" className='p-2 m-3 3'>Membership Plans</NavLink>
                                </li>
                                {/*} <li >
                    <NavLink to="/bmicalculator" className='p-2 m-3 3'>BMI Calculator</NavLink>
                    </li> */}
                                {/* <li>
                    <NavLink to="/services" className='p-2 m-3 3'>Services</NavLink>
                     </li> */}
                                <li>
                                    <NavLink to="/testimonial" className='p-2 m-3 3'>Testimonials</NavLink>
                                </li>

                                <li>
                                    <NavLink to="/" onClick={handleLogout} className='p-2 m-3 3'>Logout</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </>
                    :
                    <>
                        <nav>
                            <Link to="/" className='title'>FITNESS FIRST</Link>

                            <div className="menu" onClick={() => {
                                setMenuOpen(!menuOpen);
                            }}>
                                <span></span>
                                <span></span>
                                <span></span>

                            </div>
                            <ul className={menuOpen ? "open" : ""}>
                                <li>
                                    <NavLink to="/about" className='p-2 m-3 3'>About</NavLink>
                                </li>

                                <li>
                                    <NavLink to="membershipplans" className='p-2 m-3 3'>Membership Plans</NavLink>
                                </li>
                                {/*} <li >
                    <NavLink to="/bmicalculator" className='p-2 m-3 3'>BMI Calculator</NavLink>
            </li> */}
                                {/* <li>
                    <NavLink to="/services" className='p-2 m-3 3'>Services</NavLink>
                </li> */}
                                <li>
                                    <NavLink to="/testimonial" className='p-2 m-3 3'>Testimonials</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/register" className='p-2 m-3 3 text-danger'>Register Now</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </>
            }
        </>
    );
}

export default Navbar;
