import { NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="home-link">
        <NavLink className="navlink-home" to="/">
          <h1 className="titre-second">Full-Stack Developer</h1>
        </NavLink>
      </div>
      <div className="skills-link">
        <NavLink className="navlink-skills" to="/Skills">
          Skills
        </NavLink>
      </div>
      <div className="projects-link">
        <NavLink className="navlink-project" to="/Projects">
          Projects
        </NavLink>
      </div>
    </header>
  );
}
