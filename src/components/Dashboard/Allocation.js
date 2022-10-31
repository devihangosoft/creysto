import React from "react";
import Tables from "../DataTables/Tables";
import Filter from "../Elements/Filter/Filter";
function Allocation() {
  return (
    <>
      <div className="py-4">
        <div className="row">
          <div className="col-md-6">
            <div action="" class="form-inline ml-3">
              <select name="" class="form-control" id="allocationTeam"></select>
              <button class=" ml-3 btn btn-primary" onclick="assignLeads()">
                Assign
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <Filter />
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-body table-responsive">
          <Tables />
        </div>
      </div>
    </>
  );
}

export default Allocation;
