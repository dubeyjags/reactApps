import { useEffect, useState } from "react";
import { tokenStore } from "../services/tokenStore";
import { logout } from "../services/authService";

const ProfileCard = ({onSignOut}) => {  
  const [profile, setProfile] = useState({});
  const [message, setMessage] = useState("");
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useEffect(() => {
    setProfile(tokenStore.getUser());
    console.log('tokenStore.getUser()', tokenStore.getUser());
  }, []);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      const data = await logout();
      setMessage(data.message);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoggingOut(false);
    }
    onSignOut?.();
  };

  return (
    <div className="cards">
      {message && <p className="text-error">{message}</p>}
      <h2>Welcome, {profile.username}</h2>
      <p>{profile.email}</p>
      <button onClick={handleLogout} disabled={isLoggingOut}>
        {isLoggingOut ? "Signing out..." : "Sign Out"}
      </button>
    </div>
  );
};

export default ProfileCard;