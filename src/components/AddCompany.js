import React from "react";
import { FormWrapper, FormButton, Form, FormHeading } from "./../styled";
const AddCompany = () => {
  return (
    <FormWrapper>
      <FormHeading> Add Company</FormHeading>
      {/* <Form style={{ display: "flex", flexDirection: "column" }}> */}
      <Form>
        <label for="name">Enter the name of the company</label>
        <input type="text"></input>
        <label for="contact">Enter the Phone number of the company</label>
        <input type="text"></input>
        <label for="address">Enter the address of the company</label>
        <input type="text"></input>
        <FormButton>Save</FormButton>
        {/* </form> */}
      </Form>
    </FormWrapper>
    //   style={{
    //     display: "flex",
    //     padding: "2vw",
    //     flexDirection: "column",
    //     justifyContent: "center",
    //     width: "70vw",
    //     height: "70vh",
    //     border: "solid",
    //     borderRadius: "20px",
    //   }}
  );
};

export default AddCompany;
