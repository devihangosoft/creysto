import React from "react";
import { NavLink } from "react-router-dom";
function ReportGenerator() {
  return (
    <>

            <section class="content">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-sm-12">
                    <div class="card curved-card">
                      <div class="card-body">
                        <div class="row mb-2">
                          <div class="col-sm-12 col-md-6">
                            <h1>Create new report</h1>
                          </div>
                          <div class="col-sm-12 col-md-6">
                            <button
                              type="button"
                              class="btn btn-primary float-right ml-1"
                              onclick="createReport()"
                            >
                              Create report
                            </button>
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="newReportName">Report name</label>
                          <input
                            type="text"
                            name="newReportName"
                            id="newReportName"
                            class="form-control"
                            placeholder="Enter report name"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6">
                    <div class="card curved-card">
                      <div class="card-body">
                        <div class="form-group">
                          <label>Report fields</label>
                          <select
                            class="duallistbox"
                            multiple="multiple"
                            style={{ display: "none" }}
                            id="column_names"
                            onchange="selectedColumns()"
                          ></select>
                        </div>
                        <hr />
                      </div>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6">
                    <div class="card curved-card">
                      <div class="card-body">
                        <div class="form-group">
                          <label for="">Include Graph</label>
                          <input
                            type="checkbox"
                            name="my-checkbox"
                            data-bootstrap-switch
                            id="includeGraph"
                            onchange="includeGraph()"
                          />
                        </div>
                        <div class="clearfix"></div>
                        <div class="row" id="graphCard">
                          <div class="col-sm-12 col-md-6">
                            <div class="form-group">
                              <label for="">Graph Type</label>
                              <select
                                name=""
                                id="graphType"
                                class="form-control"
                              >
                                <option value="">Select graph type</option>
                                <option value="pie">Pie chart</option>
                                <option value="column">Column chart</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-sm-12 col-md-6">
                            <div class="form-group">
                              <label for="">Order by</label>
                              <select
                                name=""
                                id="graphOrderBy"
                                class="form-control"
                              >
                                <option value="">
                                  ---Select Report fields first---
                                </option>
                              </select>
                            </div>
                          </div>
                          <div class="col-sm-12 col-md-6">
                            <div class="form-group">
                              <label for="">Function</label>
                              <select
                                name=""
                                id="graphFunctionType"
                                class="form-control"
                              >
                                <option value="">Select function type</option>
                                <option value="count">Count</option>
                                <option value="sum">Sum</option>
                                <option value="avg">Average</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-sm-12 col-md-6">
                            <div class="form-group">
                              <label for="">Function column</label>
                              <select
                                name=""
                                id="graphFunctionColumn"
                                class="form-control"
                              >
                                <option value="">Select function column</option>
                                <option value="lead_id" selected="true">
                                  lead_id
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                  <div class="col-12 col-sm-12 col-md-12">
                    <div class="card curved-card">
                      <div class="card-body">
                        <div class="row">
                          <div class="col-sm-12 col-md-12">
                            <h5 class="card-title">Conditions</h5>
                            <button
                              type="button"
                              class="btn btn-primary float-right ml-1"
                              data-toggle="modal"
                              data-target="#setConditionModalModal"
                            >
                              <i class="fas fa-plus"></i>&nbsp;Add
                            </button>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-sm-12" id="conditionContainer"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="modal fade" id="setConditionModalModal">
                <div class="modal-dialog modal-xl">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title">Set condition</h4>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <form id="setConditionform">
                        <div class="row">
                          <div class="col-sm-12">
                            <div class="form-group">
                              <label for="conditionType">Condition type</label>
                              <select
                                name="conditionType"
                                id="conditionType"
                                class="form-control"
                                disabled
                              >
                                <option selected="true" disabled value="">
                                  Select Condition type
                                </option>
                                <option value="AND">AND</option>
                                <option value="OR">OR</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-sm-12 col-md-6">
                            <div class="form-group">
                              <label for="">Condition column</label>
                              <select
                                name=""
                                id="conditionColumn"
                                class="form-control"
                                onchange="getCondition()"
                              >
                                <option value="">Select field</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-sm-12 col-md-6">
                            <div class="form-group">
                              <label for="">Condition</label>
                              <select
                                name=""
                                id="conditionN"
                                class="form-control"
                                onchange="valueFieldSwitch()"
                              >
                                <option value="">Select condition</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-sm-12 col-md-6">
                            <div
                              class="form-group"
                              id="conditionvalue1Container"
                            >
                              <label for="">Value 1</label>
                              <input
                                type="text"
                                name=""
                                id="conditionvalue1"
                                class="form-control"
                              />
                            </div>
                          </div>
                          <div class="col-sm-12 col-md-6">
                            <div
                              class="form-group"
                              id="conditionvalue2Container"
                            >
                              <label for="">Value 2</label>
                              <input
                                type="text"
                                name=""
                                id="conditionvalue2"
                                class="form-control"
                                style={{ display: "none" }}
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer justify-content-between">
                      <button
                        type="button"
                        class="btn btn-default"
                        data-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary"
                        onclick="createCondition()"
                      >
                        Add condition
                      </button>
                    </div>
                  </div>
                  {/* <!-- /.modal-content --> */}
                </div>
                {/* <!-- /.modal-dialog --> */}
              </div>
            </section>
      
    </>
  );
}

export default ReportGenerator;
