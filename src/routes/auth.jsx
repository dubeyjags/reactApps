import { createFileRoute } from "@tanstack/react-router";
import SignUpCard from "../components/SignUpCard";
import { useState } from "react";
import SignInCard from "../components/SignInCard";
import ProfileCard from "../components/ProfileCard";

export const Route = createFileRoute("/auth")({
  component: RouteComponent,
});

function RouteComponent() {
  const [resitered, setResitered] = useState(true);
  const toggleResitered = () => {
    return setResitered(!resitered);
  };
  // if(true) return <ProfileCard />
  return (
    <div className="auth">
      <h1>Auth</h1>
      {resitered ? <SignUpCard /> : <SignInCard />}
      <div className="SignToggler">
        {resitered ? (
          <p>
            Already have an account?{" "}
            <span onClick={toggleResitered}>Sign in</span>
          </p>
        ) : (
          <p>
            Don't have an account?{" "}
            <span onClick={toggleResitered}>Sign up</span>
          </p>
        )}
      </div>
    </div>
  );
}
