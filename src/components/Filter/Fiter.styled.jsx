import styled from "styled-components";

export const TitleFilter = styled.h2`
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const InputFilter = styled.input`
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
