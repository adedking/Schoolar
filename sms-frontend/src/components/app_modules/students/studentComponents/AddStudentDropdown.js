import React, { useRef } from "react";

export default function AddStudentDropdown({
  buttonDropdownSelectorRef,
  setAddStudentButtonClicked,
  addStudentButtonClicked,
  showSingleStudentModal,
}) {
  const addListRef = useRef();

  return (
    <div
      className={
        addStudentButtonClicked
          ? `add-dropdown-active`
          : `add-dropdown`
      }
      ref={addListRef}
    >
      <div onClick={() => showSingleStudentModal()}>Add Single Students</div>
      <div>Add Bulk Students</div>
    </div>
  );
}
