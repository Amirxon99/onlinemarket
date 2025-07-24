import { useState } from "react";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: "", parol: "" });
  function handle(e) {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  }
  function submitHandle() {
    if (user.username == "admin" && user.parol == "1234") {
      localStorage.setItem("user",JSON.stringify(user))
      navigate("/admin-panel");
    } else {
      alert("Login yoki parol xato");
    }
  }

  return (
    <div className={styles.body}>
      <div className={styles.box}>
        <h1>Kirish</h1>
        <input
          name="username"
          value={user.username}
          onChange={handle}
          type="text"
          placeholder="username"
        />
        <input
          name="parol"
          value={user.parol}
          onChange={handle}
          type="password"
          placeholder="parol"
        />
        <button className={styles.btn} onClick={submitHandle}>
          Kirish
        </button>
      </div>
    </div>
  );
}

export default Login;
