import styled from "styled-components";

export const ContainerForm = styled.div`
  margin-bottom: 15px;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
`;

export const FormContact = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 200px;
  padding: 10px;
  border: 1px solid black;
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 200px;
  margin-bottom: 15px;
  border-radius: 4px;
  border: 2px solid #d3d3d3;
  height: 20px;
  outline: none;
  &:focus {
    border: 4px solid #87cefa;
  }
`;

export const Button = styled.button`
  width: 130px;
  height: 30px;
  font-weight: 400;
  font-size: 16px;
  cursor: pointer;
  margin-top: 15px;
  background-color: #ffffff;
  border-radius: 4px;
  border: 2px solid #d3d3d3;
  &:focus {
    background-color: #87cefa;
  }
`;
