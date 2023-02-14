import logoTitle from "../assets/logoTxt.png";
import logo from "../assets/logo.png";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

export default function navbar() {
  return (
    <div className="navbar">
      <div className="logoSection">
        <img src={logoTitle} alt="logoTitle" className="logoTxt" />
        <img src={logo} alt="logo" className="logo" />
      </div>
      <Button
        variant="filled"
        className="contactBtn"
        sx={{
          background: "#565FBF",
          color: "#FFF"
        }}
      >
        Contact Us
      </Button>
    </div>
  );
}
