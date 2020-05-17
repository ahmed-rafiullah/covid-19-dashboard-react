import React from "react";
import Dashboard from './Dashboard'

export default function Main(props) {
  return (
    <main>
      <div className="main_content">
        <div className="controls">
          <span>Updated 2020, 19, Thursday</span>
          <h3>Realtime stats for</h3>
          <form action="">
            <select name="" id="">
                <option value="">Noice</option>
                <option value="">Noice</option>
                <option value="">Noice</option>
            </select>
          </form>
        </div>
        <Dashboard/>
      </div>

    </main>
  );
}
