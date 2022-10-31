import React from "react";
import { NavLink } from "react-router-dom";
import Tables from "../DataTables/Tables";
function Transfer() {
  return (
    <>
      {/* <!-- Content Wrapper. Contains page content --> */}
      <div className="content-wrapper">
        <section class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1>Refer accounts</h1>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li class="breadcrumb-item active">Refer Accounts</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Main content --> */}
        <section class="content">
          <div class="card">
            <div class="card-header">
           
              <div class="card-tools">
                <div action="" class="form-inline ml-3">
                  <select
                    name=""
                    class="form-control"
                    id="allocationTeam"
                  ></select>
                  <button class=" ml-3 btn btn-primary" onclick="referLeads()">
                    Refer
                  </button>
                </div>
              </div>
            </div>
            <div class="card-body table-responsive">
              <Tables />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Transfer;
