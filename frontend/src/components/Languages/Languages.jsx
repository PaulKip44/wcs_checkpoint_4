import { useState, useEffect } from "react";
import axios from "axios";
import LanguagesOrSkill from "../LanguageOrSkill/LanguageOrSkill";
import "./languages.css";

export default function Languages() {
  const [listLanguages, setListLanguages] = useState([]);

  const [languageName, setlanguageName] = useState("");
  const [languageLogoName, setlanguageLogoName] = useState([]);

  const handlePost = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", languageName);
    formData.append("file", languageLogoName[0]);

    axios.post(
      `http://localhost:5000/api/language`,

      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  };

  useEffect(() => {
    axios.get(`http://localhost:5000/api/language`).then((res) => {
      setListLanguages(res.data);
    });
  }, []);

  return (
    <div className="languages">
      <h1>My languages</h1>
      <ul>
        {listLanguages?.map((language) => (
          <li key={language.Id}>
            <LanguagesOrSkill key={language.name} langageOrSkill={language} />
          </li>
        ))}
      </ul>

      <div>
        <form className="form" onSubmit={handlePost}>
          <label htmlFor="name">
            <input
              type="text"
              name="name"
              onChange={(e) => setlanguageName(e.target.value)}
              placeholder="language"
            />
          </label>

          <label htmlFor="logo_source">
            <input
              onChange={(e) => setlanguageLogoName(e.target.files)}
              type="file"
              name="name_logo"
            />
          </label>

          <input type="submit" />
        </form>
      </div>
    </div>
  );
}
