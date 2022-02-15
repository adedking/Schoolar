import React, { useState, useRef } from 'react';
import { connect } from 'react-redux'
import { FaSearch } from "react-icons/fa";
import NavSearchDropdownList from './navDropDowns/NavSearchDropdownList';
import './NavBar.scss';

export const NavSearch = (props) => {
    const [searchList, setSearchList] = useState(false)
    const searchInputRef = useRef()

    const checkSearchList = (e) => {
        e.preventDefault()
        setSearchList(true)
    }

    const inputChange = (e) => {
        if (e.target.value === "") {
            setSearchList(false)
        }
        return
    }
    return (
        <>
            <NavSearchDropdownList searchList={searchList} setSearchList={setSearchList} searchInputRef={searchInputRef} />
            <form id="nav-search-form" onSubmit={checkSearchList}>
                <FaSearch className="nav-search-item nav-search-icon"/>
                <input placeholder="Search" className="nav-search-item nav-search-input" onChange={inputChange} ref={searchInputRef}></input>
            </form>
        </>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(NavSearch)

