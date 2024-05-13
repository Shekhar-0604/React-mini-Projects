import React from "react";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Home() {
  const auth = getAuth();
  const navigate = useNavigate();
  const logout = async () => {
    await auth.signOut();
    navigate("/");
  };
  return (
    <>
      <div>Home</div>
      <button className="btn btn-warning" onClick={logout}>
        Log out
      </button>
    </>
  );
}

export default Home;
