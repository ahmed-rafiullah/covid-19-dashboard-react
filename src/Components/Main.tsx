import React from "react";
import Dashboard from './Dashboard'
import ControlForm from "./Controls";

export default function Main(props) {
  return (
    <main>
      <div className="main_content">
        <ControlForm/>
        <Dashboard/>
      </div>

    </main>
  );
}
