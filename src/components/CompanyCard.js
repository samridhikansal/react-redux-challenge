import React from "react";
import { ShowHeading, ShowWrapper, ShowFooter, Label, Text } from "./../styled";
import { Link } from "react-router-dom";

const CompanyCard = ({ companyName, address, revenue, phone }) => {
  return (
    <ShowWrapper>
      <ShowHeading>{companyName}</ShowHeading>
      <div style={{ boxSizing: "border-box", margin: "1vw" }}>
        <Label> Address</Label>
        <Text>{address}</Text>
        <Label> Revenue</Label>
        <Text>{revenue}</Text>
        <Label> Phone no.</Label>
        <Text>{phone}</Text>
      </div>
      <ShowFooter>
        {" "}
        <Link> company overview</Link>
      </ShowFooter>
    </ShowWrapper>
  );
};

export default CompanyCard;
