import React from "react";
import { useDispatch } from "react-redux";
import { booksActions, deleteBook } from "../../redux/books/booksSlice";
import "react-circular-progressbar/dist/styles.css";
import ProgressBar from "../ProgressBar/ProgressBar";
import s from "./Book.module.scss";

function Book(props) {
  const dispatch = useDispatch();
  const { title, author, id, category } = props;

  const removeBookHandler = (e) => {
    // Dispatch remove book action
    const { id } = e.target.dataset;
    dispatch(booksActions.removeBook(id));

    // Delete in the backend
    dispatch(deleteBook(id));
  };

  return (
    <div className={s["book-container"]}>
      <div className={s["book-details"]}>
        <span className={s["category-chip"]}>{category}</span>
        <h2 className={s["title"]}>{title}</h2>
        <span className={s["by"]}>By {author}</span>
        <div className={s["buttons-wrapper"]}>
          <button type="button" data-id={id} onClick={removeBookHandler}>
            Remove
          </button>
          <button type="button" data-id={id}>
            Edit
          </button>
        </div>
      </div>
      <div className={s["completion-status"]}>
        <div style={{ width: 60, height: 60 }}>
          <ProgressBar value={60} />
        </div>
        <div className={s["completion-data"]}>
          <span className={s["percentage"]}>64%</span>
          <span className={s["status"]}>Completed</span>
        </div>
      </div>
      <div className={s["chapter"]}>
        <span className={s["title"]}>Current Chapter</span>
        <h4 className={s["chapter-text"]}>Chapter 17</h4>
        <button type="button" className={s["progress-btn"]}>
          Update progress
        </button>
      </div>
    </div>
  );
}

export default Book;
