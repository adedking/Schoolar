import React, { useEffect, useRef } from 'react';
import { FaTag } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavList = ({ navList, setNavList, navDropdownSelectorRef }) => {
    const navListRef = useRef()

    useEffect( () => {
        document.addEventListener("mousedown", (event) => {
            if (!navListRef.current.contains(event.target) && !navDropdownSelectorRef.current.contains(event.target)) {
                setNavList(false)
            } 
        })
    })
    
    return (
        <div className={ navList ? `nav-list-active` : `nav-list` } ref={navListRef}>
            <div id="nav-list-header">
                <div id="nav-bar-header-text">
                    Ropay Limited
                </div>
                <button id="nav-list-header-button">Logout</button>
            </div>
            <div id="nav-list-body">
                <div id="nav-list-body-activity">Activity Log<button id="nav-list-body-badge">1</button></div>
                <div>Reset Password</div>
                <div>Settings</div>
            </div>
            <div id="nav-list-tickets">
                <Link to="/contact-us" id="nav-list-tickets-link">
                    <FaTag />
                    Support Tickets
                </Link>
            </div>
        </div>
    );
};

export default NavList;
