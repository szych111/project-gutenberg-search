//@ts-nocheck

import { useState } from "react";
import { Card } from "./Card";
import styles from "./LangInput.module.css";

export const LangInput = () => {
  const [selectedLang, setSelectedLang] = useState([]);

  const onLangInputChange = (e) => {
      setSelectedLang(...selectedLang, e.target.value)
      console.log(selectedLang)
  }

  const onSearch = () => {
      console.log('Searching!')
  }

  return (
    <fieldset className={styles.flex}>
      <legend>Choose one or more languages:</legend>
      <div className={styles.flex}>
        <div className={styles.checkboxContainer}>
          <input type="checkbox" value="EN" onChange={onLangInputChange}/>
          <label>EN</label>
        </div>
        <div className={styles.checkboxContainer}>
          <input type="checkbox" value="FR" onChange={onLangInputChange} />
          <label>FR</label>
        </div>
        <div className={styles.checkboxContainer}>
          <input type="checkbox" name="ES" />
          <label>ES</label>
        </div>
        <div className={styles.checkboxContainer}>
          <input type="checkbox" value="DE" />
          <label>DE</label>
        </div>
        <div className={styles.checkboxContainer}>
          <input type="checkbox" value="RU" />
          <label>RU</label>
        </div>
      </div>
      <button onClick={onSearch}>Search</button>
      <p>{selectedLang}</p>
    </fieldset>
  );
};
