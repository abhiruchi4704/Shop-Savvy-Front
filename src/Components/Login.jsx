import React, { useState } from "react";
import axios from "axios";

function Login(props) {
  const [result, setResult] = useState([]);
  const [Users, setUsers] = useState({
    email: "",
    password: "",
  });
  const loginApi = (e) => {
    e.preventDefault(e);
     axios.post("http://localhost:9090/login", {
      email: Users.email,
      password: Users.password,
    })
    .then((response)=>{
      setResult(response.data);
      console.log(response.data.userId)
      localStorage.setItem('userId',JSON.stringify(response.data.userId));
      props.history.push("/");
      window.location.reload();
    })
    .catch((error) => {
      alert('Invalid email or password')
      console.log(error)
    })
  };

  return (
    <>
    <div className="offset-3 col-6 mt-4">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={Users.email}
            onChange={(e) => setUsers({ ...Users, email: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={Users.password}
            onChange={(e) => setUsers({ ...Users, password: e.target.value })}
          />
        </div>
        <button type="submit"  className="btn btn-primary" onClick={loginApi}>
          Submit
        </button>
      </form>
      </div>
    </>
  );
}

export default Login;
