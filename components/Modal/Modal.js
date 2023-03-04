import { IconButton } from "@mui/material";
import s from "./Modal.module.scss";
import CloseIcon from "@mui/icons-material/Close";

function Modal(props) {
  const closeModal = () => {
    props.closeModalHandler();
  };

  return (
    <div className={s["backdrop"]} onClick={closeModal} ref={props.nodeRef}>
      <div className={s["modal"]}>
        <div className={s["header"]}>
          Header{" "}
          <IconButton className={s["close-icon-wrapper"]} onClick={closeModal}>
            <CloseIcon />
          </IconButton>
        </div>
        <div className={s["body"]}>Body</div>
        <div className={s["footer"]}>Footer</div>
      </div>
    </div>
  );
}

export default Modal;
