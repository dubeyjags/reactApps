import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="cards">
      <img
        src={user.picture.large}
        alt={user.name.first}
        className="avatar"
      />

      <div className="user-content">
        <h2 className="name">
          {user.name.title} {user.name.first} {user.name.last}
        </h2>

        <p className="username">@{user.login.username}</p>
        <p className="email">{user.email}</p>

        <div className="info">
          <span>🎂 {user.dob.age} yrs</span>
          <span>📍 {user.location.city}, {user.location.country}</span>
        </div>

        <div className="contact">
          <p>📞 {user.phone}</p>
          <p>📱 {user.cell}</p>
        </div>

        <div className="meta">
          <span>Registered: {new Date(user.registered.date).toLocaleDateString()}</span>
        </div>

        <button className="btn">View Profile</button>
      </div>
    </div>
  );
};

export default UserCard;