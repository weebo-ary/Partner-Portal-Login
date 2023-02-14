import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { clearMessage, login, setMessage } from "../features/userSlice";

export default function Login(theme) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(5);

  const toastComponent = () => {
    return (
      <div>
        <Alert severity="success" color="info">
          Congratulation, You Successfully LoggedIn
        </Alert>
      </div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "" && pass !== "" && email !== "") {
      dispatch(setMessage(toastComponent()));
      setTimeout(() => {
        dispatch(clearMessage());
      }, 5000);
      dispatch(
        login({
          name: name,
          email: email,
          pass: pass,
          loggedIn: true
        })
      );
    }
  };

  return (
    <div className="login">
      <Box
        sx={{
          width: 400,
          display: "flex",
          height: 700,
          backgroundColor: "#565FBF",
          flexDirection: "column",
          borderRadius: 2,
          position: "relative",
          top: 50,
          justifyContent: "center",
          alignItems: "center"
        }}
        md={{
          width: 100,
          height: 50
        }}
      >
        <h2
          style={{
            color: "white",
            padding: "2rem 0"
          }}
        >
          Partner Portal Login
        </h2>
        <Box
          sx={{
            width: 350,
            height: 550,
            backgroundColor: "#FFFFFF",
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 3
          }}
        >
          <form className="login_form" onSubmit={(e) => handleSubmit(e)}>
            <h5
              style={{
                width: "80%"
              }}
            >
              Name
            </h5>
            <br />
            <TextField
              id="name"
              type="text"
              label="Your Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{
                width: "100%",
                marginBottom: 4
              }}
            />
            <h5
              style={{
                width: "80%"
              }}
            >
              Company Email
            </h5>
            <br />
            <TextField
              id="username"
              type="text"
              label="xyz@company.com"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                width: "100%",
                marginBottom: 4
              }}
            />
            <h5
              style={{
                width: "80%"
              }}
            >
              Password
            </h5>
            <br />
            <TextField
              id="password"
              type="password"
              label="oooooooo"
              variant="outlined"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              sx={{
                width: "100%",
                marginBottom: 4
              }}
            />
            <Button
              id="loginBtn"
              className="loginBtn"
              variant="filled"
              type="submit"
              sx={{
                background: "#FAA25C",
                width: "100%",
                height: "7vh"
              }}
            >
              Login Now
            </Button>
          </form>
          <h5 style={{ textAlign: "start", width: "80%" }}>
            Don’t have an account?
            <a href="#" target="blank">
              {" "}
              Fill this Form
            </a>
          </h5>
        </Box>
      </Box>
    </div>
  );
}
