import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  border-radius: 8px;
  background-color: #f0f0f0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  color: #0076ff;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
