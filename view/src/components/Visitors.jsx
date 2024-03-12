
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Visitors = () => {
  const [visitor, setEmployee] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get("http://localhost:3000/visitor/5")
      .then((result) => {
        if (result.data.Status) {
          setEmployee(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);
   
  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>Visitors List</h3>
      </div>
        <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>    
              <th>Address</th>
              <th>Phone</th>
              <th>Resume</th>
              <th>Purpose</th>
              <th>Image</th>
              </tr>
          </thead>
          <tbody>
            {visitor.map((v) => (
              <tr>
                <td>{v.name}</td>
                <td>{v.email}</td>
                <td>{v.phone}</td>
                <td>{v.purpose}</td>
                 </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Visitors;
