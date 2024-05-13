import React, { useState } from "react";
import { auth } from "../Firbase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(auth, email, pass);
      console.log(user);
      navigate("/");
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
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
