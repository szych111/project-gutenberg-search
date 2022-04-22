//@ts-nocheck
import React, { FC, useState } from "react";

import { Card } from "./Card";
import { LangInput } from "./LangInput";
import { SearchResults } from "./SearchResults";

export const Search: FC = () => {
  const [searchOption, setSearchOption] = useState("");
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [searchedBooks, setSearchedBooks] = useState([])

  let url = 'https://gutendex.com/books'

  const onSelectSearchOption = (e) => {
    setSearchOption(e.target.value);
    console.log(searchOption);
  };

  const onTitleInput = (e) => {
    setTitle(e.target.value)
  }

  const onAuthorInput = (e) => {
    setAuthor(e.target.value)
  }

  async function searchBooks (url, par1) {
    const response = await fetch(`${url}?search=${par1}`)
    const data = await response.json()
    setSearchedBooks(data.results)
  } 

  const onClickSearchBtn = (e) => {
    if(searchOption === 'title') {
      searchBooks(url, title)
    } else if (searchOption === 'author') {
      searchBooks(url, author)
    }
  }

  return (
    <React.Fragment>
      <Card>
      <div className="select-container">
        <label htmlFor="search-select">Search books by: </label>
        <select onChange={onSelectSearchOption} defaultValue=''>
          <option value="author">author's name</option>
          <option value="title">title</option>
          <option value="subject">subject</option>
          <option value="lang">language</option>
        </select>
      </div>
      <div className="flex search-container">
          {searchOption === "author" && (
            <input className="searchInput" type="text" onChange={onAuthorInput} placeholder="author's name" />
          )}
          {searchOption === "title" && (
            <input className="searchInput"  type="text" onChange={onTitleInput} placeholder="book's title" />
          )}
          {searchOption === "subject" && (
            <input className="searchInput"  type="text" placeholder="book's subject" />
          )}
          {searchOption === "lang" && (
            <LangInput />
          )}
        {searchOption === "title" && <button onClick={onClickSearchBtn}>Search</button>}
      </div>
    </Card>
    {searchedBooks.length > 0 && <SearchResults books={searchedBooks} />}
    </React.Fragment>
  );
};
