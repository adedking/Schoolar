import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux';


export const NavSearchDropdownList = ({ searchList, setSearchList, searchInputRef }) => {

    const navSearchListRef = useRef()
    
    const [searchStatus, setSearchStatus] = useState(false)

    // const [searchStudentStatus, setSearchStudentStatus] = useState(true)
    // const [searchParentStatus, setSearchParentStatus] = useState(true)
    // const [searchTeachersStatus, setSearchTeachersStatus] = useState(true)
    // const [searchClassStatus, setSearchClassStatus] = useState(true)

    useEffect( () => {
        document.addEventListener("mousedown", (event) => {
            if (!navSearchListRef.current.contains(event.target) && !searchInputRef.current.contains(event.target)) {
                setSearchList(false)
                setSearchStatus(searchStatus)
            }
        })
    })

    return (
        <div className={ searchList ? `nav-search-list-active` : `nav-search-list` } ref={navSearchListRef}>
            <div id="nav-search-list-body">
                {!searchStatus ?
                <div className="search-in-progress">
                    Search In Progress...
                </div>
                :
                <>
                    <div id="nav-search-list-header">
                        <div id="nav-search-bar-header-text">
                            {searchStatus ? "Search Complete":"Search In Progress..."}
                        </div>
                    </div>
                    <div className="search-section">
                        <div className="section-header">Student</div>
                        <div className="section-result">
                            No Data
                        </div>
                    </div>
                    <div className="search-section">
                        <div className="section-header">Parents</div>
                        <div className="section-result">
                            No Data
                        </div>
                    </div>
                    <div className="search-section">
                        <div className="section-header">Teachers</div>
                        <div className="section-result">
                            No Data
                        </div>
                    </div>
                    <div className="search-section">
                        <div className="section-header">Classes</div>
                        <div className="section-result">
                            No Data
                        </div>
                    </div>
                </>
                }   
            </div>
            <div id="nav-search-list-footer">
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(NavSearchDropdownList)
