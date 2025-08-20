import React from 'react';
import Logo from "../../assets/react-logo.svg";
// Import NavLink
import {NavLink} from "react-router-dom";
import "./style.css";
const Navigation = () => {
  /*const [petTypes, setPetTypes] = useState([]);

  useEffect(() => {
    async function getPetTypesData() {
      const {types} = await getPetTypes();
      setPetTypes(types);
    }

    getPetTypesData();
  }, []);
*/

  return (
      <nav>
        <div className="nav-logo">
          <img src={Logo} alt="React-logo"/>
        </div>
        <ul className="nav-links-components">
          <li>
            {/* These links should be NavLink component and add a special active class name if its an active link */}
            <NavLink to="/">Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/colorpicker">Color Picker</NavLink>
          </li>
          <li>
            <NavLink to="/grocerycart">Grocery Cart</NavLink>
          </li>
          <li>
            <NavLink to="/tasklist">Task List</NavLink>
          </li>
          <li>
            <NavLink to="/passinghoughts">Passing Thoughts</NavLink>
          </li>
          <li>
            <NavLink to="/favoritecat">Pick Favorite Cat</NavLink>
          </li>
          <li>
            <NavLink to="/rockpaperscissors">Game</NavLink>
          </li>
          <li>
            <NavLink to="/orderfood">Order Food</NavLink>
          </li>
        </ul>
      </nav>
  );
};

export default Navigation;
