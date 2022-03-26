import { FC } from "react";

import "./index.css";

export const Input: FC = () => {
  return (
    <div className="card flex">
      <form>
        <input placeholder="first name" />
        <input placeholder="last name" />
        <input placeholder="subject" />

        <div className="checkbox">
        <label>
          en
          <input type="checkbox" id="en" name="en" value="en" />
        </label>

        <label>
          fr
          <input type="checkbox" id="fr" name="fr" value="fr" />
        </label>

        <label>
          es
          <input type="checkbox" id="es" name="es" value="es" />
        </label>

        <label>
          ru
          <input type="checkbox" id="ru" name="ru" value="ru" />
        </label>

        <label>
          <input type="text" id="es" name="es" placeholder="other"/>
        </label>
        </div>
      </form>
    </div>
  );
};
