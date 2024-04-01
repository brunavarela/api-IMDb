import styled from "styled-components";

const primaryColor = "#F5C518";
const secondaryColor = "#fff";
const black = "#000";
const backgroundColor = "#121212";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${black};
`;

export const Title = styled.h1`
  text-align: center;
  color: ${primaryColor};
  font-size: 32px;
`;

export const LoginForm = styled.form`
  width: 300px;
  padding: 20px;
  border-radius: 8px;
  background-color: ${backgroundColor};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
  padding-right: 19px;
`;

export const Label = styled.label`
  color: ${secondaryColor};
`;

export const Input = styled.input`
  margin-top: 8px;
  width: 100%;
  padding: 8px;
  border: 1px solid #fff;
  border-radius: 4px;
  font-size: 16px;
  color: #000;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: ${primaryColor};
  color: ${black};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #deb213;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;
