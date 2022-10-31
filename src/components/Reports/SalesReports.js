import React from "react";
import { NavLink } from "react-router-dom";
function SalesReports() {
  return (
    <>

            <section class="content-header">
              <div class="container-fluid">
                <div class="row mb-2">
                  <div class="col-sm-6">
                    <h1>Saved Reports</h1>
                  </div>
                  <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                      <li class="breadcrumb-item">
                        <NavLink to="/leadlist">Home</NavLink>
                      </li>
                      <li class="breadcrumb-item active">Reports</li>
                    </ol>
                  </div>
                </div>
              </div>
              {/* <!-- /.container-fluid -->/div> */}
            </section>

            <section class="content">
              <div class="card">
                <div class="card-body">
                  <form action="">
                    <div class="row">
                      <div class="col-lg-3 col-md-3 col-sm-4 col-xs-6">
                        <div class="form-group">
                          <label for="">Report</label>
                          <select
                            name=""
                            id="ticketreportType"
                            class="form-control select2"
                            onchange="reportChange()"
                          >
                            <option value="">--Select report--</option>
                            <option value="active">Active users</option>
                            <option value="dispositions">
                              Disposition report
                            </option>
                            <option value="dpd">Bucket report</option>
                            <option value="master">Master data</option>
                            <option value="mtd">MTD report</option>
                            <option value="paid">Paid report</option>
                            <option value="ptp">PTP report</option>
                            <option value="dialer">Dialer report</option>
                            <option value="task">Task monitor</option>
                            <option value="user">User report</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-3 col-sm-4 col-xs-6">
                        <div class="form-group">
                          <label>Date range:</label>

                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text">
                                <i class="far fa-calendar-alt"></i>
                              </span>
                            </div>
                            <input
                              type="text"
                              class="form-control float-right"
                              id="reportDateRange"
                            />
                          </div>
                          {/* <!-- /.input group --> */}
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div class="row mb-2">
                <div class="col-lg-8 col-md-8 col-sm-6 col-xs-6">
                  <div id="graph-card" class="card collapsed-card">
                    <div class="card-header">
                      <h5 class="card-title" id="graph-title">
                        Graph
                      </h5>
                      <div class="card-tools">
                        <button
                          id="control-graph"
                          type="button"
                          class="btn btn-tool"
                          data-card-widget="collapse"
                        >
                          <i class="fas fa-plus"></i>
                        </button>
                      </div>
                    </div>
                    <div class="card-body">
                      {/* <h3 class="text-center" id="reportGraphMessage"></h3> */}
                      <div id="chartContainer" class="chart">
                        <canvas
                          id="mainChart"
                          style={{minHeight: "250px", height: "250px", maxHeight: "250px", maxWidth: "100%"}}
                        ></canvas>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-6">
                  <div id="counts-card" class="card collapsed-card">
                    <div class="card-header">
                      <h5 class="card-title" id="count-title">
                        Counts
                      </h5>
                      <div class="card-tools">
                        <button
                          id="control-counts"
                          type="button"
                          class="btn btn-tool"
                          data-card-widget="collapse"
                        >
                          <i class="fas fa-plus"></i>
                        </button>
                      </div>
                    </div>
                    <div class="card-body">
                      <div class="row">
                        <div class="col-12">
                          <ul
                            id="mainCounts"
                            class="nav nav-pills flex-column"
                          ></ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="card">
                    <div class="card-header">
                      <h3 class="card-title" id="table-title">
                        Data
                      </h3>
                      <div class="card-tools">
                        <button
                          type="button"
                          class="btn btn-tool"
                          data-card-widget="collapse"
                        >
                          <i class="fas fa-minus"></i>
                        </button>
                      </div>
                    </div>
                    <div class="card-body table-responsive">
                      <table
                        class="table table-valign-middle table-condensed"
                        id="ticketReportTable"
                      ></table>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        
    </>
  );
}

export default SalesReports;
