//@ts-nocheck

import { FC, useState } from "react";

import { Card } from "./Card";

export const BooksList: FC = () => {
  const [booksList, setBooksList] = useState([]);
  const url = "https://gutendex.com/books";

  async function fetchBooks(url: string) {
    const response = await fetch(url);
    const data = await response.json();
    setBooksList(data.results);
  }

  // fetchBooks(url);

  return (
    <Card>
      <h2>Most Popular Books</h2>
      {booksList.map((book) => {
        return (
          <div key={book.id} className="book">
            <p className="name">{book.authors[0].name}</p>
            <p className="title">{book.title}</p>
            <p className="downloads">{book.download_count}</p>
          </div>
        );
      })}
    </Card>
  );
};
