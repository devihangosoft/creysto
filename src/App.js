import React from "react";
import ResetPassword from "./components/Login/ResetPassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import MainContent from "./components/Sidebar/MainContent";
import CreateContact from "./components/Dashboard/CreateContact";
import LeadList from "./components/Dashboard/Leadlist/LeadList";
import Allocation from "./components/Dashboard/Allocation";
import SubTeamAllocation from "./components/Dashboard/SubTeamAllocation";
import ReportGenerator from "./components/Reports/ReportGenerator";
import GeneratedReports from "./components/Reports/GeneratedReports";
import SalesReports from "./components/Reports/SalesReports";
import CustomerProfile from "./components/Dashboard/CustomerProfile";
import Configuration from "./components/Configurations/Configuration";
import Signin from "./components/Login/Signin";
import Logout from "./components/Login/Logout";
import Register from "./components/Login/Register";
// import Adduser from "./components/UserConfig/Adduser";
import CreatePassword from "./components/Login/CreatePassword";
import MainContent from "./components/Dashboard/Dashboard";
import Modals from "./components/Elements/Modals";
import "./App.css";

import Users from "./components/Configurations/UserConfig/Users";
import Teams from "./components/Configurations/TeamsConfig/Teams";
import Fields from "./components/Configurations/FieldConfig/Fields";
import Dispositions from "./components/Configurations/DispositionsConfig/Dispositions";
import Emails from "./components/Configurations/EmailConfig/Emails";
import Sms from "./components/Configurations/SmsConfig/Sms";

import Layout from "./components/Layout/Layout";
import Transfer from "./components/Dashboard/Transfer";
import Temp from "./components/Login/Temp";
import OtpVerification from "./components/Login/OtpVerification";
//import Cards from "./components/DataTables/Card";
// import Accordions from "./components/Elements/Accordions";
// import CustomTabs from "./components/Elements/CustomTabs";
// import LeftSide from "./components/Login/LeftSide";

function App() {
  return (
    <div className="App">
      <Modals />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/otpverification" element={<OtpVerification />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/createPassword" element={<CreatePassword />} />
          <Route path="/logout" element={<Logout />} />
          <Route
            path="/dashboard"
            element={
              <Layout name="Dashboard">
                <MainContent/>
              </Layout>
            }
          />
          <Route
            path="/createContact"
            element={
              <Layout name="Create Contact">
                <CreateContact />
              </Layout>
            }
          />
          <Route
            path="/leadList"
            element={
              <Layout name="Lead List">
                <LeadList />
              </Layout>
            }
          />

          <Route
            path="/allocation"
            element={
              <Layout name="Allocation">
                <Allocation />
              </Layout>
            }
          />
          <Route
            path="/subteamallocation"
            element={
              <Layout name="Subteam Allocation">
                <SubTeamAllocation />
              </Layout>
            }
          />
          <Route
            path="/reportGenerator"
            element={
              <Layout name="Create new Report">
                <ReportGenerator />
              </Layout>
            }
          />
          <Route
            path="/generatedReports"
            element={
              <Layout name="Create Reports">
                <GeneratedReports />
              </Layout>
            }
          />
          <Route
            path="/salesReports"
            element={
              <Layout name="Sales Report">
                <SalesReports />
              </Layout>
            }
          />
          <Route
            path="/customerProfile"
            element={
              <Layout name="Customer Profile">
                <CustomerProfile />
              </Layout>
            }
          />
          <Route
            path="/configuration"
            element={
              <Layout name="Configuration">
                <Configuration />
              </Layout>
            }
          />
          <Route
            path="/users"
            element={
              <Layout name="Users List">
                <Users />
              </Layout>
            }
          />
          <Route
            path="/teams"
            element={
              <Layout name ="Team">
                <Teams />
              </Layout>
            }
          />
          <Route
            path="/fields"
            element={
              <Layout name="Fields">
                <Fields />
              </Layout>
            }
          />
          <Route
            path="/dispositions"
            element={
              <Layout name="Dispositions">
                <Dispositions />
              </Layout>
            }
          />
          <Route
            path="/emails"
            element={
              <Layout name="Emails">
                <Emails />
              </Layout>
            }
          />

          <Route
            path="/sms"
            element={
              <Layout name="SMS">
                <Sms />
              </Layout>
            }
          />

          <Route
            path="/transfer"
            element={
              <Layout name="Transfer Accounts">
                <Transfer />
              </Layout>
            }
          />

          <Route
            path="/temp"
            element={
              <Layout>
                <Temp />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
