import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../redux/books/booksSlice";
import Book from "../Books/Book";
import Form from "../Form/Form";
import Notification from "../Notifications/Notification";

import s from "./BooksList.module.scss";

function BooksList() {
  const { books, isLoading } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  let output;
  if (isLoading) output = <h3>Loading...</h3>;

  if (books?.length > 0) {
    output = books.map((bk) => (
      <Book
        key={bk.item_id}
        title={bk.title}
        author={bk.author}
        category={bk.category}
        id={bk.item_id}
      />
    ));
  }

  if (!isLoading && books?.length === 0) {
    output = <h3>No books to display...</h3>;
  }

  return (
    <div>
      <div className={`${s["books-list-container"]} row`}>
        <div className={s["books-list"]}>{output}</div>
      </div>
      <Form />
      <Notification />
    </div>
  );
}

export default BooksList;
