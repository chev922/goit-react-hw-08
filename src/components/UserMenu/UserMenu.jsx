import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import toast from "react-hot-toast";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logOut())
      .unwrap()
      .then(() => {
        toast.success("Logout successful!");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Logout failed!", {
          duration: 4000,
          position: "top-right",
        });
      });
  };

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button className={css.btn} type="button" onClick={handleLogout}>
        <span className={css.shadow}></span>
        <span className={css.edge}></span>
        <span className={`${css.front} ${css.text}`}>Logout</span>
      </button>
    </div>
  );
}
