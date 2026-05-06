import { createFileRoute } from "@tanstack/react-router";
import SignUpCard from "../components/SignUpCard";
import { useState } from "react";
import SignInCard from "../components/SignInCard";
import ProfileCard from "../components/ProfileCard";
import { tokenStore } from "../services/tokenStore";

export const Route = createFileRoute("/auth")({
  component: RouteComponent,
});

function RouteComponent() {
  const [isRegistering, setIsRegistering] = useState(true);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(!!tokenStore.getAccess());

  const handleSignIn = () => setIsLoggedIn(true);
  const handleSignOut = () => setIsLoggedIn(false);

  if(loading) {
    <div className="loading">Thanmba...</div>
  }


  if (isLoggedIn) {
    return (
      <div className="auth">
        <h1>Auth</h1>
        <ProfileCard onSignOut={handleSignOut} />
      </div>
    );
  }

  return (
      <>
      <h1>Auth</h1>
    <div className="auth">
      {isRegistering ? (
        <SignUpCard onSuccess={() => setIsRegistering(false)} />
      ) : (
        <SignInCard onSignIn={handleSignIn} />
      )}
      <div className="SignToggler">
        {isRegistering ? (
          <p>
            Already have an account?{" "}
            <span onClick={() => setIsRegistering(false)}>Sign in</span>
          </p>
        ) : (
          <p>
            Don't have an account?{" "}
            <span onClick={() => setIsRegistering(true)}>Sign up</span>
          </p>
        )}
      </div>
    </div>
      </>
  );
}
