// @ts-nocheck

import { FC, useState } from "react";

import "./index.css";

export const AuthorsSearch: FC = () => {
const [userInput, setUserInput] = useState<{
    firstName: string,
    lastName: string,
    date: string
}>({
    firstName: '',
    lastName: '',
    date: ''
})
  
  const firstNameChangeHandler = e => {
    setUserInput((prevUserInput) => 
    {return {...prevUserInput, firstName: e.target.value}})
  }
  const lastNameChangeHandler = e => {
    setUserInput((prevUserInput) => 
    {return {...prevUserInput, lastName: e.target.value}})
  }
  const dateChangeHandler = e => {
    setUserInput((prevUserInput) => 
    {return {...prevUserInput, date: e.target.value}})
  }

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(userInput)
    async function fetchAuthors () {
      const response = await fetch('https://api.artic.edu/api/v1/artworks/search?q=cats')
      const data = response.json()
      console.log(data)
  }

    setUserInput({
      firstName: '',
      lastName: '', 
      date: ''
    })
    console.log(userInput)
  }
  

  return (
    <form className="card" onSubmit={submitHandler}>
      <input type="text" value={userInput.firstName} placeholder="first name" onChange={firstNameChangeHandler} />
      <input type="text" value={userInput.lastName} placeholder="last name" onChange={lastNameChangeHandler} />
      <input type="date" value={userInput.date} placeholder="date" min="1500-01-01" onChange={dateChangeHandler} />
      <button type="submit">Submit</button>
    </form>
  );
};
