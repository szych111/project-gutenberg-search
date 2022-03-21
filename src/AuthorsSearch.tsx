// @ts-nocheck

import { FC, useState } from "react";

import { AuthorsList } from "./AuthorsList.tsx";
import "./index.css";

export const AuthorsSearch: FC = () => {
  const [userInput, setUserInput] = useState<{
    firstName: string;
    lastName: string;
  }>({
    firstName: "",
    lastName: "",
  });

  const firstNameChangeHandler = (e) => {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, firstName: e.target.value };
    });
  };
  const lastNameChangeHandler = (e) => {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, lastName: e.target.value };
    });
  };

  const author = {
    name: '',
    dateOfBirth: '',
    dateofDeath: '',
    lang: '',
    books: {}
  }

  async function fetchAuthors(name: string) {
    const response = await fetch(`https://gutendex.com/books?search=${name}`)
    const data = response.json();
    console.log(data);
  }

  const submitHandler = (e) => {
    e.preventDefault();

    fetchAuthors(userInput.lastName);

    setUserInput({
      firstName: "",
      lastName: "",
    });
  };

  return (
    <div>
      <form className="card" onSubmit={submitHandler}>
        <input
          type="text"
          value={userInput.firstName}
          placeholder="first name"
          onChange={firstNameChangeHandler}
        />
        <input
          type="text"
          value={userInput.lastName}
          placeholder="last name"
          onChange={lastNameChangeHandler}
        />
        <button
          className="uppercase ff-sans-normal text-clr-dark letter-spacing-2"
          type="submit"
        >
          Submit
        </button>
      </form>
      {data && <AuthorsList />}
    </div>
  );
};
