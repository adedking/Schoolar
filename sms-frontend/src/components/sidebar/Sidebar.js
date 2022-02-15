import React, { useRef, useEffect } from "react";
import "./sidebar.scss";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBriefcase,
  FaTimes,
  FaCalendarAlt,
  FaFileContract,
  FaUserGraduate,
  FaUserTie,
  FaRegCopyright,
  FaCog,
  FaWallet,
  FaAddressBook,
  FaWarehouse,
} from "react-icons/fa";

const Sidebar = ({ sidenavToggle, setSidenavToggle }) => {
  const navSidebarRef = useRef();

  const changeDisplay = () => {
    setSidenavToggle(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (
        !navSidebarRef.current.contains(event.target) &&
        !navSidebarRef.current.contains(event.target)
      ) {
        setSidenavToggle(false);
      }
    });
  });
  return (
    <aside
      className={`side-nav ${!sidenavToggle ? "side-nav-inactive" : ""}`}
      ref={navSidebarRef}
    >
      <div className="sidenav-close-button" onClick={changeDisplay}>
        <FaTimes />
      </div>
      <div id="sidenav-header">
        <h1>sms</h1>
      </div>
      <div id="sidenav-body">
        <NavLink
          to="/dashboard"
          activeClassName="active-sidenav-link"
          className="sidenav-link"
        >
          <FaTachometerAlt />
          Dashboard
        </NavLink>
        <NavLink
          to="/employees"
          activeClassName="active-sidenav-link"
          className="sidenav-link"
        >
          <FaBriefcase />
          Employees
        </NavLink>
        <NavLink
          to="/students"
          activeClassName="active-sidenav-link"
          className="sidenav-link"
        >
          <FaUserGraduate />
          Students
        </NavLink>
        <NavLink
          to="/parents"
          activeClassName="active-sidenav-link"
          className="sidenav-link"
        >
          <FaUserTie />
          Parents/Guardian
        </NavLink>
        <NavLink
          to="/classes"
          activeClassName="active-sidenav-link"
          className="sidenav-link"
        >
          <FaWarehouse />
          Classes
        </NavLink>
        <NavLink
          to="/calendar"
          activeClassName="active-sidenav-link"
          className="sidenav-link"
        >
          <FaCalendarAlt />
          Calendar
        </NavLink>
        <NavLink
          to="/wallet"
          activeClassName="active-sidenav-link"
          className="sidenav-link"
        >
          <FaWallet />
          Wallet
        </NavLink>
        <NavLink
          to="/reports"
          activeClassName="active-sidenav-link"
          className="sidenav-link"
        >
          <FaFileContract />
          Reports
        </NavLink>
        <NavLink
          to="/settings"
          activeClassName="active-sidenav-link"
          className="sidenav-link"
        >
          <FaCog />
          Settings
        </NavLink>
        <NavLink
          to="/contact-us"
          activeClassName="active-sidenav-link"
          className="sidenav-link"
        >
          <FaAddressBook />
          Contact us
        </NavLink>
      </div>
      <div id="sidenav-footer">
        <div className="copyright">
          Copyright <FaRegCopyright /> 2021
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
