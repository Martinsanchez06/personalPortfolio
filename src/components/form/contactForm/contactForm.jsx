import React, { useState } from "react";

// ------------ FORM COMPONENTS ------------

const InputField = ({ label, type, name, value, onChange, error }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

const Dropdown = ({ label, name, value, options, onChange, error }) => {
  return (
    <div>
      <label>{label}</label>
      <select name={name} value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

const Textarea = ({ label, name, value, onChange, error }) => {
  return (
    <div>
      <label>{label}</label>
      <textarea name={name} value={value} onChange={onChange}></textarea>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

// ------------ FORM ------------

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    enquiry: "Freelance project proposal",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const enquiryOptions = [
    { value: "Freelance project proposal", label: "Freelance project proposal" },
    { value: "Job enquiry", label: "Job enquiry" },
    { value: "General inquiry", label: "General inquiry" },
  ];

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.message) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    const newErrors = validate();
    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      console.log("Form data:", formData);
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        enquiry: "Freelance project proposal",
        message: "",
      });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
      />
      <InputField
        label="Email Address"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />
      <Dropdown
        label="Type of enquiry"
        name="enquiry"
        value={formData.enquiry}
        options={enquiryOptions}
        onChange={handleChange}
      />
      <Textarea
        label="Your message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
      />
      <button disabled={!(Object.keys(validate()).length === 0)} type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
