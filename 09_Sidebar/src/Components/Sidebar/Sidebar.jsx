import React, { useState } from "react";
import { Home, Menu } from "lucide-react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar(props) {
  const [extended, setExtended] = useState(false);

  const renderdata = props.sidebardata.map((value) => {
    return (
      <ul className="sidebar-items">
        <li>
          <Link to={value.path}>
            {value.icon}
            {extended ? <span>{value.title}</span> : null}
          </Link>
        </li>
      </ul>
    );
  });
  return (
    <>
      <div className="sidebar">
        <div className="top">
          <header>
            <Menu className="menu" onClick={() => setExtended(!extended)} />
          </header>
          <div>{renderdata}</div>
        </div>
        <div className="bottom">
          <div className="profile"></div>
          {extended ? (
            <div>
              <h3>SS Shah</h3>
              <a href="#" className="small-txt">
                View Profile
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
