import "./styles.css";
import Login from "./component/Login";
import Navbar from "./component/Navbar";
require("dotenv").config();

import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { Logout } from "./component/Logout";

export default function App() {
  const user = useSelector(selectUser);
  return (
    <div className="App">
      <Navbar />
      {user ? <Logout /> : <Login />}
    </div>
  );
}
