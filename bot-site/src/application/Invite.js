import React from "react";
import '../resources/App.css';

export default function Invite({ title, subtitle, dark}) {
  return (
    <div className={"section" + (dark ? " Section2" : "")}>
      <div className="section-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}