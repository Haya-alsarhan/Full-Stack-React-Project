import React, { Component } from "react";
import logoheader from "../Images/logoheader.png";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="navbar  ">
        <div className="nav-center">
          <div className="nav-header">
            <Link>
              <img src={logoheader} alt=" where to eat?" />
            </Link>

            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>

          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link>إنشاء حساب</Link>
            </li>
            <li className="menu-seperator">
              <span>|</span>
            </li>

            <li>
              <Link>تسجيل الدخول</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
