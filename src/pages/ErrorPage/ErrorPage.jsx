import { Link } from "react-router-dom";
import css from "./ErrorPage.module.css";

export default function ErrorPage() {
  return (
    <div className={css.container}>
      <h2 className={css.title}>404 - Page Not Found</h2>
      <p className={css.message}>
        Sorry, the page you are looking for could not be found.
      </p>
      <p className={css.message}>
        Please check the URL for any mistakes or go to the{" "}
        <Link to="/" className={css.link}>
          homepage
        </Link>
      </p>
    </div>
  );
}
