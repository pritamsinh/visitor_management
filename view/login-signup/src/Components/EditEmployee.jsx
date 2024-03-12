import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditEmployee = () => {
    const { id } = useParams();
    const [employee, setEmployee] = useState({
        name: "",
        image: "",
        phone: "",
        email: "",
        address: "",
        designation: "",
        salary: ""
    });
    const [category, setCategory] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3000/auth/category')
            .then(result => {
                if (result.data.Status) {
                    setCategory(result.data.Result);
                } else {
                    alert(result.data.Error);
                }
            }).catch(err => console.log(err));

        axios.get('http://localhost:3000/auth/employee/' + id)
            .then(result => {
                setEmployee({
                    ...employee,
                    name: result.data.Result[0].name,
                    image: result.data.Result[0].image,
                    phone: result.data.Result[0].phone,
                    email: result.data.Result[0].email,
                    address: result.data.Result[0].address,
                    designation: result.data.Result[0].designation,
                    salary: result.data.Result[0].salary
                });
            }).catch(err => console.log(err));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:3000/auth/edit_employee/' + id, employee)
            .then(result => {
                if (result.data.Status) {
                    navigate('/dashboard/employee');
                } else {
                    alert(result.data.Error);
                }
            }).catch(err => console.log(err));
    }

    return (
        <div className="d-flex justify-content-center align-items-center mt-3">
            <div className="p-3 rounded w-50 border">
                <h3 className="text-center">Edit Employee</h3>
                <form className="row g-1" onSubmit={handleSubmit}>
                    <div className="col-12">
                        <label htmlFor="inputName" className="form-label">Name</label>
                        <input type="text" className="form-control rounded-0" id="inputName" placeholder="Enter Name"
                            value={employee.name} onChange={(e) => setEmployee({ ...employee, name: e.target.value })} />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputImage" className="form-label">Image</label>
                        <input type="text" className="form-control rounded-0" id="inputImage" placeholder="Enter Image URL"
                            value={employee.image} onChange={(e) => setEmployee({ ...employee, image: e.target.value })} />
                    </div>
                    <div className="col-12">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="text" className="form-control rounded-0" id="phone" placeholder="Enter Phone"
                            autoComplete="off" value={employee.phone} onChange={(e) => setEmployee({ ...employee, phone: e.target.value })} />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control rounded-0" id="inputEmail4" placeholder="Enter Email"
                            autoComplete="off" value={employee.email} onChange={(e) => setEmployee({ ...employee, email: e.target.value })} />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Address</label>
                        <input type="text" className="form-control rounded-0" id="inputAddress" placeholder="1234 Main St"
                            autoComplete="off" value={employee.address} onChange={(e) => setEmployee({ ...employee, address: e.target.value })} />
                    </div>
                    <div className="col-12">
                        <label htmlFor="designation" className="form-label">Designation</label>
                        <input type="text" className="form-control rounded-0" id="designation" placeholder="Enter Designation"
                            autoComplete="off" value={employee.designation} onChange={(e) => setEmployee({ ...employee, designation: e.target.value })} />
                    </div>
                    <div className='col-12'>
                        <label htmlFor="inputSalary" className="form-label">Salary</label>
                        <input type="text" className="form-control rounded-0" id="inputSalary" placeholder="Enter Salary"
                            autoComplete="off" value={employee.salary} onChange={(e) => setEmployee({ ...employee, salary: e.target.value })} />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary w-100">Edit Employee</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditEmployee;
