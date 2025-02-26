import React, { useState, useRef, useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import LeftSideImage from "./LeftSideImage";
import { useNavigate, NavLink } from "react-router-dom";
import "./Signin.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import useAxios from "../hooks/useAxios";

function Register() {
  let navigate = useNavigate();
  let name = /^[a-zA-Z ]+$/;
  const SignupSchema = Yup.object().shape({
    firstname: Yup.string()
      .trim()
      .required("First name is required")
      .matches(name, "Enter only Alphabets"),
    lastname: Yup.string()
      .trim()
      .required("Last name is required")
      .matches(name, "Enter only Alphabets"),
    username: Yup.string()
      .trim()
      .required("Username is required")
      .min(3, "Username must be at least 3 characters")
      .max(20, "Username must not exceed 20 characters"),
    phone: Yup.string()
      .trim()
      .required("Phone number is required")
      .min(10, "Mobile number should be 10 digit")
      .max(10, "Mobile number should be 10 digit"),
    companyname: Yup.string().trim().required("Company name is required"),
    email: Yup.string()
      .trim()
      .required("Email is required")
      .email("Email is invalid"),
    password: Yup.string()
      .trim()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    cpassword: Yup.string()
      .trim()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
  });

  const initialValues = {
    firstname: "",
    lastname: "",
    username: "",
    companyname: "",
    phone: "",
    email: "",
    password: "",
    cpassword: "",
    planused: "",
    noofemployees: "",
  };

  const ref = useRef([]);
  const [passwordShown1, setPasswordShown1] = useState(false);

  const togglePasswordVisiblity1 = () => {
    setPasswordShown1(passwordShown1 ? false : true);
  };
  const [passwordShown2, setPasswordShown2] = useState(false);
  const togglePasswordVisiblity2 = () => {
    setPasswordShown2(passwordShown2 ? false : true);
  };
  const [message, setMessage] = useState("");
  const [successmessage, setSuccessmessage] = useState("");

  const [apiState, setapiState] = useState(0);
  const { response, loading, error } = useAxios({
    method: "post",
    url: "/registeruser",
    headers:{
      "Content-Type": "application/json",
      "api-key": "3d2bd7f8-406b-4ea3-9adc-fb38755f31c9",
    },
    body: JSON.stringify({
      // ref.current.values
      first_name: ref.current.values.firstname,
      last_name: ref.current.values.lastname,
      phone_number: ref.current.values.phone,
      email_address: ref.current.values.email,
      user_name: ref.current.values.username,
      password: ref.current.values.password,
      company_name: ref.current.values.companyname,
      plan_used: ref.current.values.planused,
      no_of_employees: ref.current.values.noofemployees,
    }),
    apiState: apiState,
  });

  useEffect(() => {
    if (response !== null) {
      console.log(response);
      setSuccessmessage(response.message);
      setTimeout(() => {
        navigate("/login");
      }, 5000);
    }

    const resMessage =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    setMessage(resMessage);
    setTimeout(() => {
      setMessage("");
    }, 5000);
  }, [response, error]);

  const handleRegister = (e) => {
    // e.preventDefault();
    setapiState(apiState + 1);
  };

  const handleRegister1 = async (e) => {
    console.log(ref.current.values);
    let postData = JSON.stringify({
      // ref.current.values
      first_name: ref.current.values.firstname,
      last_name: ref.current.values.lastname,
      phone_number: ref.current.values.phone,
      email_address: ref.current.values.email,
      user_name: ref.current.values.username,
      password: ref.current.values.password,
      company_name: ref.current.values.companyname,
      plan_used: ref.current.values.planused,
      no_of_employees: ref.current.values.noofemployees,
    });

    console.log(postData);
    try {
      //const response =
      await axios
        .post("http://216.48.182.12:5000/registeruser", postData, {
          headers: {
            "Content-Type": "application/json",
            "api-key": "3d2bd7f8-406b-4ea3-9adc-fb38755f31c9",
          },
        })
        .then((response) => {
          console.log(response.data);
          setSuccessmessage(response.data.message);

          setTimeout(() => {
            navigate("/login");
          }, 5000);
        });
    } catch (error) {
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      setTimeout(() => {
        setMessage("");
      }, 5000);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-7 b-center bg-size">
            <LeftSideImage />
          </div>
          <div className="col-md-5 p-0">
            <div className="login-card">
              <div>
                <div className="text-center">
                  <Header />
                </div>
                <div className="login-main">
                  <Formik
                    initialValues={initialValues}
                    validationSchema={SignupSchema}
                    onSubmit={handleRegister}
                    innerRef={ref}
                  >
                    {({ errors, touched }) => (
                      <Form className="theme-form">
                        <h4>Create your account</h4>
                        <p>Enter your personal details to create account</p>
                        {/* <div className="form-group">
                      <label className="col-form-label">User Name</label>
                      <Field
                        className="form-control"
                        type="text"
                        required
                        name="username"
                        value={username}
                        onChange={onHandleUsername}
                        placeholder="User name"
                      />
                    </div> */}
                        <div className="form-group">
                          <div className="row g-2">
                            <div className="col-6">
                              <label className="col-form-label">
                                User Name
                              </label>
                              <Field
                                className="form-control"
                                type="text"
                                name="username"
                                placeholder="User name"
                              />
                              <ErrorMessage
                                name="username"
                                component="div"
                                className="text-danger"
                              />
                            </div>
                            <div className="col-6">
                              <label className="col-form-label">
                                Company Name
                              </label>
                              <Field
                                className="form-control"
                                type="text"
                                name="companyname"
                                placeholder="Company name"
                              />
                              <ErrorMessage
                                name="companyname"
                                component="div"
                                className="text-danger"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row g-2">
                            <div className="col-6">
                              <label className="col-form-label pt-0">
                                First Name
                              </label>
                              <Field
                                className="form-control"
                                type="text"
                                name="firstname"
                                placeholder="First name"
                                pattern="[a-zA-Z]+"
                              />
                              <ErrorMessage
                                name="firstname"
                                component="div"
                                className="text-danger"
                              />
                            </div>
                            <div className="col-6">
                              <label className="col-form-label pt-0">
                                Last Name
                              </label>
                              <Field
                                className="form-control"
                                type="text"
                                name="lastname"
                                placeholder="Last name"
                              />
                              <ErrorMessage
                                name="lastname"
                                component="div"
                                className="text-danger"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="row g-2">
                            <div className="col-6">
                              <label className="col-form-label">
                                Phone Number
                              </label>
                              <Field
                                className="form-control"
                                type="number"
                                name="phone"
                                placeholder="9898 XXXXXX"
                                // onChange={e => {
                                //   e.preventDefault();
                                //   const { value } = e.target;
                                //   const regex = /^(0*[1-9][0-9]*(\.[0-9]*)?|0*\.[0-9]*[1-9][0-9]*)$/;
                                //   if (regex.test(value.toString())) {
                                //     setFieldValue("rank", value);
                                //   }
                                // }}
                              />
                              <ErrorMessage
                                name="phone"
                                component="div"
                                className="text-danger"
                              />
                            </div>
                            <div className="col-6">
                              <label className="col-form-label">
                                Email Address
                              </label>
                              <Field
                                className="form-control"
                                type="email"
                                name="email"
                                placeholder="Test@gmail.com"
                              />
                              <ErrorMessage
                                name="email"
                                component="div"
                                className="text-danger"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="row g-2">
                            <div className="col-6">
                              <label className="col-form-label pt-0">
                                Plan Used
                              </label>
                              <Field
                                className="form-control"
                                type="text"
                                name="planused"
                                placeholder="Plan name"
                              />
                              <ErrorMessage
                                name="planused"
                                component="div"
                                className="text-danger"
                              />
                            </div>
                            <div className="col-6">
                              <label className="col-form-label pt-0">
                                No of employees
                              </label>
                              <Field
                                className="form-control"
                                type="number"
                                name="noofemployees"
                                placeholder="XX"
                              />
                              <ErrorMessage
                                name="noofemployees"
                                component="div"
                                className="text-danger"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="row g-2">
                            <div className="col-12">
                              <label className="col-form-label">
                                New Password
                              </label>
                              <div className="form-Field position-relative">
                                <Field
                                  className="form-control"
                                  type={passwordShown1 ? "text" : "password"}
                                  name="password"
                                  placeholder="*********"
                                />
                                <ErrorMessage
                                  name="password"
                                  component="div"
                                  className="text-danger"
                                />
                                <div className="show-hide">
                                  <span
                                    onClick={togglePasswordVisiblity1}
                                    className="show"
                                  ></span>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 mt-3">
                              <label className="col-form-label">
                                Retype Password
                              </label>
                              <div className="form-Field position-relative">
                                <Field
                                  className="form-control"
                                  type={passwordShown2 ? "text" : "password"}
                                  name="cpassword"
                                  placeholder="*********"
                                />
                                <ErrorMessage
                                  name="cpassword"
                                  component="div"
                                  className="text-danger"
                                />
                                <div className="show-hide">
                                  <span
                                    onClick={togglePasswordVisiblity2}
                                    className="show"
                                  ></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group mt-5 mb-0">
                          <button
                            className="btn btn-primary btn-block w-100"
                            type="submit"
                          >
                            Create Account
                          </button>
                        </div>
                        <div className="form-group mt-5 mb-0">
                          {message && (
                            <div className="form-group">
                              <div className="alert alert-danger" role="alert">
                                {message}
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="form-group mt-5 mb-0">
                          {successmessage && (
                            <div className="form-group">
                              <div className="alert alert-success" role="alert">
                                {successmessage}
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                          <div className="border-bottom w-100 ml-5"></div>
                          <span className="px-2 small text-muted font-weight-bold text-muted">
                            OR
                          </span>
                          <div className="border-bottom w-100 mr-5"></div>
                        </div>

                        <p className="mt-4 mb-0 text-center">
                          Already have an account?{" "}
                          <NavLink
                            to="/login"
                            className="ms-2"
                            href="login.html"
                          >
                            {" "}
                            Sign in
                          </NavLink>
                        </p>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
