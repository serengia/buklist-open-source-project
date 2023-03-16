import React from "react";
import s from "./Dashboard.module.scss";

export default function Dashboard() {
  return (
    <main>
      <section>
        <div className={`${s["dashboard-container"]} row`}>
          <h1>Dashboard</h1>
        </div>
      </section>
    </main>
  );
}
