import React, { useState } from 'react';
import './App.css';


const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phoneNumber: '',
    designation: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    // If there are no validation errors, you can submit the form data
    if (Object.keys(validationErrors).length === 0) {
      // Handle form submission here (e.g., send data to server)
      console.log('Form submitted:', formData);
    }
  };

  const validateForm = (data) => {
    let errors = {};

    // Example validation rules, you can customize as needed
    if (!data.firstName.trim()) {
      errors.firstName = 'First name is required';
    }

    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(data.email)) {
      errors.email = 'Invalid email format';
    }

    if (!data.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone number is required';
    } else if (!isValidPhoneNumber(data.phoneNumber)) {
      errors.phoneNumber = 'Invalid phone number format';
    }

    if (!data.designation.trim()) {
      errors.designation = 'Designation is required';
    }

    if (!data.password.trim()) {
      errors.password = 'Password is required';
    } else if (data.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    return errors;
  };

  const isValidEmail = (email) => {
    // Example email validation (you can use a library like validator.js for more robust validation)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    // Example phone number validation (you can use a library like libphonenumber for more robust validation)
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
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
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
      </div>
      <div>
        <label>Designation:</label>
        <input
          type="text"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
        />
        {errors.designation && <span className="error">{errors.designation}</span>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default RegistrationForm;
