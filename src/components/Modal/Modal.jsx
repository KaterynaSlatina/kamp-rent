import React, { useEffect, useRef } from "react";
import css from "./Modal.module.css";
import svg from "../../icons/icons.svg";

export default function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    });
  });

  const backdrop = useRef();

  const handleClickOutside = (event) => {
    if (event.target === backdrop.current) {
      onClose();
    }
    document.body.style.overflow = "";
    document.body.style.position = "";
    event.stopPropagation();
  };

  return (
    <>
      {isOpen && (
        <div className={css.modal}>
          <div
            className={css.modalWrapper}
            onClick={handleClickOutside}
            ref={backdrop}
          >
            <div className={css.modalContent}>
              <button className={css.modalCloseBtn} onClick={() => onClose()}>
                <svg className={css.svgClose}>
                  <use href={`${svg}#icon-close`}></use>
                </svg>
              </button>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
