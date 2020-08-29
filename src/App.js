import React from "react";
import AddEmployee from "./components/AddEmployee";
import AddCompany from "./components/AddCompany";
import CompanyList from "./components/CompantList";
import CompanyCard from "./components/CompanyCard";

function App() {
  return (
    <div className="App">
      {" "}
      <AddEmployee />
      <AddCompany />
      <CompanyCard companyName="Amazon" />
    </div>
  );
}

export default App;
