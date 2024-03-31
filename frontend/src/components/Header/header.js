import styled from "styled-components";

const primaryColor = "#F5C518";
const secondaryColor = "#fff";
const black = "#000";
const backgroundColor = "#121212";

export const DivHeader = styled.div`
  height: 64px;
  width: 100vw;
  padding: 20px;
  background-color: ${primaryColor};
  color: ${black};
`;

export const Icon = styled.span`
  font-size: 14px;
  color: ${primaryColor};
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;
