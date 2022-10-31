import React from "react";
import Tables from "../../DataTables/Tables";
import Filter from "../../Elements/Filter/Filter";


function CreateContact() {
  return (
    <>
      <div className="py-4">
        <div className="row">
          <div className="col-12 ">
            <Filter/>
          </div>
        </div>
      </div>
      <div className="row align-items-center justify-content-between">
        <div className="col-md-12">
          <Tables />
        </div>
      </div>
    </>
  );
}

export default CreateContact;
