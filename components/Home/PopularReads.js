import React from "react";
import PopularBook from "../Book/PopularBook";
import s from "./PopularReads.module.scss";

export default function PopularReads() {
  const popularBooks = [
    {
      id: "b1",
      title: "The Alchemist",
      author: "Paulo Coelho",
      imageUrl: "/img/books/alchemist.jpg",
    },
    {
      id: "b2",
      title: "15 Laws of Growth",
      author: "John Maxwell",
      imageUrl: "/img/books/laws-of-growth.jpg",
    },
    {
      id: "b3",
      title: "Less Stress",
      author: "Dr. Julian Melgosa",
      imageUrl: "/img/books/less-stress.jpg",
    },
    {
      id: "b4",
      title: "Life gives you what you settle for",
      author: "James Serengia",
      imageUrl: "/img/books/life.jpg",
    },
    {
      id: "b5",
      title: "The Greatest Salesman in the World",
      author: "Og Mandino",
      imageUrl: "/img/books/sales-man.jpg",
    },
    {
      id: "b6",
      title: "Who Will Cry When you Die?",
      author: "Robin Sharma",
      imageUrl: "/img/books/who-will-cry.jpg",
    },
    {
      id: "b7",
      title: "How to win friends and influence people",
      author: "Dale Carnegie",
      imageUrl: "/img/books/win.jpg",
    },
    {
      id: "b8",
      title: "The Personal MBA",
      author: "Josh Kaufman",
      imageUrl: "/img/books/mba.jpg",
    },
  ];
  return (
    <section className={s["section-popular"]}>
      <div className={`${s["popular-container"]} row`}>
        <h2 className="heading-secondary">Popular books this week</h2>
        <div className={s["books"]}>
          {popularBooks.map((bk) => (
            <PopularBook
              key={bk.id}
              title={bk.title}
              author={bk.author}
              imageUrl={bk.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
