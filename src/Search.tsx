// @ts-nocheck

import { FC, useState } from "react";

import "./index.css";

export const Search: FC = () => {
  const [userInput, setUserInput] = useState<{
    firstName: string;
    lastName: string;
  }>({
    firstName: "",
    lastName: "",
  });
  let hisname = 'Joe'
  let books: string[]

  

  async function fetchAuthors(name: string) {
    const response = await fetch(`https://gutendex.com/books?search=${name}`)
    const data = await response.json();
    console.log(data.results)
    const firstBook = data.results[0]
    console.log(firstBook.authors[0].name)
    hisname = firstBook.authors[0].name
    console.log(hisname)

    
  }
  console.log(hisname)
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
      <div className='card'>
            <div className='author'>
                <p>{hisname}</p>
                <p>{books ? 'something' : 'Dumas' }</p>
                
            </div>
        </div>
    </div>
  );
};
