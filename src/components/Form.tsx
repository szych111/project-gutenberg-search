//@ts-nocheck
import { FC, useState } from "react";

import { Card } from "./Card";

export const Form: FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");
  const [lang, setLang] = useState("")

  const onFirstNameInput = (e: any) => {
    setFirstName(e.target.value);
  };

  const onLastNameInput = (e: any) => {
    setLastName(e.target.value);
  };

  const onTitleInput = (e: any) => {
    setTitle(e.target.value);
  };

  const onLangInput = (e: any) => {
    setLang(e.target.value);
  };

  const onFormSubmit = (e: any) => {
    e.preventDefault();
  };


  return (
    <Card>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="first name"
          onChange={onFirstNameInput}
        />
        <input type="text" placeholder="last name" onChange={onLastNameInput} />
        <input type="text" placeholder="title" onChange={onTitleInput} />
        <input type="text" placeholder="language" onChange={onLangInput} />
        <button>Submit</button>
      </form>
      
    </Card>
  );
};
