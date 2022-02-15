import React, { useState, useRef } from 'react'
import { connect } from 'react-redux';
import './NavBar.scss';
import profileImage from "./IMG_3956.png";
import { FaCaretDown, FaBars } from "react-icons/fa";
import NavDropdownList from './navDropDowns/NavDropdownList';
import NavSearch from './NavSearch';

export const NavBar = ({ sidenavToggle, setSidenavToggle }) => {
    
    const [ navList, setNavList ] = useState(false)
    
    const navDropdownSelectorRef = useRef()

    const changeSidenavToggle = (event) => {
        setSidenavToggle(true)
    }

    const checkNavList = () => {
        setNavList(!navList)
    }

    return (
        <nav id="nav-header">
            <FaBars id="nav-bar-icon" onClick={changeSidenavToggle}/>
            <div id="nav-header-left"></div>
            <NavSearch />
            <div id="nav-header-right">
                <NavDropdownList navList={navList} setNavList={setNavList} navDropdownSelectorRef={navDropdownSelectorRef}/>
                <div id="nav-header-dropdown" onClick={checkNavList} ref={navDropdownSelectorRef}>
                    <img src={profileImage} alt="profile" /> 
                    <FaCaretDown id="nav-dropdown-icon" />
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
