import React from 'react'
import { connect } from 'react-redux'
// import DateRangePicker from 'react-bootstrap-daterangepicker';
import { FaSearch } from "react-icons/fa";

export const EmployeeFilter = (props) => {
    return (
        <div className="filter">
            <div className="name">
                <FaSearch className="search search-icon "/>
                <input type="text" className="search name-search"  placeholder="Search Employee Name"/>
            </div>
            {/* <div className="date-range-section">
                <label>Date:</label>
                <DateRangePicker 
                    initialSettings={{ startDate: props.startDate, endDate: props.endDate }} 
                    onCallback={props.handleCallback}
                >
                <input type="text" className="date-range"/>
                </DateRangePicker>
            </div> */}
            <div className="status-filter-section">
                <label>Status:</label>
                <select type="select" className="status-filter">
                    <option value="" >All Staff</option>
                    <option value="Active" >Active Staff</option>
                    <option value="Inactive" >Inactive Staff</option>
                </select>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeFilter)
