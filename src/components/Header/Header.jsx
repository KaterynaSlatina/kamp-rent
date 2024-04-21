import React from "react";
import css from "./Header.module.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <NavLink to="/" className={css.logo}>
        Kamp Rent
      </NavLink>
      <nav>
        <ul className={css.nav}>
          <li className={css.navItem}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={css.navItem}>
            <NavLink to="/catalog">Catalog</NavLink>
          </li>
          <li className={css.navItem}>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <ul className={css.contacts}>
          <li>kampsukraine@gmai.com</li>
          <li>+38 067 000 00 00</li>
        </ul>
      </div>
    </header>
  );
}
