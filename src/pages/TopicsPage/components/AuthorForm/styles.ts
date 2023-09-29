import React, { useState } from "react";
import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 300px;
  margin: 0 auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;

  input,
  button {
    margin-bottom: 10px;
    padding: 10px;
    width: 100%;
    font-size: 16px;
  }

  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;