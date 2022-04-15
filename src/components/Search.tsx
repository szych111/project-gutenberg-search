//@ts-nocheck
import { FC, useState } from "react";

import { Card } from "./Card";

export const Search: FC = () => {
  const [searchOption, setSearchOption] = useState("");

  const onSelectSearchOption = (e) => {
    setSearchOption(e.target.value);
    console.log(searchOption);
  };

  return (
    <Card>
      <div className="select-container">
        <label htmlFor="search-select">Search books by: </label>
        <select onChange={onSelectSearchOption}>
          <option value="author">author's name</option>
          <option value="title">title</option>
          <option value="subject">subject</option>
          <option value="lang">language</option>
        </select>
      </div>
      <div className="flex search-container">
          {searchOption === "author" && (
            <input type="text" placeholder="author's name" />
          )}
          {searchOption === "title" && (
            <input type="text" placeholder="book's title" />
          )}
          {searchOption === "subject" && (
            <input type="text" placeholder="book's subject" />
          )}
          {searchOption === "lang" && (
            <input type="text" placeholder="book's language" />
          )}
        {searchOption && <button>Search</button>}
      </div>
    </Card>
  );
};
