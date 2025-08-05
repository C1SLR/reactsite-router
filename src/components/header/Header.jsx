import React from "react";
import menu from "./menu.png";
import logo from "./logo.png";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <section className="flex justify-center">
        <nav className="w-11/12">
          <div className="flex justify-between">
            <div className="p-5">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="flex justify-evenly">
              <div className="p-5">
                <Link to="/signin">Sign in</Link>
              </div>
              <div className="p-5">
                <Link href="#">
                  <img src={menu} alt="menu" />
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </header>
  );
}
