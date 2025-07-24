import { useNavigate } from "react-router-dom";
import styles from "./admin.module.css";
import { useEffect } from "react";

function Admin() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  function checkuser() {
    if (user) {
        console.log(user);
        
      navigate("/admin-panel");
    } else {
      navigate("/login");
    }
  }
  useEffect(checkuser,[])
  return <div>Admin</div>;
}

export default Admin;
