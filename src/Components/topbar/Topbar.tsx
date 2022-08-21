import { LinkedinOutlined } from "@ant-design/icons";
import React from "react";

import { Link } from "react-router-dom";
import { User } from "../../Constants/Interfaces";
import "./topbar.css";

interface Props {
  logout: () => any;
  isLoggedIn: boolean;
  user: User;
}

const Topbar: React.FC<Props> = ({ logout, isLoggedIn, user }) => {
  return (
    <div className="top">
      <div className="topLeft">
        {/* <i className="topIcon fa-brands fa-linkedin"></i> */}
        <a
          href="https://www.linkedin.com/in/zaiem-munshi-b84a3321b/"
          target="_blank"
          rel="noreferrer"
          className="topIcon"
        >
          <LinkedinOutlined />{" "}
        </a>
        {/* <i className="topIcon fab fa-pinterest-square"></i> */}
        <a href="https://github.com/zaiem2001" target="_blank" rel="noreferrer">
          <i className="topIcon fab fa-github-square"></i>
        </a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          {/* <li className="topListItem">ABOUT</li> */}
          {/* <li className="topListItem">CONTACT</li> */}
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {isLoggedIn ? (
            <li className="topListItem" onClick={logout}>
              LOGOUT
            </li>
          ) : (
            <Link className="link" to="/login">
              <li className="topListItem">LOGIN</li>
            </Link>
          )}
        </ul>
      </div>
      <div className="topRight">
        <Link className="link" to="/settings">
          <img
            className="topImg"
            src={
              user?.profilePicture
                ? user?.profilePicture
                : "/assets/noAvatar.png"
            }
            alt={isLoggedIn ? user?.username : "userProfile"}
          />
        </Link>
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
};

export default Topbar;
