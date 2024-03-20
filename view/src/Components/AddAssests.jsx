import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddAssests = () => {
  const [assests, setassests] = useState({
    name: "",
    department: "",
    status: "",    
    remark: "",
    aId: "" 
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post("http://localhost:3000/assests/add")
      .then((result) => {
        if (result.data.Status) {
          setCategories(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", assests.name);
    formData.append("department", assests.department);
    formData.append("status", assests.status);   
    formData.append("remark", assests.remark);
    formData.append("aId", assests.aId); // Added aId to form data

    axios
      .post("http://localhost:3000/assests/add", formData)
      .then((result) => {
        if (result.data.Status) {
          navigate("/dashboard/assests");
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
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
              value={assests.name}
              onChange={(e) => setassests({ ...assests, name: e.target.value })}
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
              value={assests.department}
              onChange={(e) => setassests({ ...assests, department: e.target.value })}
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
              value={assests.status}
              onChange={(e) => setassests({ ...assests, status: e.target.value })}
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
              value={assests.remark}
              onChange={(e) => setassests({ ...assests, remark: e.target.value })}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAId" className="form-label">
              assests ID
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="aId"
              placeholder="Enter assests ID"
              value={assests.aId}
              onChange={(e) => setassests({ ...assests, aId: e.target.value })}
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Add assests
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAssests;
