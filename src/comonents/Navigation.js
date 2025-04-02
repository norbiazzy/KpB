import React from "react";
import { Link } from "react-router-dom";

function Navigation(params) {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/block">Блок</Link>
          </li>
          <li>
            <Link to="/keramika">Керамика</Link>
          </li>
          <li>
            <Link to="/seting">Наcтройки</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
