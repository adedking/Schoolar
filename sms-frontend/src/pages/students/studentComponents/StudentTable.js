import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { FaEye, FaPen, FaCheck } from "react-icons/fa";
import { Paginator } from "./Paginator";
import pix from "../../../assets/images/profile-pix.jpg";

export const StudentTable = ({
  showEditStudentModal,
  staffData,
  setStaffData,
}) => {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {}, [tableData]);
  return (
    <div className="staff-table">
      <div className="table-header">Student List</div>
      <table className="table">
        <tbody>
          {tableData.map((val, index) => (
            <tr key={index}>
              <td>
                <img src={pix} alt="pix" className="list-image"/>
              </td>
              <td>
                {val.first_name} {val.last_name} | {val.staff_id}
              </td>
              <td>{val.position}</td>
              <td>
                <button className="status-button">
                  <FaCheck />
                </button>
              </td>
              <td className="new-table-icons-group">
                <FaEye className="icons" />
                <FaPen
                  className="icons"
                  onClick={() => showEditStudentModal()}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Paginator
        staffData={staffData}
        setStaffData={setStaffData}
        setTableData={setTableData}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(StudentTable);
