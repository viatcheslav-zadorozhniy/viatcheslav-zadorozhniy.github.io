import { NavLink } from "react-router-dom";
import './main-nav.component.css';

export default function MainNav() {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li>
          <span>CSS</span>
          <ul>
            <li><NavLink to="/css/layouts">Layouts</NavLink></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
