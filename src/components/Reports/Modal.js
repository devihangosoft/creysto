import React from "react";
import { NavLink } from "react-router-dom";
function CustomerProfile() {
  return (
    <>
      <div className="modal fade" id="callback-modal">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Set call back</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label for="customerFirstName">Date</label>
                    <input
                      type="date"
                      className="form-control"
                      id="callBackDate"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label for="customerLastName">Time</label>
                    <input
                      type="time"
                      className="form-control"
                      id="callBackTime"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer justify-content-between">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick="setCallback()"
              >
                Set call back
              </button>
            </div>
          </div>
          {/* <!-- /.modal-content --> */}
        </div>
        {/* <!-- /.modal-dialog --> */}
      </div>

      <div className="modal fade" id="newphone-modal">
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add additional phone</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form action="" id="additionalPhoneForm">
                <div className="form-group">
                  <label for="customerLastName">Phone</label>
                  <input
                    type="number"
                    className="form-control"
                    id="newAdditionalnumber"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer justify-content-between">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick="addNewCusNo()"
              >
                Add
              </button>
            </div>
          </div>
          {/* <!-- /.modal-content --> */}
        </div>
        {/* <!-- /.modal-dialog --> */}
      </div>

      <div className="modal fade" id="dialer-modal">
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Call customer</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form action="">
                <div className="form-group">
                  <label for="customerLastName">Phone</label>
                  <input
                    type="number"
                    className="form-control"
                    id="callToNumber"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer justify-content-between">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick="call()"
              >
                Call
              </button>
            </div>
          </div>
          {/* <!-- /.modal-content --> */}
        </div>
        {/* <!-- /.modal-dialog --> */}
      </div>

      <div className="modal fade" id="sms-modal">
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Send sms to customer</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form action="">
                <div className="form-group">
                  <label for="customerLastName">Phone Number</label>
                  <input
                    type="number"
                    className="form-control"
                    id="smsToNumber"
                  />
                </div>
                <div className="form-group">
                  <label for="customerLastName">Template</label>
                  <select
                    name=""
                    id="sms-template"
                    className="form-control"
                    onchange="smstemplateChange()"
                  >
                    <option value="">Select template</option>
                    <option value="Template 1">Template 1</option>
                    <option value="Template 2">Template 2</option>
                    <option value="Template 3">Template 3</option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="customerLastName">Message</label>
                  <textarea
                    name=""
                    id="smsMessage"
                    cols="30"
                    className="form-control"
                    rows="5"
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer justify-content-between">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick="sendSms()"
              >
                Send
              </button>
            </div>
          </div>
          {/* <!-- /.modal-content --> */}
        </div>
        {/* <!-- /.modal-dialog --> */}
      </div>

      <div className="modal fade" id="email-modal">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Send email</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form action="">
                <div className="row">
                  <div className="col-sm-12">
                    <label for="mergeLeadTo">To</label>
                    <input
                      type="email"
                      name="mergeLeadFrom"
                      id="mailToEmail"
                      className="form-control"
                      placeholder="To:"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-12">
                    <label for="bcc">Cc</label>
                    <input
                      type="text"
                      name="bcc"
                      id="mailTocc"
                      className="form-control"
                      placeholder="Cc"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-12">
                    <label for="mergeLeadFrom">Template</label>
                    <select
                      name=""
                      id="mailtemplate"
                      className="form-control"
                      onchange="emailTemplateChange()"
                    >
                      <option value="">Select template</option>
                      <option value="Blank">Blank</option>
                      <option value="Payment Reminder Mail - 1">
                        Payment Reminder Mail - 1
                      </option>
                      <option value="Payment Reminder Mail - 2">
                        Payment Reminder Mail - 2
                      </option>
                      <option value="Bounce Case">Bounce Case</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <label for="mergeLeadTo">Subject</label>
                    <input
                      type="text"
                      name="mergeLeadFrom"
                      id="mailToSubject"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <label for="">Saluation</label>
                    <input
                      type="text"
                      id="mailSalutation"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <label for="mergeLeadFrom">Email body</label>
                    <textarea
                      name=""
                      id="mailbody"
                      cols="30"
                      rows="10"
                      className="form-control"
                    ></textarea>
                  </div>
                </div>
                <div
                  className="row"
                  id="visitDetailsContainer"
                  style={{ display: "none" }}
                >
                  <div className="col-sm-12">
                    <label for="">LAN #</label>
                    <input type="text" id="mailLan" className="form-control" />
                  </div>

                  <div className="col-sm-12">
                    <label for="">Name</label>
                    <input type="text" id="mailName" className="form-control" />
                  </div>
                  <div className="col-sm-12">
                    <label for="">Date</label>
                    <input type="date" id="mailDate" className="form-control" />
                  </div>
                  <div className="col-sm-12">
                    <label for="">Amount</label>
                    <input
                      type="text"
                      id="mailAmount"
                      className="form-control"
                    />
                  </div>
                  <div className="col-sm-12">
                    <label for="">Sales executive</label>
                    <input
                      type="text"
                      id="mailSales"
                      className="form-control"
                    />
                  </div>
                  <div className="col-sm-12">
                    <label for="">Visit Feedback</label>
                    <input
                      type="text"
                      id="mailFeedback"
                      className="form-control"
                    />
                  </div>
                </div>
                {/* <!-- <div className="row" id="instituteContainer" style={{display: "none"}}>
 <div className="col-sm-12">
   <label for="">Institute</label>
   <input type="text" id="mailInstitute" className="form-control">
 </div>

 <div className="col-sm-12">
   <label for="">Student</label>
   <input type="text" id="mailStudent" className="form-control">
 </div>
</div> --> */}
                <div
                  className="row"
                  id="cusTableContainer"
                  style={{ display: "none" }}
                >
                  <label for="">customer data</label>
                  <div className="card-body table-responsive">
                    <table
                      id="customerDataTable"
                      className="table table-valign-middle table-condensed"
                    >
                      <thead>
                        <tr>
                          <th>Loan Account #</th>
                          <th>Pending Emi Amount</th>
                          <th>Delay Charges</th>
                          <th>Bounce Charges</th>
                          <th>Total Payable Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td id="lantd"></td>
                          <td>
                            <input
                              type="text"
                              id="pentd"
                              name="pentd"
                              value=""
                            />
                          </td>
                          <td id="">
                            <input
                              type="text"
                              id="deltd"
                              name="deltd"
                              value=""
                            />
                          </td>
                          <td id="">
                            <input
                              type="text"
                              id="bountd"
                              name="bountd"
                              value=""
                            />
                          </td>
                          <td id="">
                            <input
                              type="text"
                              id="totaltd"
                              name="totaltd"
                              value=""
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <label for="">Notes</label>
                    <textarea
                      id="mailNotes"
                      className="form-control"
                      cols="30"
                      rows="5"
                    ></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <label for="">signature</label>
                    <textarea
                      id="mailSignature"
                      className="form-control"
                      cols="30"
                      rows="5"
                    ></textarea>
                  </div>
                </div>
              </form>
              <br />
              <div className="row">
                <div className="col-sm-12">
                  <button
                    type="button"
                    className="btn btn-primary float-right"
                    id=""
                    onClick="previewEmail()"
                  >
                    Preview
                  </button>
                </div>
              </div>
              <br />
              <div id="previewDiv" style={{ display: "none" }}>
                <div className="row">
                  <div className="col-sm-12">
                    <h3 className="text-center">Email Preview</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <p id="preview-subject"></p>
                    <p id="preview-salutation"></p>
                    <p id="preview-body"></p>
                    <div id="previewVisitContainer" style={{ display: "none" }}>
                      <ul style={{ listStyleType: "none" }}>
                        <li>
                          LAN # <span id="preview-lan"></span>
                        </li>
                        <li>
                          Name: <span id="preview-name"></span>
                        </li>
                        <li>
                          Date: <span id="preview-date"></span>
                        </li>
                        <li>
                          Amount: <span id="preview-amount"></span>
                        </li>
                        <li>
                          Sales executive: <span id="preview-sales"></span>
                        </li>
                        <li>
                          Visit Feedback: <span id="preview-feedback"></span>
                        </li>
                      </ul>
                    </div>
                    <div id="previewCusContainer" style={{ display: "none" }}>
                      <p>Summary:</p>

                      <div className="table-responsive">
                        <table
                          id="preview-Table"
                          className="table table-valign-middle table-condensed"
                        >
                          <thead>
                            <tr>
                              <th>Loan Account #</th>
                              <th>Pending Emi Amount</th>
                              <th>Delay Charges</th>
                              <th>Bounce Charges</th>
                              <th>Total Payable Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td id="preview-lantd"></td>
                              <td id="preview-pentd"></td>
                              <td id="preview-deltd"></td>
                              <td id="preview-boutd"></td>
                              <td id="preview-totaltd"></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p>Payment options. (UPI/BANK TRANSFER)</p>
                      {/* <!-- <img src="/static/dist/img/neevfinanceqr.jpg" alt="" className="img-fluid"> --> */}
                      <br />
                      <p>Bank Details.</p>
                      <br />
                      <div className="table-responsive">
                        <table
                          id="preview-bankTable"
                          className="table table-valign-middle table-condensed"
                        >
                          <thead>
                            <tr>
                              <th>Beneficiary Name</th>
                              <th>Bank Name</th>
                              <th>Bank Branch</th>
                              <th>A/c No</th>
                              <th>IFSC Code</th>
                              <th>Account Type</th>
                            </tr>
                          </thead>
                          <tbody>
                            <td>CREDIT PVT LTD</td>
                            <td>ABC BANK</td>
                            <td>Bangalore</td>
                            <td>5020003184099090</td>
                            <td>ABC0000460</td>
                            <td>CA</td>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p id="preview-notes"></p>
                    <p id="preview-signature"></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer justify-content-between">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                id="sendEmailButton"
                onClick="sendEmail()"
              >
                Send
              </button>
            </div>
          </div>
          {/* <!-- /.modal-content --> */}
        </div>
        {/* <!-- /.modal-dialog --> */}
      </div>

      <div className="modal fade" id="newContact-modal">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add new reference</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label for="newContactName">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="newContactName"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <label for="newContactName">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="newContactEmail"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <label for="newContactName">Phone</label>
                <input
                  type="number"
                  className="form-control"
                  id="newContactPhone"
                  placeholder="Phone number"
                />
              </div>
            </div>
            <div className="modal-footer justify-content-between">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Create
              </button>
            </div>
          </div>
          {/* <!-- /.modal-content --> */}
        </div>
        {/* <!-- /.modal-dialog --> */}
      </div>

      <div className="modal fade" id="referenceModal">
        <div className="modal-dialog modal-lg" style={{ maxWidth: "90rem" }}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                Reference details <span id="Refid"></span>
              </h5>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-4">
                    <form>
                      <div className="col-sm-12">
                        <div className="form-group bmd-form-group is-filled field">
                          <label className="">
                            Contact Name
                            <span
                              className="fieldspan"
                              data-toggle="tooltip"
                              title="Accepts alphabets(a-z & A-Z)"
                            >
                              &nbsp;&#9432;
                            </span>
                          </label>
                          <input
                            type="text"
                            name="Refname"
                            id="Refname"
                            className="form-control"
                            onkeypress="return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)  || (event.charCode == 32)"
                            disabled
                          />
                        </div>
                      </div>

                      <div className="col-sm-12">
                        <div className="form-group field">
                          <label className="bmd-label-floating" for="Refphone">
                            Contact Number
                            <span
                              className="fieldspan"
                              data-toggle="tooltip"
                              title="Accepts only Numeric values(0-9)"
                            >
                              &nbsp;&#9432;
                            </span>
                          </label>
                          <input
                            type="number"
                            name="Refphone"
                            className="form-control"
                            id="Refphone"
                            disabled
                          />
                        </div>
                      </div>

                      <div className="col-sm-12">
                        <div className="form-group bmd-form-group is-filled field">
                          <label className="">
                            PriorityType
                            <span
                              className="fieldspan"
                              data-toggle="tooltip"
                              title="Accepts alphabets(a-z & A-Z)"
                            >
                              &nbsp;&#9432;
                            </span>
                          </label>
                          <input
                            type="text"
                            name="RefPriorityType"
                            id="RefPriorityType"
                            className="form-control"
                            onkeypress="return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)  || (event.charCode == 32)"
                            disabled
                          />
                        </div>
                      </div>

                      <div className="col-sm-12">
                        <div className="form-group bmd-form-group is-filled field">
                          <label className="">
                            Relationship
                            <span
                              className="fieldspan"
                              data-toggle="tooltip"
                              title="Accepts alphabets(a-z & A-Z)"
                            >
                              &nbsp;&#9432;
                            </span>
                          </label>
                          <input
                            type="text"
                            name="RefRelationship"
                            id="RefRelationship"
                            className="form-control"
                            onkeypress="return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)  || (event.charCode == 32)"
                            disabled
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-sm-4">
                    <div className="col-sm-12">
                      <div className="form-group bmd-form-group is-filled field">
                        <label className="">
                          Contact Priority
                          <span
                            className="fieldspan"
                            data-toggle="tooltip"
                            title="Accepts alphabets(a-z & A-Z)"
                          >
                            &nbsp;&#9432;
                          </span>
                        </label>
                        <input
                          type="text"
                          name="RefCpriority"
                          id="RefCpriority"
                          className="form-control"
                          onkeypress="return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)  || (event.charCode == 32)"
                          disabled
                        />
                      </div>
                    </div>

                    <div className="col-sm-12">
                      <div className="form-group bmd-form-group is-filled field">
                        <label className="">
                          IsFamilyContact
                          <span
                            className="fieldspan"
                            data-toggle="tooltip"
                            title="Accepts alphabets(a-z & A-Z)"
                          >
                            &nbsp;&#9432;
                          </span>
                        </label>
                        <input
                          type="text"
                          name="RefIsFamilyContact"
                          id="RefIsFamilyContact"
                          className="form-control"
                          onkeypress="return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)  || (event.charCode == 32)"
                          disabled
                        />
                      </div>
                    </div>

                    <div className="col-sm-12">
                      <div className="form-group bmd-form-group is-filled field">
                        <label
                          for="Disposition_Code"
                          className="bmd-label-static"
                        >
                          Disposition Code
                        </label>
                        <select
                          name="Disposition_Code"
                          id="RefdispositionCode"
                          className="form-control"
                          onchange="refDispositionChange()"
                        >
                          <option value="select">Select disposition</option>
                          <option value="LM - Left Message">
                            LM - Left Message
                          </option>
                          <option value="BHF - Will pay on behalf">
                            BHF - Will pay on behalf
                          </option>
                          <option value="RTA - Refuse to Acknowledge">
                            RTA - Refuse to Acknowledge
                          </option>
                          <option value="RNR - Ringing">RNR - Ringing</option>
                          <option value="BSY - Busy">BSY - Busy</option>
                          <option value="DSC - Disconnected">
                            DSC - Disconnected
                          </option>
                          <option value="OON - Out of Network">
                            OON - Out of Network
                          </option>
                          <option value="OTH - Others">OTH - Others</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group bmd-form-group is-filled field">
                        <label className="" for="Comments">
                          Comments
                          <span
                            className="fieldspan"
                            data-toggle="tooltip"
                            title="Accepts alpha-numeric values(A-z,0-9) and special characters(!#$%&*+,-./:;<=>?@[\]^_`{|}~)"
                          >
                            &nbsp;&#9432;
                          </span>
                        </label>
                        <textarea
                          type="text"
                          name="Comments"
                          id="Refcomments"
                          className="form-control"
                          disabled="true"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div id="reflogs" className="logs"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick="processRef()"
              >
                save
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="previewmodal">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Document preview</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div id="fileViewer" style={{ minHeight: "500px" }}></div>
            </div>
            <div className="modal-footer justify-content-between">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
          {/* <!-- /.modal-content --> */}
        </div>
        {/* <!-- /.modal-dialog --> */}
      </div>

      {/* <!-- /.content --> */}

      <NavLink
        id="back-to-top"
        to="/"
        className="btn btn-primary back-to-top"
        role="button"
        aria-label="Scroll to top"
      >
        <i className="fas fa-chevron-up"></i>
      </NavLink>

      <div className="modal fade" id="paymentAlertModal">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Payment Alerts</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-sm-12 table-responsive">
                  <table id="paymentAlertTable" className="table"></table>
                </div>
              </div>
            </div>
            <div className="modal-footer justify-content-between">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick="clearAllPaymentalerts()"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerProfile;
