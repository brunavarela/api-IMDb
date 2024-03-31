import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LoginContainer,
  LoginForm,
  FormGroup,
  Label,
  Input,
  Button,
  Title,
} from "./login";
import axios from "axios";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/users/login", {
        email,
        password,
      });
      const data = response.data;
      console.log("Token:", data.token);
      navigate("/dashboard");
    } catch (error) {
      console.error("Erro no login:", error);
      setError("Email ou senha inválidos.");
    }
  };
  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <Title>IMDB-API</Title>
        <FormGroup>
          <Label>Email:</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Senha:</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormGroup>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Button type="submit">Entrar</Button>
      </LoginForm>
    </LoginContainer>
  );
};
