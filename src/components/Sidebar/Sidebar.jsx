import React from "react";
import css from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={css.sidebarWrapper}>
      <div>Location</div>
      <div>Filters</div>
    </div>
  );
}
