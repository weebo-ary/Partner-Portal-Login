import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import Toast from "./Toast";

export const Logout = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
  };
  return (
    <div className="logoutSection">
      <Box
        sx={{
          width: 400,
          height: 300,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          borderRadius: 2
        }}
      >
        <h3>
          Hey <span>{user.name}</span> 👋
          <br />
          <br />
          Email : {user.email}
        </h3>
        <br />
        <br />
        <Button
          id="logoutBtn"
          className="logoutBtn"
          variant="filled"
          onClick={(e) => handleLogout(e)}
          sx={{
            background: "#FAA25C",
            // width: "100%",
            height: "7vh"
          }}
        >
          Logout Now
        </Button>
        <br />
        <Toast />
      </Box>
    </div>
  );
};
