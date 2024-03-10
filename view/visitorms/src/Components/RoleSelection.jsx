import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const RoleSelection = () => {
    return (
        
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <div className='p-3 rounded w-50 border text-center'>
                <h2>Welcome to the Portal</h2>
                <p>Please select your role:</p>
                <div className='d-flex justify-content-around'>
                    <Link to="/employeelogin" className="btn btn-primary">Employee</Link>
                    <Link to="/adminlogin" className="btn btn-primary">Admin</Link>
                </div>
            </div>
        </div>
    );
};

export default RoleSelection;
