import React from "react";
import { NavLink } from "react-router-dom";
import * as Icon from "react-feather";
import "./LeftSidebar.scss";
import "./sidebar.scss";

export default function LeftSideBar() {
  const Accordion = ({ title, children }) => {
    const [isOpen, setOpen] = React.useState(false);
    return (
      <div className="sidebar-link">
        <div
          className={`accordion-title ${isOpen ? "open" : ""}`}
          onClick={() => setOpen(!isOpen)}
        >
          {title}
        </div>
        <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
          <div className="accordion-content">{children}</div>
        </div>
      </div>
    );
  };
  return (
    <div className="sidebar-wrapper">
      <div className="logo-wrapper">
        <NavLink
          to="/dashboard"
          className="sidebar-link sidebar-title d-flex  align-items-center"
        >
          <img src="./images/creysto-logo.png" alt="Creysto Logo" />
          <span className="ml-4">
            <h4 className="my-1">CREYSTO</h4>
          </span>
        </NavLink>
      </div>

      <ul
        className="sidebar-links custom-scrollbar"
        style={{ height: "100vh" }}
      >
        <li className="sidebar-list">
          <NavLink to="/dashboard" className="sidebar-link sidebar-title ">
            <Icon.Home />
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li className="sidebar-list">
          <NavLink to="/createContact" className="sidebar-link sidebar-title ">
            <Icon.Upload />
            <span>Imports</span>
          </NavLink>
        </li>
        <li className="sidebar-list">
          <NavLink to="/leadList" className="sidebar-link sidebar-title ">
            <Icon.CheckSquare />
            <span>Accounts</span>
          </NavLink>
        </li>

        <Accordion
          title={
            <>
              <Icon.UserPlus />
              <span>Allocation</span>
            </>
          }
        >
          <ul className="sidebar-submenu">
            <li>
              <NavLink className="" to="/allocation">
                Team Allocation
              </NavLink>
            </li>
            <li>
              <NavLink className="" to="/subteamallocation">
                Sub Team Allocation
              </NavLink>
            </li>
            <li>
              <NavLink className="" to="/">
                Agent Allocation
              </NavLink>
            </li>
          </ul>
        </Accordion>

        <Accordion
          title={
            <>
              <Icon.UserMinus />
              <span>Remove Allocation</span>
            </>
          }
        >
          <ul className="sidebar-submenu">
            <li>
              <NavLink className="" to="/">
                Team Allocation
              </NavLink>
            </li>
            <li>
              <NavLink className="" to="/">
                Sub Team Allocation
              </NavLink>
            </li>
            <li>
              <NavLink className="" to="/">
                Agent Allocation
              </NavLink>
            </li>
          </ul>
        </Accordion>

        <Accordion
          title={
            <>
              <Icon.Users />
              <span>Account Collabration</span>
            </>
          }
        >
          <ul className="sidebar-submenu">
            <li>
              <NavLink className="" to="/">
                Partner Account
              </NavLink>
            </li>
            <li>
              <NavLink className="" to="/">
                Partner Request
              </NavLink>
            </li>
            <li>
              <NavLink className="" to="/">
                Partnered Accounts
              </NavLink>
            </li>
          </ul>
        </Accordion>

        <li className="sidebar-list">
          <NavLink
            className="sidebar-link sidebar-title link-nav  "
            to="/transfer"
          >
            <Icon.Link />
            <span>Refer Account</span>
          </NavLink>
        </li>

        <Accordion
          title={
            <>
              {" "}
              <Icon.PieChart />
              <span>Analytics</span>
            </>
          }
        >
          <ul className="sidebar-submenu">
            <li>
              <NavLink className="" to="/reportGenerator">
                Create Report
              </NavLink>
            </li>
            <li>
              <NavLink className="" to="/generatedReports">
                Custom Reports
              </NavLink>
            </li>
            <li>
              <NavLink className="" to="/salesreports">
                Basic Reports
              </NavLink>
            </li>
          </ul>
        </Accordion>

        <li className="sidebar-list">
          <NavLink
            className="sidebar-link sidebar-title link-nav  "
            to="/configuration"
          >
            <Icon.Settings />
            <span>Settings </span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
