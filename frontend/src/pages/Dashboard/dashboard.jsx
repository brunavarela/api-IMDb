import { Container, Content, SubTitle } from "./dashboard";
import { ListMovies } from "../../components/ListMovies/listMovies.jsx";
import { Header } from "../../components/Header/header.jsx";

export const Dashboard = () => {
  return (
    <Container>
      <Header></Header>
      <Content>
        <ListMovies />
      </Content>
    </Container>
  );
};
