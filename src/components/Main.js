import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddEmployee from "./AddEmployee";
import Navbar from "./Navbar";
import AddCompany from "./AddCompany";
import CompanyList from "./CompantList";
import EmployeeList from "./EmployeeList";
const Main = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <AddEmployee></AddEmployee>
        </Route>
        <Route path="/addcompanies">
          <AddCompany />
        </Route>
        <Route path="/showcompanies">
          <CompanyList></CompanyList>
        </Route>
        <Route path="/showemployees">
          <EmployeeList></EmployeeList>
        </Route>
      </Switch>
    </Router>
  );
};

export default Main;
