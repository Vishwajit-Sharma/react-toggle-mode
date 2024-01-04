import { NavLink } from "react-router-dom";
import ToggleSwitch from "./ToggleSwitch";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <ToggleSwitch />
    </nav>
  );
};
export default Navbar;
