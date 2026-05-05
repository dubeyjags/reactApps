import React, { useEffect, useState } from "react";
import { register } from "../services/authService";

const SignUpCard = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    role: "user",
  });
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [message, setMessage] = useState("");

  function set(fieldName) {
    return (e) => {
      setFormData({ ...formData, [fieldName]: e.target.value });
    };
  }

  function validate(values) {
    let errors = {};
    if (!formData.username) errors.username = "Username is required";
    if (!formData.username.trim().length > 3)
      errors.username = "Username minimum length is 3";
    if (!formData.password) errors.password = "Password is required";
    if (!formData.email) errors.email = "Email is required";
    if (
      (formData.email && !formData.email.includes("@")) ||
      !formData.email.includes(".")
    )
      errors.email = "Email format is incorrect";
    return errors;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const errors = validate(formData);
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    register(formData.username, formData.email, formData.password).then((data) => {
      setMessage(data.message);
      setIsSubmit(true);
    });
  };
  if (isSubmit) {
    return (
      <div className="cards text-success">
        <h1>{formData.username}</h1>
        {message}
      </div>
    );
  }

  return (
    <form className="cards" onSubmit={submitHandler} noValidate>
      <h3>SignUp</h3>
      {message && <span className="error">{message}</span>}
      <label>
        Username
        <input
          type="text"
          placeholder="Enter your name"
          className={errors.username ? "error" : ""}
          value={formData.username}
          onChange={set("username")}
        />
        {errors.username && <span className="error">{errors.username}</span>}
      </label>
      <label>
        Email
        <input
          type="email"
          className={errors.email ? "error" : ""}
          placeholder="Enter your email"
          value={formData.email}
          onChange={set("email")}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </label>
      <label>
        Password
        <input
          type="password"
          className={errors.password ? "error" : ""}
          placeholder="Enter your password"
          value={formData.password}
          onChange={set("password")}
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </label>
      <label>
        Role
        <select value={formData.role} onChange={set("role")} className={errors.role ? "error" : ""}>
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
        </select>
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpCard;
