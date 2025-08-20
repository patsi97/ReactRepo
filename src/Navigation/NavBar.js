import {Outlet, Link} from "react-router-dom";
import "./style.css";

const NavBar = () => {
  return (<>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/colorpicker">Color Picker</Link>
        </li>
        <li>
          <Link to="/colorpicker2">Color Picker2</Link>
        </li>
        <li>
          <Link to="/grocerycart">Grocery Cart</Link>
        </li>
        <li>
          <Link to="/tasklist">Task List</Link>
        </li>
        <li>
          <Link to="/passinghoughts">Passing Thoughts</Link>
        </li>
        <li>
          <Link to="/favoritecat">Pick your favorite cat</Link>
        </li>
        <li>
          <Link to="/rockpaperscissors">Rock Paper Scissors</Link>
        </li>
        <li>
          <Link to="/orderfood">Order Food</Link>
        </li>
      </ul>
    </nav>
    <Outlet/>
  </>)
};

export default NavBar;