import React, { useRef, useEffect } from "react";
import "./sidebar.scss";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBriefcase,
  FaTimes,
  FaFileContract,
  FaUserGraduate,
  FaUserTie,
  FaRegCopyright,
  FaCog,
  FaAddressBook,
  FaWarehouse,
} from "react-icons/fa";

const Sidebar = ({ sidenavToggle, setSidenavToggle }) => {
  const navSidebarRef = useRef();

  const changeDisplay = () => {
    setSidenavToggle(false);
  };
  const sideBarLinks = [
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon: <FaTachometerAlt />
    },
    {
      title: 'Employees',
      path: '/employees',
      icon: <FaBriefcase />
    },
    {
      title: 'Students',
      path: '/students',
      icon: <FaUserGraduate />
    },
    {
      title: 'Parents/Guardian',
      path: '/parents',
      icon: <FaUserTie />
    },
    {
      title: 'Classes',
      path: '/classes',
      icon: <FaWarehouse />
    },
    {
      title: 'Reports',
      path: '/reports',
      icon: <FaFileContract />
    },
    {
      title: 'Settings',
      path: '/settings',
      icon: <FaCog />
    },
    {
      title: 'Contact',
      path: '/contact-us',
      icon: <FaAddressBook />
    }
  ]

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
        {sideBarLinks.map((items, index) => (
          <NavLink
          to={items.path}
          activeClassName="active-sidenav-link"
          className="sidenav-link"
        >
          {items.icon}
          {items.title}
        </NavLink>
        ))}

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
