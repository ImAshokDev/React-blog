import React from "react";

export default function Header() {
  return (
    <div className="headerDiv">
      <div className="headerLeft">
        <h1>Title</h1>
      </div>
      <div className="headerRight">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </div>
    </div>
  );
}
