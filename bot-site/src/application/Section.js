import React from "react";

export default function Section({ title, subtitle, dark}) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}