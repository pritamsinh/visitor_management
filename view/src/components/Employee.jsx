import axios from "axios";
import React, { useEffect, useState } from "react";

const Employee = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/employee/sign-up") // Assuming your endpoint is correctly configured
      .then((response) => {
        if (response.data.Status) {
          setEmployees(response.data.Result);
        } else {
          alert(response.data.Error);
        }
      })
      .catch((error) => {
        console.error("Error fetching employees:", error);
      });
  }, []);

  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>Employee List</h3>
      </div>
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Phone</th>
              <th>Designation</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.password}</td>
                <td>{employee.phone}</td>
                <td>{employee.designation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employee;
