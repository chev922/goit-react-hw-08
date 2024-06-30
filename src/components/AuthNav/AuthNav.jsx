import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

export default function AuthNav() {
  const getNavLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <div className={css.container}>
      <NavLink className={getNavLinkClass} to="/register">
        Register
      </NavLink>
      <NavLink className={getNavLinkClass} to="/login">
        Log In
      </NavLink>
    </div>
  );
}
