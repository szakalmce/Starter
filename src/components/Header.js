import React from "react";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="header-inner ">
            <h1 className="header-logo">TomaszGarbarz</h1>
            <ul className="nav flex">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-button" href="/">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
