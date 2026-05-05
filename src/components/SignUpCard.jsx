import React, { useEffect, useState } from "react";

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

  const registeredUser = async (formData) => {
    await fetch("https://api.freeapi.app/api/v1/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setErrors(data.errors);
        console.log("errors", errors);
        setMessage(data.message);
        if (data.success) {
          setIsSubmit(true);
          setMessage(data.message);
        }
      })
      .catch((error) => console.error("error in sign up", error));
  };
  function set(fieldName) {
    return (e) => {
      setFormData({ ...formData, [fieldName]: e.target.value });
      console.log([fieldName], e.target.value);
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
    registeredUser(formData);
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
          value={formData.username}
          onChange={set("username")}
        />
        {errors.username && <span className="error">{errors.username}</span>}
      </label>
      <label>
        Password
        <input
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={set("password")}
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </label>
      <label>
        Email
        <input
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={set("email")}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </label>
      <label>
        Role
        <select value={formData.role} onChange={set("role")}>
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
        </select>
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpCard;
