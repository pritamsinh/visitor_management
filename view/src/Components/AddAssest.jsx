import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddAssest = () => {
  const [assest, setAssest] = useState({
    name: "",
    department: "",
    status: "",    
    remark: "",
    aId: "" 
  });
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    // Logging form data before sending the POST request
    console.log("Form Data Before Submission:", assest);

    const formData = new FormData();
    formData.append("name", assest.name);
    formData.append("department", assest.department);
    formData.append("status", assest.status);   
    formData.append("remark", assest.remark);
    formData.append("aId", assest.aId);

    axios.post("http://localhost:3000/assests/add", formData)
    .then(result => {
      console.log("Server Response:", result.data); 
      if(result.data.message === 'assest created successfully') {
          console.log("Asset created successfully!");
          localStorage.setItem("valid", true);
          navigate('/assets');
      } else {
          console.error("Something went wrong:", result.data.message);
      }
    })
    .catch((err) => {
      console.error("An error occurred while processing your request:", err);
      // Handle the error gracefully, display a message to the user, etc.
    });
  
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Add Asset</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="inputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="name"
              placeholder="Enter Name"
              value={assest.name}
              onChange={(e) => setAssest({ ...assest, name: e.target.value })}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputDepartment" className="form-label">
              Department
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="department"
              placeholder="Enter Department"
              value={assest.department}
              onChange={(e) => setAssest({ ...assest, department: e.target.value })}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputStatus" className="form-label">
              Status
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="status"
              placeholder="Enter Status"
              value={assest.status}
              onChange={(e) => setAssest({ ...assest, status: e.target.value })}
            />
          </div>
          
          <div className="col-12">
            <label htmlFor="inputRemark" className="form-label">
              Remark
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="remark"
              placeholder="Enter Remark"
              value={assest.remark}
              onChange={(e) => setAssest({ ...assest, remark: e.target.value })}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAId" className="form-label">
              Assets ID
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="aId"
              placeholder="Enter Assets ID"
              value={assest.aId}
              onChange={(e) => setAssest({ ...assest, aId: e.target.value })}
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Add Assest
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAssest;
