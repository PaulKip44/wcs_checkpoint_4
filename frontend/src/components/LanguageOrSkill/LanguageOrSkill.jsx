import axios from "axios";
import { useState } from "react";
import "./languageOrSkill.css";

// eslint-disable-next-line react/prop-types
export default function LanguagesOrSkill({ langageOrSkill, type }) {
  const [del, setDel] = useState(true);
  let access = "language";
  if (type === "devtool") {
    access = "devtool";
  }
  // eslint-disable-next-line react/prop-types
  const lokId = langageOrSkill.Id;
  const deleteOne = () => {
    axios.delete(`http://localhost:5000/api/${access}/${lokId}`);
    setDel(false);
  };

  return (
    <>
      {" "}
      {del && (
        <div className="languageOrSkill">
          <img
            className="lokLogo"
            src={`http://localhost:5000/data/uploads/${
              // eslint-disable-next-line react/prop-types
              langageOrSkill.name_logo
            }`}
            // eslint-disable-next-line react/prop-types
            alt={langageOrSkill.name_logo}
          />

          <p className="lokName">
            {
              // eslint-disable-next-line react/prop-types
              langageOrSkill.name
            }
          </p>

          <button type="button" onClick={deleteOne}>
            Delete
          </button>
        </div>
      )}
    </>
  );
}
