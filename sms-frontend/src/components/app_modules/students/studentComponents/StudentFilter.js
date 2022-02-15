import React from 'react'
import { connect } from 'react-redux'
// import DateRangePicker from 'react-bootstrap-daterangepicker';
import { FaSearch } from "react-icons/fa";

export const StudentFilter = (props) => {
    return (
        <div className="filter">
            <div className="name">
                <FaSearch className="search search-icon "/>
                <input type="text" className="search name-search"  placeholder="Search Student By Name"/>
            </div>
            <div className="status-filter-section">
                <label>Status:</label>
                <select type="select" className="status-filter">
                    <option value="Active" >Active Students</option>
                    <option value="Inactive" >Inactive Students</option>
                    <option value="" >All Students</option>
                </select>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentFilter)
