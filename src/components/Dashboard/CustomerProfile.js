import React from "react";
import { NavLink } from "react-router-dom";
import Modal from "../Reports/Modal";
import * as Icon from "react-feather"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
function CustomerProfile() {
  return (
    <>
      {/* <!-- Main content --> */}
      <section className="customer-profile content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              {/* <!-- Profile Image --> */}
              <div className="card card-primary card-outline">
                <div className="card-body box-profile">
                  <div className="text-center ">
                    <img src="./images/profile.png" class="img-fluid" />
                  </div>
                  <h6
                    className="profile-username text-center"
                    id="customer-Name"
                  >
                    User Name
                  </h6>

                  {/* <p className="text-muted text-center">
                        <small>
                          <p><span>Last updated:</span></p>
                          <span
                            className="description"
                            id="tradeline_update"
                          > 29-07-22 09:30 AM
                          </span>
                          </small>
                        </p> */}
                  <p className="text-center icons-group">
                    <div className="icons text-success">
                      <Icon.PhoneCall />
                    </div>
                    <div className="icons text-info">
                      <Icon.Mail />
                    </div>
                    <div className="icons text-warning">
                      <Icon.MessageCircle />
                    </div>
                    <div className="icons text-danger">
                      <Icon.Calendar />
                    </div>
                    <div className="icons text-primary">
                      <Icon.RefreshCcw />
                    </div>

                  </p>
                  <ul className="list-group list-group-unbordered mb-3">
                    <li className="list-group-item">

                      <p> <span>
                        <Icon.Phone /> Phone
                      </span>
                      </p>
                      <NavLink
                        to="/"

                        onClick="callOtherNumber($(this).text())"
                        id="customer-PhoneNo"
                      >
                        9876543210
                      </NavLink>

                    </li>
                    <li className="list-group-item">
                      <p><span><Icon.Mail />
                        Email Address</span></p>
                      <NavLink
                        to="/"

                        id="customer-Email"
                      >
                        abc@xyz.com
                      </NavLink>
                    </li>
                    <li className="list-group-item">
                      <p><span>
                        <Icon.Calendar />
                        Date of Birth (Age)</span></p>
                      <NavLink
                        to="/"

                        id="customer-DOB"
                      >
                        28-05-93
                      </NavLink>
                    </li>
                    <li className="list-group-item">
                      <p><span>
                        <Icon.User />
                        Employment Type</span></p>
                      <NavLink
                        to="/"

                        id="customer-EmploymentType"
                      >Self Employed</NavLink>
                    </li>
                    <li className="list-group-item">
                      <p>
                        <Icon.Briefcase />
                        <span>Business Name</span></p>
                      <NavLink
                        to="/"

                        id="customer-Company"
                      >
                        XYZ
                      </NavLink>
                    </li>
                    <li className="list-group-item">
                      <p>     <Icon.Info /><span>Industry Type</span></p>
                      <NavLink
                        to="/"

                        id="customer-Industry"
                      >Privatae</NavLink>
                    </li>
                    <li className="list-group-item">
                      <p>
                        <Icon.MapPin />
                        <span>City</span></p>
                      <NavLink
                        to="/"

                        id="customer-City"
                      >Blore</NavLink>
                    </li>
                    <li className="list-group-item">
                      <p>
                        <Icon.Map />
                        <span>State</span></p>
                      <NavLink
                        to="/"

                        id="customer-State"
                      >
                        KA
                      </NavLink>
                    </li>
                    <li className="list-group-item">
                      <label htmlFor="dispositionCode">
                        Disposition Code
                      </label>
                      <select
                        name="Disposition_Code"
                        id="dispositionCode"
                        className="form-control"
                        onChange="dispositionChange()"
                      ></select>
                    </li>
                    <li className="list-group-item">
                      <label htmlFor="subDispositionCode">
                        Sub-Disposition Code
                      </label>
                      <select
                        name="Sub-Disposition_Code"
                        id="subDispositionCode"
                        className="form-control"
                      // disabled="true"
                      >
                        <option value="">Select sub disposition</option>
                      </select>
                    </li>
                    <li className="list-group-item">
                      <label htmlFor="comments">Additional Text</label>
                      <textarea
                        type="text"
                        name="Comments"
                        id="comments"
                        className="form-control"
                        placeholder="Additional Text"
                      ></textarea>
                    </li>
                    <li className="list-group-item">
                      <label htmlFor="Promise_to_Pay_Date">
                        Promise to Pay Date
                      </label>
                      <input
                        type="date"
                        name="Promise_to_Pay_Date"
                        id="promiseToPayDate"
                        className="form-control"
                      />
                    </li>
                  </ul>
                </div>
                <div className="card-footer">
                  <div className="row">
                    <div className="col-12">
                      <div className="button-group ">
                        <button
                          type="button"
                          className="btn btn-danger mr-3"
                          onClick="window.history.back();"
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick="updateCustomerInfo()"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- /.col --> */}
            <div className="col-md-8">
              <div className="card">
                <div className="card-header p-2">
                <Tabs className="customTabs col-md-12 p-0">
    <TabList>
      <Tab>Basic Info</Tab>
      <Tab>Additional Numbers</Tab>
      <Tab>Addresses</Tab>
      <Tab>Documents </Tab>
      <Tab>Logs </Tab>
    </TabList>

    <TabPanel>

    </TabPanel>
    <TabPanel>
  
    </TabPanel>
  </Tabs>
 
                </div>
                {/* <!-- /.card-header --> */}
                <div className="card-body">
                  <div className="tab-content">
                    <div className="active tab-pane" id="basicinfo-tab">
                      {/* <!-- tradelineinfo --> */}
                      <div className="row">
                        <div className="col-sm-6">
                          <p>
                            CvLan: <span id="cvLan"></span>
                          </p>
                        </div>
                        <div className="col-sm-6 ">
                          <p className="text-muted float-right">
                            <p><span>Last updated:</span></p>
                            <span
                              className="description"
                              id="tradeline_update"
                            ></span>
                            <span>
                              &nbsp;&nbsp;
                              <NavLink
                                to="/"
                                className=""
                                onClick="updateTradeline()"
                                title="Update tradeline info"
                              >
                                <i className="fas fa  fa-sync-alt text-primary"></i>
                                Refresh
                              </NavLink>
                            </span>
                          </p>
                        </div>
                      </div>

                      {/* <!-- product details --> */}
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="card">
                            <div className="card-body">
                              <div className="row">
                                <div className="col-sm-6 col-md-3 col-lg-3">
                                  <p>
                                    <p><span>Product Type</span></p>
                                    <NavLink
                                      to="/"

                                      id="basic-producttype"
                                    ></NavLink>
                                  </p>
                                </div>

                                <div className="col-sm-6 col-md-4 col-lg-4">
                                  <p>
                                    <p><span>Account Status</span></p>
                                    <NavLink
                                      to="/"

                                      id="basic-accountstatus"
                                    ></NavLink>
                                  </p>
                                </div>
                                <div className="col-sm-6 col-md-5 col-lg-5">
                                  <p>
                                    <p><span>Loan Account Number</span></p>
                                    <NavLink
                                      to="/"
                                      className="float-right text-green"
                                      id="basic-lan"
                                    ></NavLink>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* <!-- Overdue details --> */}
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="card">
                            <div className="card-header bg-gray">
                              <h3 className="card-title">
                                Overdue Details
                              </h3>
                              <span >
                                <p><span>Overdue status</span></p>
                                <span id="overdue-Current_Status">-</span>
                              </span>
                            </div>
                            <div className="card-body p-0">
                              <div className="table-responsive">
                                <table className="table table-borderless">
                                  <tr>
                                    <th className="text-left">
                                      <p><span>Total Overdue</span></p>
                                    </th>
                                    <td id="overdue-totaloverdue"></td>
                                    <th className="text-left">
                                      <p><span>EMI Overdue</span></p>
                                    </th>
                                    <td id="overdue-emioverdue"></td>
                                  </tr>
                                  <tr>
                                    <th className="text-left">
                                      <p><span>Bounce Overdue</span></p>
                                    </th>
                                    <td id="overdue-bounceoverdue"></td>
                                    <th className="text-left">
                                      <p><span>Penal Overdue</span></p>
                                    </th>
                                    <td id="overdue-penaloverdue"></td>
                                  </tr>
                                  <tr>
                                    <th className="text-left">
                                      <p><span>Opening Bucket</span></p>
                                    </th>
                                    <td id="overdue-openingbucket"></td>
                                    <th className="text-left">
                                      <p><span>Current Bucket</span></p>
                                    </th>
                                    <td id="overdue-currentbucket"></td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* <!-- Product details --> */}
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="card">
                            <div className="card-header bg-gray">
                              <h3 className="card-title">
                                Product Details
                              </h3>
                            </div>
                            <div className="card-body p-0">
                              <div className="table-responsive">
                                <table className="table table-borderless">
                                  <tr>
                                    <th className="text-left">
                                      <p><span>Originated From</span></p>
                                    </th>
                                    <td id="product-distributorName"></td>
                                    <th className="text-left">
                                      <p><span>Lending Partner</span></p>
                                    </th>
                                    <td id="product-lenderName"></td>
                                  </tr>
                                  <tr>
                                    <th className="text-left">
                                      <p><span>Loan Amount</span></p>
                                    </th>
                                    <td id="product-loanamount"></td>
                                    <th className="text-left">
                                      <p><span>Loan Sanction Date</span></p>
                                    </th>
                                    <td id="product-loansanctiondate"></td>
                                  </tr>
                                  <tr>
                                    <th className="text-left">
                                      <p><span>Tenure</span></p>
                                    </th>
                                    <td id="product-tenure"></td>
                                    <th className="text-left">
                                      <p><span>EMI</span></p>
                                    </th>
                                    <td id="product-emiAmount"></td>
                                  </tr>
                                  <tr>
                                    <th className="text-left">
                                      <p><span>Rate of Interest</span></p>
                                    </th>
                                    <td id="product-roi"></td>
                                    <th className="text-left">
                                      <p><span>Repayment Date</span></p>
                                    </th>
                                    <td id="product-repaymentDate"></td>
                                  </tr>
                                  <tr>
                                    <th className="text-left">
                                      <p><span>NACH Account Number</span></p>
                                    </th>
                                    <td id="product-accNo"></td>
                                    <th className="text-left">
                                      <p><span>NACH Bank Name</span></p>
                                    </th>
                                    <td id="product-bankname"></td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* <!-- previous payment details --> */}
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="card">
                            <div className="card-header bg-gray">
                              <h3 className="card-title">
                                Previous Payment Details
                              </h3>
                            </div>
                            <div className="card-body p-0">
                              <div className="table-responsive">
                                <table className="table table-borderless">
                                  <tr>
                                    <th className="text-left">
                                      <p><span>Total Outstanding Amount</span></p>
                                    </th>
                                    <td id="payment-principalOutstanding"></td>
                                    <th className="text-left">
                                      <p><span>Last Paid Date</span></p>
                                    </th>
                                    <td id="payment-lastPaymentDate"></td>
                                  </tr>
                                  <tr>
                                    <th className="text-left">
                                      <p><span>EMIs Paid</span></p>
                                    </th>
                                    <td id="payment-numberOfInstallmentsPaid"></td>
                                    <th className="text-left">
                                      <p><span>Last Paid Amount</span></p>
                                    </th>
                                    <td id="payment-lastPaidAmount"></td>
                                  </tr>
                                  <tr>
                                    <th className="text-left">
                                      <p><span>EMIs Due</span></p>
                                    </th>
                                    <td id="payment-emisdue"></td>
                                    <th className="text-left">
                                      <p><span>Paid From</span></p>
                                    </th>
                                    <td id="payment-lastpaidsource"></td>
                                  </tr>
                                </table>
                              </div>
                              <div className="card-body table-responsive">
                                <p>
                                  <p><span>Previous Payment History</span></p>
                                </p>
                                <table
                                  className="table table-striped table-bordered"
                                  id="paymentHistoryTable"
                                ></table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="activity-tab">
                      <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-3">
                          <select
                            name=""
                            id="logDateFilter"
                            className="form-control"
                            onChange="logFilterChange()"
                          >
                            <option value="">Filter By Date</option>
                          </select>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                          <select
                            name=""
                            id="logStatusFilter"
                            className="form-control"
                            onChange="logFilterChange()"
                          >
                            <option value="">Filter By Status</option>
                          </select>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                          <select
                            name=""
                            id="logAgentFilter"
                            className="form-control"
                            onChange="logFilterChange()"
                          >
                            <option value="">Filter By Agent</option>
                          </select>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                          <select
                            name=""
                            id="logChannelFilter"
                            className="form-control"
                            onChange="logFilterChange()"
                          >
                            <option value="">Filter By Channel</option>
                            <option value="Calling">Calling</option>
                            <option value="Payment">Payment</option>
                          </select>
                        </div>
                      </div>
                      <br />
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="table-responsive">
                            <table
                              className="table table-bordered table-striped"
                              id="logTable"
                            ></table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="additionalInfo-tab">
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="card">
                            <div className="card-header">
                              <h3 className="card-title text-muted">
                                Last updated on :
                                <span
                                  id="additionalInfo_update"
                                  className="description"
                                ></span>
                              </h3>
                              <div className="card-tools">
                                <button
                                  type="button"
                                  className="btn btn-tool text-primary"
                                  title="update contact info"
                                  data-toggle="modal"
                                  data-target="#"
                                >
                                  <i className="fas fa  fa-sync-alt text-primary"></i>
                                  Refresh
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="card card-outline card-primary collapsed-card">
                            <div className="card-header">
                              <h3 className="card-title">
                                Work / Bureau numbers
                              </h3>

                              <div className="card-tools">
                                <button
                                  type="button"
                                  className="btn btn-tool"
                                  data-card-widget="collapse"
                                  data-toggle="tooltip"
                                  title="Collapse"
                                >
                                  <i className="fas fa  fa-plus"></i>
                                </button>
                              </div>
                            </div>
                            <div className="card-body table-responsive p-0">
                              <table
                                id="workTable"
                                className="table table-hover"
                              ></table>
                            </div>
                            {/* <!-- /.card-body --> */}
                          </div>
                          {/* <!-- /.card --> */}
                        </div>
                        <div className="col-md-6">
                          <div className="card card-outline card-secondary collapsed-card">
                            <div className="card-header">
                              <h3 className="card-title">
                                Additional phone numbers
                              </h3>

                              <div className="card-tools">
                                <button
                                  type="button"
                                  className="btn btn-tool text-primary"
                                  title="additonal phone"
                                  data-toggle="modal"
                                  data-target="#newphone-modal"
                                >
                                  Add
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-tool"
                                  data-card-widget="collapse"
                                  data-toggle="tooltip"
                                  title="Collapse"
                                >
                                  <i className="fas fa  fa-plus"></i>
                                </button>
                              </div>
                            </div>
                            <div className="card-body table-responsive p-0">
                              <table
                                id="addPhnTable"
                                className="table table-hover"
                              ></table>
                            </div>
                            {/* <!-- /.card-body --> */}
                          </div>
                          {/* <!-- /.card --> */}
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12">
                          <div className="card card-outline card-info collapsed-card">
                            <div className="card-header">
                              <h3 className="card-title">
                                reference Info
                              </h3>

                              <div className="card-tools">
                                {/* <!-- <button type="button" className="btn btn-tool" title="additonal email" data-toggle="modal" data-target="#newContact-modal"><i className="fas fa  fa-plus"></i></button> --> */}
                                <button
                                  type="button"
                                  className="btn btn-tool"
                                  data-card-widget="collapse"
                                  data-toggle="tooltip"
                                  title="Collapse"
                                >
                                  <i className="fas fa  fa-plus"></i>
                                </button>
                              </div>
                            </div>
                            <div className="card-body">
                              <div className="table-responsive">
                                <table
                                  id="referenceTable"
                                  className="table table-condensed table-hover"
                                ></table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="address-tab">
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="card">
                            <div className="card-header">
                              <h3 className="card-title text-muted">
                                Last updated on :
                                <span
                                  id="additionalInfo_address_update"
                                  className="description "
                                ></span>
                              </h3>
                              <div className="card-tools">
                                <button
                                  type="button"
                                  className="btn btn-tool text-primary"
                                  title="update contact info"
                                  data-toggle="modal"
                                  data-target="#"
                                >
                                  <i className="fas fa  fa-sync-alt text-primary"></i>
                                  Refresh
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="card">
                            <div className="card-header">
                              <h3 className="card-title">
                                Additional addresses
                              </h3>

                              <div className="card-tools">
                                <button
                                  type="button"
                                  className="btn btn-tool"
                                  data-card-widget="collapse"
                                  data-toggle="tooltip"
                                  title="Collapse"
                                >
                                  <i className="fas fa  fa-minus"></i>
                                </button>
                              </div>
                            </div>
                            <div className="card-body">
                              <div
                                className="row"
                                id="additionalAddressContainer"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="activity-tab">
                      <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-3">
                          <select
                            name=""
                            id="logDateFilter"
                            className="form-control"
                            onChange="logFilterChange()"
                          >
                            <option value="">Filter By Date</option>
                          </select>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                          <select
                            name=""
                            id="logStatusFilter"
                            className="form-control"
                            onChange="logFilterChange()"
                          >
                            <option value="">Filter By Status</option>
                          </select>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                          <select
                            name=""
                            id="logAgentFilter"
                            className="form-control"
                            onChange="logFilterChange()"
                          >
                            <option value="">Filter By Agent</option>
                          </select>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                          <select
                            name=""
                            id="logChannelFilter"
                            className="form-control"
                            onChange="logFilterChange()"
                          >
                            <option value="">Filter By Channel</option>
                            <option value="Calling">Calling</option>
                            <option value="Payment">Payment</option>
                          </select>
                        </div>
                      </div>
                      <br />
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="table-responsive">
                            <table
                              className="table table-bordered table-striped"
                              id="logTable"
                            ></table>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Document tab --> */}
                    <div className="tab-pane" id="documents-tab">
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="card">
                            <div className="card-header">
                              <h3 className="card-title text-muted">
                                Last updated on :
                                <span
                                  id="additionalInfo_update_documents"
                                  className="description"
                                ></span>
                              </h3>
                              <div className="card-tools">
                                <button
                                  type="button"
                                  className="btn btn-tool text-primary"
                                  title="update contact info"
                                  data-toggle="modal"
                                  data-target="#"
                                >
                                  <i className="fas fa  fa-sync-alt text-primary"></i>
                                  Refresh
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="card">
                            <div className="card-body">
                              <div className="table-responsive">
                                <table
                                  id="docTable"
                                  className="table table-striped"
                                >
                                  <tr>
                                    <th>Document Name</th>
                                    <th>As of Date</th>
                                    <th>Preview</th>
                                  </tr>
                                  <tr>
                                    <td>Pan card</td>
                                    <td className="asofdate"></td>
                                    <td>
                                      <NavLink
                                        to="/"
                                        onClick="openDoc('Pan_card_01.jpeg')"
                                      >
                                        Click here
                                      </NavLink>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Aadhar card</td>
                                    <td className="asofdate"></td>
                                    <td>
                                      <NavLink
                                        to="/"
                                        onClick="openDoc('aadhar-card2.jpg')"
                                      >
                                        Click here
                                      </NavLink>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Bank Statement</td>
                                    <td className="asofdate"></td>
                                    <td>
                                      <NavLink
                                        to="/"
                                        onClick="openDoc('sample.pdf')"
                                      >
                                        Click here
                                      </NavLink>
                                    </td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal />

    </>
  );
}

export default CustomerProfile;
