import React from "react";
import { ShowOuterDiv } from "./../styled";
import CompanyCard from "./CompanyCard";
import { connect } from "react-redux";
import uuid from "react-uuid";

const CompanyList = (props) => {
  return (
    <ShowOuterDiv>
      {props.companyList.map((item) => {
        return (
          <CompanyCard
            key={uuid()}
            companyName={item.companyName}
            address={item.address}
            revenue={item.revenue}
            phone={item.phone}
          ></CompanyCard>
        );
      })}
    </ShowOuterDiv>
  );
};

const mapStateToProps = (state) => {
  return { companyList: state.companyReducer };
};

export default connect(mapStateToProps)(CompanyList);
