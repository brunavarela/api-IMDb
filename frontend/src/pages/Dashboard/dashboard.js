import styled from "styled-components";

const primaryColor = "#F5C518";
const secondaryColor = "#fff";
const black = "#000";
const backgroundColor = "#121212";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
`;

export const Title = styled.h1`
  color: #fff;
`;

export const Content = styled.div`
  max-width: 1200px; /* Definindo uma largura máxima para o conteúdo */
  width: 100%;
  margin-top: 20px; /* Espaçamento superior */
  display: flex; /* Adicionando flexbox */
  justify-content: center; /* Centralizando horizontalmente */
`;

export const SubTitle = styled.h2`
  color: #fff;
  margin-bottom: 20px; /* Espaçamento inferior */
`;
