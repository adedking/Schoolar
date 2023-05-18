import React, { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import "../../assets/css/Main.scss";
import { FaPlus, FaCaretDown, FaUserTimes, FaQuestion } from "react-icons/fa";
import EmployeeFilter from "./employeeComponents/EmployeeFilter";
import EmployeeTable from "./employeeComponents/EmployeeTable";
import AddEmployeeDropdown from "./employeeComponents/AddEmployeeDropdown";
import { AddSingleEmployeeModal } from "./employeeComponents/employeeModals/AddSingleEmployeeModal";
import { EditEmployeeModal } from "./employeeComponents/employeeModals/EditEmployeeModal";

export const Employees = (props) => {
  //Date Filter Values(States)
  const [startDate, setStartDate] = useState("1/1/2021");
  const [endDate, setEndDate] = useState("1/5/2021");

  const [staffData, setStaffData] = useState([]);

  //Reference for the Add Employee Button
  const buttonDropdownSelectorRef = useRef();

  //Component Specific states for Add Employee Button and Modals
  const [addEmployeeButtonClicked, setAddEmployeeButtonClicked] = useState(false);

  const [addSingleEmployeeModalShow, setAddSingleEmployeeModalShow] = useState(false);

  //Modal State for editing employees
  const [editEmployeeModalShow, setEditEmployeeModalShow] = useState(false);

  //For showing Add single Employee modal
  const showSingleEmployeeModal = () => {
    setAddSingleEmployeeModalShow(true);
    setAddEmployeeButtonClicked(false);
  };

  //For showing Edit Employee modal
  const showEditEmployeeModal = () => {
    setEditEmployeeModalShow(true);
  };

  //Function for changing state when add employee button is clicked
  const addEmployeeButtonClick = (e) => {
    setAddEmployeeButtonClicked(!addEmployeeButtonClicked);
  };

  //For getting date value from Date Range Picker
  const handleCallback = (start, end) => {
    setStartDate(
      start._d.getMonth() +
        1 +
        "/" +
        start._d.getDate() +
        "/" +
        start._d.getFullYear()
    );
    setEndDate(
      end._d.getMonth() +
        1 +
        "/" +
        end._d.getDate() +
        "/" +
        end._d.getFullYear()
    );
    console.log(
      start._d.getMonth() +
        1 +
        "/" +
        start._d.getDate() +
        "/" +
        start._d.getFullYear()
    );
  };

  useEffect( () => {
    setStaffData([
      ...staffData,
      ...[
        {
          first_name: "Adedokun",
          last_name: "Agunbiade",
          staff_id: "SMS0001",
          position: "Teacher",
        },
        {
          first_name: "John",
          last_name: "Doe",
          staff_id: "SMS0002",
          position: "Teacher",
        },
        {
          first_name: "Lilian",
          last_name: "Agunbiade",
          staff_id: "SMS0003",
          position: "Admin Mfisfjanager",
        },
        {
          first_name: "Sylvia",
          last_name: "Ozoude",
          staff_id: "SMS0004",
          position: "Teacher",
        },
        {
          first_name: "Johnson",
          last_name: "Coleman",
          staff_id: "SMS0005",
          position: "Finanwrpwrojkrce Manager",
        },
        {
          first_name: "Johnson",
          last_name: "Coleman",
          staff_id: "SMS0005",
          position: "Fin949030ance Manager",
        },
        {
          first_name: "Johnson",
          last_name: "Coleman",
          staff_id: "SMS0005",
          position: "Finandppoece Manager",
        },
        {
          first_name: "Johnson",
          last_name: "Coleman",
          staff_id: "SMS0005",
          position: "Fina=22po4op2lmnce Manager",
        },
        {
          first_name: "Johnson",
          last_name: "Coleman",
          staff_id: "SMS0005",
          position: "Fina309kdkdlnce Manager",
        },
        {
          first_name: "Johnson",
          last_name: "Coleman",
          staff_id: "SMS00015",
          position: "Fin20003ance Manager",
        },
        {
          first_name: "Johon",
          last_name: "Coleman",
          staff_id: "SMS0005",
          position: "Fieepenance Manager",
        },
        {
          first_name: "Jnson",
          last_name: "Coleman",
          staff_id: "SMS0005",
          position: "Financepepe Manager",
        },
        {
          first_name: "Johnson",
          last_name: "Coleman",
          staff_id: "SMS0005",
          position: "Finance Manager",
        },
        {
          first_name: "Johnson",
          last_name: "Colewuwman",
          staff_id: "SMS0005",
          position: "Finance Manager",
        },
        {
          first_name: "Johnson",
          last_name: "Coleman",
          staff_id: "SMS00030",
          position: "Fina993030nce Manager",
        },
        {
          first_name: "Johnson",
          last_name: "Coleman",
          staff_id: "SMS0031",
          position: "Finan0022ce Manager",
        },
        {
          first_name: "Johnson",
          last_name: "Coleman",
          staff_id: "SMS455005",
          position: "Finance Manager",
        },
        {
          first_name: "Johnson",
          last_name: "Coleman",
          staff_id: "SMS003o3o3o405",
          position: "Finance Manager",
        },
        {
          first_name: "Johnson",
          last_name: "Coleman",
          staff_id: "SMS0oo4o4005",
          position: "Finance Manager",
        },
        {
          first_name: "Johnson",
          last_name: "Coleman",
          staff_id: "SMS0432md005",
          position: "Finance Manager",
        },
        {
          first_name: "Johnson",
          last_name: "Coleman",
          staff_id: "SMeieeS0005",
          position: "Finance Manager",
        },
        {
          first_name: "Johnson",
          last_name: "Coleman",
          staff_id: "SMS0005",
          position: "Finance Manager",
        },
        {
          first_name: "Johnson",
          last_name: "Coleman",
          staff_id: "SMS0005",
          position: "Finance Manager",
        },
        {
          first_name: "Johnson",
          last_name: "Coleman",
          staff_id: "SMS0005",
          position: "Finance Manager",
        },
        {
          first_name: "Johnson",
          last_name: "Coleman",
          staff_id: "SMS0005",
          position: "Finance Manager",
        },
        {
          first_name: "Johnson",
          last_name: "Coleman",
          staff_id: "SMS0005",
          position: "Finance Manager",
        },
        {
          first_name: "Johnson",
          last_name: "Coleman",
          staff_id: "SMS0005",
          position: "Finance Manager",
        },
        {
          first_name: "Johnson",
          last_name: "Coleman",
          staff_id: "SMS0005",
          position: "Finance Manager",
        },
        {
          first_name: "Johnson",
          last_name: "Coleman",
          staff_id: "SMS0005",
          position: "Finance Manager",
        },
        {
          first_name: "Johnson",
          last_name: "Coleman",
          staff_id: "SMS0005",
          position: "Finance Manager",
        },
        {
          first_name: "Johnson",
          last_name: "Coleman",
          staff_id: "SMS0005",
          position: "Finance Manager",
        },
        {
          first_name: "Johnson",
          last_name: "Coleman",
          staff_id: "SMS0005",
          position: "Finance Manager",
        },
        {
          first_name: "Johnson",
          last_name: "Coleman",
          staff_id: "SMS0005",
          position: "Finance Manager",
        },
        {
          first_name: "Johnson",
          last_name: "Coleman",
          staff_id: "SMS0005",
          position: "Finance Manager",
        },
        {
          first_name: "Johnson",
          last_name: "Coleman",
          staff_id: "SMS0005",
          position: "Finance Manager",
        },
        {
          first_name: "Johnson",
          last_name: "Coleman",
          staff_id: "SMS0005",
          position: "Finance Manager",
        },
        {
          first_name: "Johnson",
          last_name: "Coleman",
          staff_id: "SMS0005",
          position: "Finance Manager",
        },
      ],
    ]);
    return () => {};
  }, [staffData]);

  return (
    <div id="main-page">
      <div className="page-title">Employees</div>
      <div className="main-page-body">
        <div className="main-page-header">
          <button
            className="add title-button"
            onClick={addEmployeeButtonClick}
            ref={buttonDropdownSelectorRef}
          >
            <FaPlus /> New Employees
            <FaCaretDown />
          </button>
          <AddEmployeeDropdown
            addEmployeeButtonClicked={addEmployeeButtonClicked}
            setAddEmployeeButtonClicked={setAddEmployeeButtonClicked}
            showSingleEmployeeModal={showSingleEmployeeModal}
            buttonDropdownSelectorRef={buttonDropdownSelectorRef}
          />
          <button className="add-help title-button">
            Help <FaQuestion />
          </button>
        </div>
        <div className="body">
          <div className="staff-list">
            <EmployeeFilter
              startDate={startDate}
              endDate={endDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
              handleCallback={handleCallback}
            />
            {staffData.length > 0 ? (
              <EmployeeTable
                showEditEmployeeModal={showEditEmployeeModal}
                staffData={staffData}
                setStaffData={setStaffData}
              />
            ) : (
              <div className="none-data-added">
                <div className="no-title">No Employee Added</div>
                <FaUserTimes className="no-logo" />
                <button className="add-button">Add Employee</button>
              </div>
            )}
          </div>
        </div>
      </div>
      <AddSingleEmployeeModal
        addSingleEmployeeModalShow={addSingleEmployeeModalShow}
        setAddSingleEmployeeModalShow={setAddSingleEmployeeModalShow}
      />
      <EditEmployeeModal
        editEmployeeModalShow={editEmployeeModalShow}
        setEditEmployeeModalShow={setEditEmployeeModalShow}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Employees);
