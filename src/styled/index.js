import styled from "styled-components";
export const FormWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  padding: 2vw;
  flex-direction: column;
  justify-content: center;
  width: 70vw;
  height: 70vh;
  border: solid;
  border-radius: 20px;
  font-size: 1.5vw;
  flex-wrap: wrap;
  margin: 20px;
`;
export const FormHeading = styled.h4`
  text-aligned: center;
`;
export const FormButton = styled.button`
  width: 20%;
  border: solid;
  border-radius: 10px;
  padding: 0.2vw;
  margin: 2vw;
`;

export const Form = styled.form`
  box-sizing: border-box;
  margin: 1vw;
  border: solid;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 1vw;
  align-items: center;
  height: 70%;
  input[type="text"] {
    padding: 0.2vw;
    margin: 0.5vw;
    background-color: grey;
    color: pink;
    border-radius: 10px;
    box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  }
`;
export const ShowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  margin: 1vw;
  font-size: 1.5vw;
  box-sizing: border-box;
  border: solid grey;
  border-radius: 5px;
`;

export const ShowHeading = styled.h4`
box-sizing:border-box;
color: blue;
width:100%;
background-color:grey;
border: solid:grey;
font-size: 1.1vw;
padding: 0.3vw;
`;

export const ShowOuterDiv = styled.div`
  box-sizing: border-box;
  padding: 2vw;
  display: flex;
  flex-direction: column;
`;
export const Label = styled.p`
  font-size: 1vw;
  font-weight: 500;
`;
export const Text = styled.div`
  font-size: 1vw;
`;
export const ShowFooter = styled(ShowHeading)`
  font-size: 0.9vw;
`;
