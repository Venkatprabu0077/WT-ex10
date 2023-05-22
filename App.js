import React, { useState } from 'react';
import './Form.css';
const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    mobile: '',
    department: '',
    college: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, you can perform further actions
      console.log('Form submitted:', formData);
      // Reset form
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: '',
        mobile: '',
        department: '',
        college: '',
      });
    } else {
      const errorMessage = Object.values(validationErrors).join('\n');
      alert(errorMessage);
    }
  };

  const validateForm = () => {
    let validationErrors = {};

    if (!formData.name) {
      validationErrors.name = 'Name is required';
    } else if (!/^[a-zA-Z ]+$/.test(formData.name)) {
      validationErrors.name = 'Name must contain only alphabets and spaces';
    }

    if (!formData.email) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Invalid email format';
    }

    if (!formData.password) {
      validationErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters long';
    }

    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.gender) {
      validationErrors.gender = 'Gender is required';
    }

    if (!formData.mobile) {
      validationErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      validationErrors.mobile = 'Invalid mobile number format';
    }

    if (!formData.department) {
      validationErrors.department = 'Department is required';
    }

    if (!formData.college) {
      validationErrors.college = 'College is required';
    }

    return validationErrors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>

      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
        {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
      </div>

      <div>
        <label>Gender:</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && <span className="error">{errors.gender}</span>}
      </div>

      <div>
        <label>Mobile Number:</label>
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleInputChange}
        />
        {errors.mobile && <span className="error">{errors.mobile}</span>}
      </div>

      <div>
        <label>Department:</label>
        <input
          type="text"
          name="department"
          value={formData.department}
          onChange={handleInputChange}
        />
        {errors.department && <span className="error">{errors.department}</span>}
      </div>

      <div>
        <label>College:</label>
        <input
          type="text"
          name="college"
          value={formData.college}
          onChange={handleInputChange}
        />
        {errors.college && <span className="error">{errors.college}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;