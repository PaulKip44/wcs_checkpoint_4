/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useContext } from "react";

import CurrentUserContext from "../../contexts/currentUser";

import api from "../../services/endpoint";

import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUserProfil } = useContext(CurrentUserContext);

  const handleDisconnect = () => {
    api
      .get("/logout")
      .then(() => {
        setUserProfil(undefined);
        localStorage.clear();
      })
      .catch((err) => console.error(err.message));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      api
        .post("/login", { email, password })
        .then((res) => {
          setUserProfil(res.data);
          localStorage.setItem("user", JSON.stringify(res.data));
        })
        .catch(() =>
          console.error("Votre email ou votre mot de passe est faux")
        );
    }
    if (email && !password) {
      console.error("Merci de renseigner votre mot de passe");
    }
    if (!email && password) {
      console.error("Merci de renseigner votre email");
    }
  };

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input
            className="input-user"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="uname"
          />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            className="input-password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="pass"
          />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="container-login">
      <div className="login">
        <div className="login-form">{renderForm}</div>
        <button type="submit" onClick={handleDisconnect}>
          LogOut
        </button>
      </div>
    </div>
  );
}
export default Login;
