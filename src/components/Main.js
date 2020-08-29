import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddEmployee from "./AddEmployee";
import Navbar from "./Navbar";
import AddCompany from "./AddCompany";
import CompanyList from "./CompantList";
import EmployeeList from "./EmployeeList";
import { Provider } from "react-redux";
const Main = ({ store }) => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default Main;
