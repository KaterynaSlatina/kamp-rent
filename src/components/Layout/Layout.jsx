import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import css from "./Layout.module.css";

export default function Layout() {
  return (
    <div>
      <Header />
      <div className={css.layout}>
        <Outlet />
      </div>
    </div>
  );
}
