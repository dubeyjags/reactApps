import React, { useState,useEffect } from "react";

const getRefreshToken = () => localStorage.getItem("refreshToken");
const getAccessToken = () => localStorage.getItem("accessToken");
const clearSession = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
};

const ProfileCard = () => {
    const [profile, setProfile] = useState(null);
    const [isSubmit, setIsSubmit] = useState(false);
    const [message, setMessage] = useState("");
    const [formData, setFormData] = useState({ email: "", password: "" });

    

    useEffect(() => {
        const token = getAccessToken();
        if (token) {
          fetch(`https://api.freeapi.app/api/v1/users/current-user`)
            .then((res) => res.json())
            .then((data) => {
              if (data.success) {
                setProfile(data.data);
                setIsSubmit(true);
                console.log('profile',profile);
              } else {
                clearSession();
              }
            })
            .catch(() => clearSession());
        }
      }, []);

  const handleLogout = async () => {
    try {
      await fetch(`https://api.freeapi.app/api/v1/users/logout`, { method: "POST" });
    } catch (err) {
      console.error("Logout error:", err);
    } finally {
      clearSession();
      setProfile(null);
      setIsSubmit(false);
      setMessage("");
      setFormData({ email: "", password: "" });
    }
  };
  return (
    <div className="cards">
      <p className="text-success">{message}</p>
      {/* <h2>Welcome, {profile.username}</h2>
      <p>{profile.email}</p> */}
      <button onClick={handleLogout}>Sign Out</button>
    </div>
  );
};

export default ProfileCard;
