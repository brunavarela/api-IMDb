import styled from "styled-components";

const primaryColor = "#F5C518";
const secondaryColor = "#fff";
const black = "#000";
const backgroundColor = "#121212";

export const DivHeader = styled.div`
  width: 100vw;
  height: 80px;
  display: flex;
  justify-content: center;
  background-color: ${primaryColor};
  color: ${black};
`;

export const DivTitle = styled.div`
  width: 50%;
  display: flex;
  justify-content: baseline;
  align-items: center;
  padding-left: 200px;
`;

export const DivContent = styled.div`
  width: 50%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding-right: 200px;
`;

export const DivInput = styled.div`
  display: flex;
  margin-left: 30px;
  padding-top: 17px;
  padding-bottom: 17px;
`;

export const Text = styled.div`
  color: ${black};
  font-size: 16px;
  font-weight: 600;
  padding: 10px 20px 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: #deb213;
    color: ${black};
    border-radius: 4px;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 600px;
  color: ${black};
`;

export const Input = styled.input`
  width: 250px;
  padding: 8px;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  background-color: ${backgroundColor};
  color: #fff;
`;

export const Button = styled.button`
  font-size: 18px;
  font-weight: 600;
  color: ${black};
  background-color: ${primaryColor};
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;

