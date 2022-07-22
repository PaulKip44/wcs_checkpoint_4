import { useState, useEffect } from "react";
import axios from "axios";
import LanguagesOrSkill from "../LanguageOrSkill/LanguageOrSkill";
import "./devTools.css";

export default function Devtools() {
  const [listDevTools, setListDevTools] = useState([]);

  const [devToolName, setDevToolName] = useState("");
  const [devToolLogoName, setDevToolLogoName] = useState([]);

  const handlePost = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", devToolName);
    formData.append("file", devToolLogoName[0]);

    axios.post(
      `http://localhost:5000/api/devtool`,

      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    axios.get(`http://localhost:5000/api/devtool`).then((res) => {
      setListDevTools(res.data);
    });
  };

  useEffect(() => {
    axios.get(`http://localhost:5000/api/devtool`).then((res) => {
      setListDevTools(res.data);
    });
  }, []);

  return (
    <div className="devTools">
      <h1>My dev-tools</h1>
      <ul>
        {listDevTools?.map((devTool) => (
          <li key={devTool.Id}>
            <LanguagesOrSkill
              key={devTool.name}
              langageOrSkill={devTool}
              type="devtool"
            />
          </li>
        ))}
      </ul>

      <div>
        <form onSubmit={handlePost}>
          <label htmlFor="name">
            <input
              type="text"
              name="name"
              onChange={(e) => setDevToolName(e.target.value)}
              placeholder="devTool"
            />
          </label>

          <label htmlFor="logo_source">
            <input
              onChange={(e) => setDevToolLogoName(e.target.files)}
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
