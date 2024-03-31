import { Container, Title, Content, SubTitle } from "./dashboard";
import { ListMovies } from "../../components/ListMovies/listMovies.jsx";

export const Dashboard = () => {
  return (
    <Container>
      <Content>
        <ListMovies />
      </Content>
    </Container>
  );
};
