import { useState, useEffect } from "react";
import axios from "axios";
import ItemProject from "../ItemProject/ItemProject";
import "./projects.css";
// import CurrentUserContext from "../../contexts/currentUser";

export default function Projects() {
  const [listProjects, setListProjects] = useState([]);

  // const { userProfil } = useContext(CurrentUserContext);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/project`).then((res) => {
      setListProjects(res.data);
    });
  }, []);

  return (
    <div className="languages">
      <h1>My Projects</h1>
      <ul>
        {listProjects?.map((projectItem) => (
          <li key={projectItem.Id}>
            <ItemProject key={projectItem.name} project={projectItem} />
          </li>
        ))}
      </ul>
    </div>
  );
}
