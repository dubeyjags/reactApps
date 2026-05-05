import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import { login, me } from "../services/authService";

const saveSession = (access, refresh) => {
  localStorage.setItem("accessToken", access);
  localStorage.setItem("refreshToken", refresh);
};

const SignInCard = ({onSignIn}) => {
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [profile, setProfile] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    role: "user",
  }); 

  
  function set(fieldName) {
    return (e) => {
      setFormData({ ...formData, [fieldName]: e.target.value });
    };
  }

  function validate(values) {
    let errors = {};
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
    login(formData.email, formData.password).then((data) => {
      setMessage(data.message);
      setIsSubmit(true);
      onSignIn?.();
      me().then((data) => setProfile(data));
    }).catch((err) => console.error('Error in Login', err));
  };

  if (isSubmit) {
    return (
      <ProfileCard />
    );
  }
  return (
    <form className="cards" onSubmit={submitHandler} noValidate>
      <h3>SignIn</h3>
      {message && <p className="text-error">{message}</p>}
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
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignInCard;
