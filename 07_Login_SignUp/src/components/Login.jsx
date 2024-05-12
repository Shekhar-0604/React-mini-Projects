import React from "react";

function Login() {
  return (
    <>
      <div className="container" style={{ width: "68%" }}>
        <h1 className="text-center">React Firebase Authentication</h1>
        <div className="container my-5">
          <form>
            <div class="mb-3" style={{ textAlign: "left" }}>
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
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
        <div className="container text-center">
          <button
            className="btn d-flex justify-content-center align-item-center"
            style={{
              backgroundColor: "white",
            }}
          >
            <div style={{ width: "18%" }}>
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
    </>
  );
}

export default Login;
