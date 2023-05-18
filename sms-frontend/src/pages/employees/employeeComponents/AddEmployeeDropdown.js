import React, { useRef } from "react";

export default function AddEmployeeDropdown({
  buttonDropdownSelectorRef,
  setAddEmployeeButtonClicked,
  addEmployeeButtonClicked,
  showSingleEmployeeModal,
}) {
  const addListRef = useRef();

  return (
    <div
      className={
        addEmployeeButtonClicked
          ? `add-dropdown-active`
          : `add-dropdown`
      }
      ref={addListRef}
    >
      <div onClick={() => showSingleEmployeeModal()}>Add Single Employees</div>
      <div>Add Bulk Employees</div>
    </div>
  );
}
