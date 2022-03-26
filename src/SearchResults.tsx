import { FC, useState } from "react";

import "./index.css";

export const SearchResults: FC = () => {
  const [booksArr, setBooksArr] = useState([]);

  async function fetchData() {
    const response = await fetch(`https://gutendex.com/books?languages=pl`);
    const data = await response.json();
    console.log(data)

    setBooksArr(
      data.results.map((item) => {
        return {
            id: item.id,
          title: item.title,
          author: item.authors[0].name,
        };
      })
    );
    console.log(booksArr);
  }

  return (
    <div className="card">
      {booksArr.map((book) => {
        return (
          <div key={book.id}>
            <p>{book.author}</p>
            <p>{book.title}</p>
          </div>
        );
      })}
      <button onClick={fetchData}>send</button>
    </div>
  );
};
