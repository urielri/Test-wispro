/* eslint-disable no-unneeded-ternary */
import { useState, useEffect, useRef } from "react";
import style from "./style.module.scss";

function Button(props: any) {
  const {
    children,
    type,
    width,
    onClick,
    loader,
    background,
    disabled,
  } = props;
  const r = useRef(null);
  const [currentType, setCurrentT] = useState(style.default);
  useEffect(() => {
    if (type === "border") {
      r.current.classList.add(style.border);
    }
    if (type === "rounded") {
      r.current.classList.add(style.rounded);
    }
    if (type === "simple") {
      r.current.classList.add(style.simple);
    }
    if (type === "simple2") {
      r.current.classList.add(style.simpleTwo);
    }

    if (type === "" || type === "default" || !type) {
      r.current.classList.add(style.default);
    }
    if (loader) {
      r.current.classList.add(style.loading);
    }
  }, []);
  useEffect(() => {
    if (loader) {
      window.setTimeout(() => {
        r.current.classList.remove(style.loading);
      }, 3000);
    }
  }, [loader]);
  return (
    <div
      ref={r}
      className={style.button}
      style={{
        width: width ? width : "auto",
        backgroundColor: background && background,
      }}
      id={children.length}
    >
      <button onClick={onClick} disabled={disabled}>
        <span>{children}</span>
      </button>
    </div>
  );
}

export default Button;
