import { useSelector, useDispatch } from "react-redux";
import { clearMessage } from "../features/userSlice";
import { useEffect } from "react";

export default function Toast() {
  const message = useSelector((state) => state.user.message);
  const dispatch = useDispatch();

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        dispatch(clearMessage());
      }, 5000);
    }
  }, [message, dispatch]);

  if (message) {
    return <div className="toast">{message}</div>;
  }

  return null;
}
