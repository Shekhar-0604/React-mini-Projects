import React, { useState } from "react";
import { auth } from "../Firbase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, pass);
      console.log(user);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container" style={{ width: "68%" }}>
        <h1 className="text-center">React Firebase Authentication</h1>
        <div className="container my-5">
          <form onSubmit={handleSubmit}>
            <div class="mb-3" style={{ textAlign: "left" }}>
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="mb-3" style={{ textAlign: "left" }}>
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                class="btn btn-primary"
                style={{ width: "30%" }}
              >
                Login
              </button>
            </div>
            <Link to={"/register"}>
              <p>Register new user</p>
            </Link>
          </form>
        </div>
        <div className="container text-center">
          <div className="d-flex justify-content-center align-item-center">
            <button
              className="btn d-flex justify-content-center align-item-center"
              style={{
                backgroundColor: "white",
              }}
            >
              <div style={{ width: "12%" }}>
                <img
                  src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                  alt=""
                  style={{
                    width: "100px",
                  }}
                />
              </div>
              <div>
                <h2
                  style={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  Login with Google
                </h2>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
