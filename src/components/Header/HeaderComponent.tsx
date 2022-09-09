import React from "react";
import { Link } from "react-router-dom";
import { navbarLinksList } from "../../constant/navbarList";
import './Header.scss'
const HeaderComponent: React.FC = () => (
  <header className="head">
    {navbarLinksList.map((element) => (
      <Link key={element.id} to={element.link} className="user-nav">
        {element.label}
      </Link>
    ))}
  </header>
);

export default HeaderComponent;
