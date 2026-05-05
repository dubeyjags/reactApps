import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";

const saveSession = (access, refresh) => {
  localStorage.setItem("accessToken", access);
  localStorage.setItem("refreshToken", refresh);
};

const SignInCard = () => {
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

  const registeredUser = async (formData) => {
    await fetch("https://api.freeapi.app/api/v1/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('login success',data);
        setMessage(data.message);
        saveSession(data.data.accessToken, data.data.refreshToken);
        setProfile(data.data.user);
        console.log("profile", profile);
        if (data.success) {
          setIsSubmit(true);
          setMessage(data.message);
        }
      })
      .catch((error) => console.error(error));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    registeredUser(formData);
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
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
      </label>
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignInCard;
