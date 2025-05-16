import { useState } from "react";
import CafeInfo from "../CafeInfo/CafeInfo";
import css from "./App.module.css";

export default function App() {
  return (
    <div className={css.app}>
      <CafeInfo />
    </div>
  );
}
