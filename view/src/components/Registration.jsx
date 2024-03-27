import React, { useState } from "react";
import axios from "axios";
import "./Registration.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phoneNumber: "",
    designation: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post(
          "http://localhost:3000/employee/sign-up",
          formData
        );

        if (response.status === 200) {
          // Handle success (e.g., show success message)
          console.log("Registration successful");
        } else {
          // Handle errors (e.g., show error message)
          console.error("Registration failed");
        }
      } catch (error) {
        console.error("API request failed", error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setIsSubmitting(false);
    }
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.firstName.trim()) {
      errors.firstName = "First name is required";
    }

    // Add more validation rules for other fields if needed

    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <span className="error">{errors.firstName}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {/* Add error handling for email field if needed */}
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        {/* Add error handling for phone number field if needed */}
      </div>
      <div>
        <label>Designation:</label>
        <input
          type="text"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
        />
        {/* Add error handling for designation field if needed */}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {/* Add error handling for password field if needed */}
      </div>
      <div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
