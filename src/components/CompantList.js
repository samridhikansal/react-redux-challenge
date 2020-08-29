import React from "react";
import { ShowOuterDiv } from "./../styled";
import CompanyCard from "./CompanyCard";

const CompanyList = () => {
  return (
    <ShowOuterDiv>
      <CompanyCard
        companyName="Amazom"
        address="strre no.1 , city xyz, Country , pin"
        revenue="100 crores"
        phone="987678899877"
      ></CompanyCard>
      <CompanyCard
        companyName="HCL"
        address="strre no.2 , city xyz, Country , pin"
        revenue="100 crores"
        phone="987678899877"
      ></CompanyCard>
    </ShowOuterDiv>
  );
};

export default CompanyList;
