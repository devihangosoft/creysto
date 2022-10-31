import React from "react";
import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";
import * as Icon from "react-feather";
function CreateContact() {
  return (
    <>
        <div className="py-4">
          <div className="row">
            <div className="col-6">

            </div>
            <div className="col-6">
              <button
                class="btn btn-primary float-right mt-2"
                variant="primary"
              >
                Reset Account
              </button>
            </div>
          </div>
        </div>

        <section className="content">
          <div className="row d-flex align-items-stretch">
            <div className="col-12 col-sm-6 col-md-3 d-flex align-items-stretch">
              <Card className="mb-4">
                <Card.Body>
                  <img
                    src="./images/tradeline.png"
                    alt=""
                    className="img-fluid"
                  />
                  <Card.Title> Tradeline info api </Card.Title>
                  <Card.Text>
                    Run tradeline info API to update all your accounts
                    Overdue,bucket,current status etc.
                  </Card.Text>
                  <NavLink to="/" className="btn btn-md btn-primary">
                Run   <Icon.ArrowRight/> 
                  </NavLink>
                </Card.Body>
              </Card>
            </div>

            <div className="col-12 col-sm-6 col-md-3 d-flex align-items-stretch">
              <Card className="mb-4">
                <Card.Body>
                  <img
                    src="./images/contacts.png"
                    alt=""
                    className="img-fluid"
                  />
                  <Card.Title> Contact info api</Card.Title>
                  <Card.Text>
                    Run contact info API to update all your accounts
                    reference,additional numbers,adddresses etc.
                  </Card.Text>
                  <NavLink to="/" className="btn btn-md btn-info">
                     Run <Icon.ArrowRight/> 
                  </NavLink>
                </Card.Body>
              </Card>
            </div>

            {/* <div className="col-12 col-sm-6 col-md-3 d-flex align-items-stretch">
              <Card className="mb-4">
                <Card.Body>
                  <img src="./images/reset.png" alt="" className="img-fluid" />
                  <Card.Title> Reset Accounts</Card.Title>
                  <Card.Text>
                    Reset Account allocations.This action cannot be undone.
                  </Card.Text>
                  <NavLink to="/" className="btn btn-sm btn-danger">
                    <i className="fa fa-cogs"></i> Reset
                  </NavLink>
                </Card.Body>
              </Card>
            </div> */}

            <div className="col-12 col-md-6 col-sm-12">
            <Card className="mb-4">
                <Card.Body>
                  <Card.Title className="mb-5"> Upload File</Card.Title>
                  <Card.Text>
                  <form
                    action="/upload_file"
                    method="POST"
                    enctype="multipart/form-data"
                  >
                    <div className="row">
                      <div className="col-12 col-sm-12">
                        <div className="form-group">
                          <label for="uploadType">Upload type</label>
                          <select
                            name="uploadType"
                            id="uploadType"
                            className="form-control"
                          >
                            <option selected="true" disabled="">
                              Select upload type
                            </option>
                            <option value="accounts">Accounts data</option>
                            <option value="reference">Reference data</option>
                            <option value="payment">Payment data</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12  col-sm-12">
                        <div className="form-group">
                          <label for="leadsfile">Choose File</label>
                          <div className="input-group">
                            <div className="custom-file">
                              <input
                                type="file"
                                className="custom-file-input"
                                name="leadsfile"
                                id="leadsfile"
                              />
                              <label
                                className="custom-file-label"
                                for="leadsfile"
                              >
                                Choose file
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <button
                            type="button"
                            className="btn btn-block btn-outline-primary btn-sm"
                            onclick="downloadSampleFile()"
                          >
                            <i className="fas fa-inbox"></i> Download Sample
                            format
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="card-body">
                      <div className="text-right">
                        <button
                          type="submit"
                          className="btn btn-lg btn-primary"
                        >
                        <Icon.Upload/> Upload
                        </button>
                      </div>
                    </div>
                  </form>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </section>
    </>
  );
}

export default CreateContact;
