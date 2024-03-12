import React, { useState } from 'react';
import './style.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        designation: ''
    });
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/employee/signup', values)
            .then(result => {
                if (result.data.signupStatus) {
                    navigate('/login');
                } else {
                    console.error(result.data.error);
                }
            })
            .catch(err => console.error(err));
    };

    return (
        <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
            <div className='p-3 rounded w-29 border loginForm'>
                <h2>Sign Up Page</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="name"><strong>Name:</strong></label>
                        <input type="text" name='name' autoComplete='off' placeholder='Enter Name'
                            onChange={(e) => setValues({ ...values, name: e.target.value })} className='form-control rounded-0' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email:</strong></label>
                        <input type="email" name='email' autoComplete='off' placeholder='Enter Email'
                            onChange={(e) => setValues({ ...values, email: e.target.value })} className='form-control rounded-0' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="phone"><strong>Phone:</strong></label>
                        <input type="tel" name='phone' autoComplete='off' placeholder='Enter Phone'
                            onChange={(e) => setValues({ ...values, phone: e.target.value })} className='form-control rounded-0' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password:</strong></label>
                        <input type="password" name='password' autoComplete='off' placeholder='Enter Password'
                            onChange={(e) => setValues({ ...values, password: e.target.value })} className='form-control rounded-0' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="designation"><strong>Designation:</strong></label>
                        <input type="text" name='designation' autoComplete='off' placeholder='Enter Designation'
                            onChange={(e) => setValues({ ...values, designation: e.target.value })} className='form-control rounded-0' />
                    </div>
                    <button className='btn btn-success w-100 rounded-0 mb-2'>Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
