import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

export const Paginator = ({ staffData, setTableData, tableData }) => {
  //Length of the Table (This can be made dynamic)
  const tableLength = 10;

  //Paginator pages
  const [firstPage, setFirstPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPage, setNextPage] = useState(null);
  const [lastPage, setLastPage] = useState(null);

  //Total Pages baased on table Length
  const [totalPages, setTotalPages] = useState(1);
  //Length of the JSON file
  const [studentCount, setstudentCount] = useState(0);

  //Handles onclick event of the next button
  const nextButtonClicked = (e) => {
    e.preventDefault();
    let newPage = currentPage + 1;
    if (newPage === lastPage) {
      if (studentCount % tableLength > 0) {
        console.log(studentCount % tableLength);
        setTableData(staffData.slice(-((studentCount % tableLength) + 1), -1));
        setCurrentPage(currentPage + 1);
        setNextPage(null);
        setPrevPage(prevPage + 1);
      }
    } else {
      setTableData(
        staffData.slice(
          newPage * tableLength - tableLength,
          newPage * tableLength
        )
      );
      setCurrentPage(currentPage + 1);
      setNextPage(nextPage + 1);
      setPrevPage(prevPage + 1);
    }
  };
  const prevButtonClicked = (e) => {
    e.preventDefault();
    let newPage = currentPage - 1;
    if (newPage === firstPage) {
      setCurrentPage(1);
    } else if (currentPage === lastPage) {
      setTableData(
        staffData.slice(
          newPage * tableLength - tableLength,
          newPage * tableLength
        )
      );
      setCurrentPage(currentPage - 1);
      setNextPage(lastPage);
      setPrevPage(prevPage - 1);
    } else {
      setTableData(
        staffData.slice(
          newPage * tableLength - tableLength,
          newPage * tableLength
        )
      );
      setCurrentPage(currentPage - 1);
      setNextPage(nextPage - 1);
      setPrevPage(prevPage - 1);
    }
  };
  const firstButtonClicked = (e) => {
    e.preventDefault();
    setCurrentPage(firstPage);
    setPrevPage(null);
  };
  const lastButtonClicked = (e) => {
    e.preventDefault();
    if (lastPage === firstPage) {
      return;
    } else if (studentCount % tableLength > 0) {
      console.log(studentCount % tableLength);
      setTableData(staffData.slice(-((studentCount % tableLength) + 1), -1));
      setCurrentPage(lastPage);
      setNextPage(null);
      setPrevPage(lastPage - 1);
    } else {
      setTableData(
        staffData.slice(
          lastPage * tableLength - tableLength,
          lastPage * tableLength
        )
      );
      setCurrentPage(lastPage);
      setNextPage(null);
      setPrevPage(lastPage - 1);
    }
  };

  useEffect( () => {
    if (currentPage === 1) {
      setstudentCount(staffData.length);
      if (staffData.length > 0) {
        setTotalPages(Math.ceil(staffData.length / tableLength));
        setFirstPage(1);
        setLastPage(totalPages);
        if (totalPages === 1 || currentPage === 1) {
          setPrevPage(null);
        } else {
          setPrevPage(currentPage - 1);
        }
        if (
          Math.ceil(staffData.length / tableLength) === 1 ||
          currentPage === Math.ceil(staffData.length / tableLength)
        ) {
          setNextPage(null);
        } else {
          setNextPage(currentPage + 1);
        }
        if (
          currentPage === 1 &&
          currentPage === Math.ceil(staffData.length / tableLength)
        ) {
          if (staffData.length === tableLength) {
            setTableData(staffData.slice(0, tableLength));
          } else {
            setTableData(staffData.slice(0, staffData.length));
          }
        } else {
          setTableData(staffData.slice(0, tableLength));
        }
      }
    } else {
      return;
    }

    // return () => {};
  }, [currentPage, staffData, totalPages,setTableData]);

  return (
    <div className="paginator">
      <div
        onClick={firstButtonClicked}
        className="paginator-buttons"
      >{`<< First`}</div>
      {currentPage === firstPage ? null : (
        <div onClick={prevButtonClicked} className="paginator-buttons">
          {"< Previous"}
        </div>
      )}
      {prevPage === null ? null : (
        <button className="previous-page paginator-pages">{prevPage}</button>
      )}
      <button className="current-page paginator-pages">{currentPage}</button>
      {nextPage === null ? null : (
        <button className="next-page paginator-pages">{nextPage}</button>
      )}
      {currentPage === lastPage ? null : (
        <div onClick={nextButtonClicked} className="paginator-buttons">
          {"> Next"}
        </div>
      )}
      <div onClick={lastButtonClicked} className="paginator-buttons">
        {">> Last"}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Paginator);
