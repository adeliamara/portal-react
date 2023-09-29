import styled from "styled-components";

export const FormContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center; 
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
  width: 80%;

  input, input[type="submit"] {
    margin-bottom: 15px;
    padding: 15px;
    width: calc(100% - 30px); 
    font-size: 18px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  input {
    background-color: #ffffff;
  }

  input[type="submit"] {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 5px 10px;
    margin-right: 10px;
    cursor: pointer;
  }

  input[type="submit"]:hover {
    background-color: #0056b3;
  }
`;

export const InlineItems = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%; 
`;
