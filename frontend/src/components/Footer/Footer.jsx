import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <p>Tous droits reservés. 2022.</p>
      <Link to="/Login">
        <button type="button">Login</button>
      </Link>
    </div>
  );
}
