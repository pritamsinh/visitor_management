
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Assets = () => {
  const [assets, setAssets] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get("http://localhost:3000/assets")
      
        .then(result => {
          console.log("Server Response:", result.data); 
          if(result.data.message === 'Authentication successful!!') {
              localStorage.setItem("valid", true);
              navigate('/dashboard');
          } else {
              console.error("Something went wrong:", result.data.message);
              // Optionally, you can handle other error cases here
          }
      })
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = (id) => {
    axios.delete('http://localhost:3000/assests/3'+id)
    .then(result => {
        if(result.data.Status) {
            window.location.reload()
        } else {
            alert(result.data.Error)
        }
    })
  } 
  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>Assets List</h3>
      </div>
      <Link to="/dashboard/add_assest" className="btn btn-success">
        Add Assets
      </Link>
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Status</th>
              <th>Remark</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((e) => (
              <tr>
                <td>{e.name}</td>
                <td>{e.department}</td>
                <td>{e.status}</td>
                <td>{e.remark}</td>
                <td>
                  <Link
                    to={`/dashboard/edit_assets/` + e.id}
                    className="btn btn-info btn-sm me-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => handleDelete(e.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Assets;
