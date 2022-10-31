import React from "react";
import { NavLink } from "react-router-dom";
import Tables from "../DataTables/Tables";
import LeftSideBar from "./LeftSideBar";
import TopSideBar from "./TopSideBar";

function MainContent() {
  return (
    <>
    <Tables/>

            <section className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1>Dashboard</h1>
                    <Tables/>  
                  </div>
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item">
                        <NavLink to="/leadlist">Home</NavLink>
                      </li>
                      <li className="breadcrumb-item active">Dashboard</li>
                    </ol>
                  </div>
                </div>
                <div className="row">
                <div className="col-12 col-sm-12">
                <Tables/>   
                </div>               
                </div>
              </div>
            </section>

            {/* <!-- Main content --> */}
            <section className="content">
              <div className="container-fluid">
                <div className="row">
                <div className="col-12 col-sm-12">
                <Tables/>   
                </div>               
                </div>
                <div className="row">
                  <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box mb-3">
                      <span className="info-box-icon bg-gradient-navy-blue elevation-1">
                        <i className="fas fa-user-plus"></i>
                      </span>
                      <div className="info-box-content">
                        <span className="info-box-text stat-text">
                          Assigned accounts
                        </span>
                        <span
                          className="info-box-number stat-number"
                          id="totalCount"
                        >
                          0
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box mb-3">
                      <span className="info-box-icon bg-gradient-red elevation-1">
                        <i className="fas fa-user-times"></i>
                      </span>
                      <div className="info-box-content">
                        <span className="info-box-text stat-text">
                          Un assigned accounts
                        </span>
                        <span
                          className="info-box-number stat-number"
                          id="totalUnassignedCount"
                        >
                          0
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box mb-3">
                      <span className="info-box-icon bg-gradient-yellow elevation-1">
                        <i className="fas fa-exclamation-triangle"></i>
                      </span>
                      <div className="info-box-content">
                        <span className="info-box-text stat-text">
                          Un processed accounts
                        </span>
                        <span
                          className="info-box-number stat-number"
                          id="unprocessedCount"
                        >
                          0
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="clearfix hidden-md-up"></div>

                  <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box mb-3">
                      <span className="info-box-icon bg-primary elevation-1">
                        <i className="fas fa-id-card"></i>
                      </span>
                      <div className="info-box-content">
                        <span className="info-box-text stat-text">
                          Processed accounts
                        </span>
                        <span
                          className="info-box-number stat-number"
                          id="processedCount"
                        >
                          0
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-3 col-6">
                    {/* <!-- small card --> */}
                    <div className="small-box bg-gradient-yellow">
                      <div className="inner">
                        <h3 id="openCount">0</h3>

                        <p>Open accounts</p>
                      </div>
                      <div className="icon">
                        <i className="fas fa-user"></i>
                      </div>
                    </div>
                  </div>
                  {/* <!-- ./col --> */}
                  <div className="col-lg-3 col-6">
                    {/* <!-- small card --> */}
                    <div className="small-box bg-gradient-green">
                      <div className="inner">
                        <h3 id="closeCount">0</h3>

                        <p>Closed accounts</p>
                      </div>
                      <div className="icon">
                        <i className="fas fa-archive"></i>
                      </div>
                    </div>
                  </div>
                  {/* <!-- ./col --> */}
                  <div className="col-lg-3 col-6">
                    {/* <!-- small card --> */}
                    <div className="small-box bg-gradient-blue">
                      <div className="inner">
                        <h3 id="normalisedCount">0</h3>

                        <p>Normalized accounts</p>
                      </div>
                      <div className="icon">
                        <i className="fas fa-thumbs-up"></i>
                      </div>
                    </div>
                  </div>
                  {/* <!-- ./col --> */}
                  <div className="col-lg-3 col-6">
                    {/* <!-- small card --> */}
                    <div className="small-box bg-gradient-red">
                      <div className="inner">
                        <h3 id="currentBucketCount">0</h3>
                        <p>Clean accounts</p>
                      </div>
                      <div className="icon">
                        <i className="fas fa-hourglass-half"></i>
                      </div>
                    </div>
                  </div>
                  {/* <!-- ./col --> */}
                </div>

                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <div className="card curved-card">
                      <div className="card-header border-0">
                        <div className="d-flex justify-content-between">
                          <h3 className="card-title">Per day live Graph</h3>
                          <p className="float-right">
                            <button
                              type="button"
                              className="btn btn-tool"
                              data-card-widget="collapse"
                            >
                              <i className="fas fa-minus"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-tool"
                              onClick="getPerdayLiveGraph()"
                            >
                              <i className="fas fa-sync-alt"></i>
                            </button>
                            <button
                              className="btn  btn-tool"
                              onClick="window.print()"
                            >
                              <i className="fas fa-download"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-tool"
                              data-card-widget="maximize"
                            >
                              <i className="fas fa-expand"></i>
                            </button>
                          </p>
                        </div>
                      </div>
                      <div className="card-body">
                        <h3
                          className="text-center"
                          id="perDayLiveGraphMessage"
                        ></h3>
                        <canvas
                          id="perDayLiveGraph"
                          style={{minHeight: "250px", height: "250px", maxHeight: "250px", maxWidth: "100%"}}
                        ></canvas>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-6">
                    <div className="card curved-card">
                      <div className="card-header border-0">
                        <h3 className="card-title">Disposition Graph</h3>
                        <p className="float-right">
                          <button
                            type="button"
                            className="btn btn-tool"
                            data-card-widget="collapse"
                          >
                            <i className="fas fa-minus"></i>
                          </button>
                          <button
                            type="button"
                            className="btn btn-tool"
                            onClick="getDispositionGraph()"
                          >
                            <i className="fas fa-sync-alt"></i>
                          </button>
                          <button
                            className="btn  btn-tool"
                            onClick="window.print()"
                          >
                            <i className="fas fa-download"></i>
                          </button>
                          <button
                            type="button"
                            className="btn btn-tool"
                            data-card-widget="maximize"
                          >
                            <i className="fas fa-expand"></i>
                          </button>
                        </p>
                      </div>
                      <div className="card-body">
                        <h3
                          className="text-center"
                          id="dispositionGraphMessage"
                        ></h3>
                        <canvas
                          id="dispositionChart"
                          style={{minHeight: "250px", height: "250px", maxHeight: "250px", maxWidth: "100%"}}
                        ></canvas>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm12 col-md-4">
                    <div className="card curved-card">
                      <div className="card-header border-0">
                        <div className="d-flex justify-content-between">
                          <h3 className="card-title lead">
                            Total collected accounts
                          </h3>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="d-flex">
                          <p className="d-flex flex-column">
                            <span className="text-bold text-lg">706</span>
                            <span>Total collected accounts</span>
                          </p>
                          <p className="ml-auto d-flex flex-column text-right">
                            <span className="text-success">
                              <i className="fas fa-arrow-up"></i> 12.5%
                            </span>
                            <span className="text-muted">Since last month</span>
                          </p>
                        </div>
                        {/* <!-- /.d-flex --> */}

                        <div className="position-relative mb-4">
                          <div className="chartjs-size-monitor">
                            <div className="chartjs-size-monitor-expand">
                              <div className=""></div>
                            </div>
                            <div className="chartjs-size-monitor-shrink">
                              <div className=""></div>
                            </div>
                          </div>
                          <canvas
                            id="visitors-chart"
                            height="200"
                            width="457"
                            style={{display: "block", width: "457px", height: "200px"}}
                            className="chartjs-render-monitor"
                          ></canvas>
                        </div>

                        <div className="d-flex flex-row justify-content-end">
                          <span className="mr-2">
                            <i className="fas fa-square text-primary"></i> This
                            Month
                          </span>

                          <span>
                            <i className="fas fa-square text-gray"></i> Last
                            Month
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-4">
                    <div className="card curved-card bg-gradient-blue">
                      <div className="card-header border-0">
                        <div className="d-flex justify-content-between">
                          <h3 className="card-title">Total collected amount</h3>
                          {/* <!-- <NavLink to="javascript:void(0);">View Report</NavLink> --> */}
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="d-flex">
                          <p className="d-flex flex-column">
                            <span className="text-bold text-lg">
                              USD 2,28,39,965
                            </span>
                            <span>Total collection</span>
                          </p>
                          <p className="ml-auto d-flex flex-column text-right">
                            <span className="text-white">
                              <i className="fas fa-arrow-up"></i> 10.1%
                            </span>
                            <span className="text-white">Since last month</span>
                          </p>
                        </div>
                        {/* <!-- /.d-flex --> */}

                        <div className="position-relative mb-4">
                          <div className="chartjs-size-monitor">
                            <div className="chartjs-size-monitor-expand">
                              <div className=""></div>
                            </div>
                            <div className="chartjs-size-monitor-shrink">
                              <div className=""></div>
                            </div>
                          </div>
                          <canvas
                            id="sales-chart"
                            height="200"
                            style={{display: "block", width: "457px", height: "200px"}}
                            className="chartjs-render-monitor"
                          ></canvas>
                        </div>

                        <div className="d-flex flex-row justify-content-end">
                          <span className="mr-2">
                            <i className="fas fa-square text-success"></i> This
                            month
                          </span>

                          <span>
                            <i className="fas fa-square text-white"></i> Last
                            month
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-4">
                    <div className="card curved-card">
                      <div className="card-header border-0">
                        <div className="d-flex justify-content-between">
                          <h3 className="card-title">
                            Team wise top performers
                          </h3>
                          {/* <!-- <NavLink to="javascript:void(0);">View Report</NavLink> --> */}
                        </div>
                      </div>
                      <div className="card-body table-responsive p-0">
                        <table className="table table-striped table-valign-middle">
                          <thead>
                            <tr>
                              <th>Agent</th>
                              <th>Amount</th>
                              <th>Account</th>
                              <th>Team</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Agent 5</td>
                              <td>USD 1170000</td>
                              <td>123</td>
                              <td>Team C</td>
                            </tr>

                            <tr>
                              <td>Agent 3</td>
                              <td>USD 260000</td>
                              <td>67</td>
                              <td>Team A</td>
                            </tr>

                            <tr>
                              <td>Agent 6</td>
                              <td>USD 126000</td>
                              <td>89</td>
                              <td>Team D</td>
                            </tr>

                            <tr>
                              <td>Agent 7</td>
                              <td>USD 26000</td>
                              <td>49</td>
                              <td>Team B</td>
                            </tr>

                            <tr>
                              <td>Agent 1</td>
                              <td>USD 147689</td>
                              <td>74</td>
                              <td>Team F</td>
                            </tr>

                            <tr>
                              <td>Agent 2</td>
                              <td>USD 37654</td>
                              <td>29</td>
                              <td>Team E</td>
                            </tr>

                            <tr>
                              <td>Agent 4</td>
                              <td>USD 49785</td>
                              <td>41</td>
                              <td>gteam</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm12 col-md-6">
                    <div className="card-deck">
                      <div className="card bg-gradient-navy-blue">
                        <div className="card-body">
                          <div className="mb-2">
                            <sup className="text-white">USD</sup>{" "}
                            <span className="h2 text-white">3,30,76,490</span>
                            <div className="text-light mt-2 text-sm">
                              Total outstanding amount
                            </div>
                            <div>
                              <span className="text-danger font-weight-600">
                                + 5%
                              </span>{" "}
                              <span className="text-light">
                                (from last month)
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="row">
                            <div className="col">
                              <small className="text-light">
                                Collected: 22839965
                              </small>
                              <div className="progress progress-xs my-2">
                                <div
                                  className="progress-bar bg-success"
                                  style={{width: "40%"}}
                                ></div>
                              </div>
                            </div>
                            <div className="col">
                              <small className="text-light">
                                Collection: 43%
                              </small>
                              <div className="progress progress-xs my-2">
                                <div
                                  className="progress-bar bg-warning"
                                  style={{width: "40%"}}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Username card --> */}
                      <div className="card bg-gradient-blue">
                        {/* <!-- Card body --> */}
                        <div className="card-body">
                          <div className="row justify-content-between align-items-center">
                            <div className="col">
                              <sup className="text-white"></sup>{" "}
                              <span className="h3 text-white">
                                Top performer
                              </span>
                            </div>
                            <div className="col-auto">
                              <span className="">
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </div>
                          <div className="my-4">
                            <span className="h6 surtitle text-light">
                              Total Collection
                            </span>
                            <div className="h1 text-white">11,70,000</div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <span className="h6 surtitle text-light">
                                Name
                              </span>
                              <span className="d-block h3 text-white">
                                Agent 5
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="card-deck">
                      <div className="card bg-gradient-red">
                        {/* <!-- Card body --> */}
                        <div className="card-body">
                          <div className="row justify-content-between align-items-center">
                            <div className="col">
                              <sup className="text-white"></sup>{" "}
                              <span className="h3 text-white">Top Team</span>
                            </div>
                            <div className="col-auto">
                              <span className="">
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </div>
                          <div className="my-4">
                            <span className="h6 surtitle text-light">
                              Total Collection
                            </span>
                            <div className="h1 text-white">32,62,852</div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <span className="h6 surtitle text-light">
                                Name
                              </span>
                              <span className="d-block h3 text-white">
                                Team C
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Username card --> */}
                      <div className="card bg-gradient-yellow">
                        {/* <!-- Card body --> */}
                        <div className="card-body">
                          <div className="row justify-content-between align-items-center">
                            <div className="col">
                              <sup className="text-white"></sup>{" "}
                              <span className="h3 text-white">Bucket</span>
                            </div>
                            <div className="col-auto">
                              <span className="">
                                <i
                                  className="fa fa-star text-primary"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </div>
                          <div className="my-4">
                            <span className="h6 surtitle text-light">
                              Total Collection
                            </span>
                            <div className="h1 text-white">97,000</div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <span className="h6 surtitle text-light">
                                Name
                              </span>
                              <span className="d-block h3 text-white">
                                BKT 1
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
    

       
    </>
  );
}

export default MainContent;
