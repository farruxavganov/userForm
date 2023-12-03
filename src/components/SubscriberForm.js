"use client"

import { useState } from 'react';

const SubscriberForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: '', surname: '', role: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!formData.name || !formData.surname || !formData.role) return;
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
      	<label className="form-labe">
       	  Name:
          <input className="form-control" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
        </label>
      </div>
      <div className="mb-3">
        <label className="form-labe">
          Surname:
          <input className="form-control" type="text" name="surname" value={formData.surname} onChange={handleChange} placeholder="Enter your surname" />
        </label>
      </div>
      <div className="mb-3">
        <label className="form-labe">
          Role:
          <select className="form-select" value={formData.role} name="role" onChange={handleChange} required>
            <option value="">Select Role</option>
            <option value="accountant">Accountant</option>
            <option value="teacher">Teacher</option>
            <option value="other">Other</option>
          </select>
        </label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default SubscriberForm;
