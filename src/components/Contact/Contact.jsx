import css from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

export default function Contact({ item }) {
  const dispatch = useDispatch();

  const send = (e) => {
    e.target.style.backgroundColor = "red";
    e.target.style.color = "white";
    e.target.style.border = "2px solid darkred";
    e.target.style.transition = "background-color 0.3s, transform 0.2s";
    dispatch(deleteContact(item.id))
      .unwrap()
      .then(() => {
        toast.success("Contact deleted!");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to delete contact!", {
          duration: 4000,
          position: "top-right",
        });
      });
  };

  return (
    <li className={css.container}>
      <h3>
        <IoPerson /> {item.name}
      </h3>
      <p>
        <BsFillTelephoneFill />
        {item.number}
      </p>
      <button className={css.btn} onClick={send}>
        Delete
      </button>
    </li>
  );
}
