import React from "react";
import { NavLink } from "react-router-dom";
function GeneratedReports() {
  return (
    <>



            <section class="content">
              <div class="card">
                <div class="card-body">
                  <form action="">
                    <div class="row">
                      <div class="col-lg-4 col-md-3 col-sm-12 col-xs-12">
                        <div class="form-group">
                          <label for="">Report</label>
                          <select
                            name=""
                            id="customReports"
                            class="form-control select2"
                            onchange="customreportChange()"
                          ></select>
                        </div>
                      </div>
                      <div class="col-lg-8 col-md-9 col-sm-12 col-xs-12">
                        <br />
                        <div class="form-group">
                          <button
                            type="button"
                            class="btn btn-danger float-right"
                            onclick="deleteCustomReport()"
                          >
                            Delete Report
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="row mb-2">
                <div class="col-sm-12">
                  <div class="card">
                    <div class="card-header">
                      <h3 class="card-title">
                        <i class="fas fa-text-width"></i>
                        <span id="selectedReportName"></span>
                      </h3>
                    </div>
                    {/* <!-- /.card-header --> */}
                    <div class="card-body">
                      <blockquote>
                        <p id="selectedColumns"></p>
                        <p id="selectedconditions"></p>
                      </blockquote>
                    </div>
                    {/* <!-- /.card-body --> */}
                  </div>
                </div>
              </div>
              <div class="row mb-2">
                <div class="col-lg-8 col-md-8 col-sm-6 col-xs-6">
                  <div id="graph-card" class="card">
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
                  <div id="counts-card" class="card">
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

      {/* <!-- ./wrapper --> */}
    </>
  );
}

export default GeneratedReports;
