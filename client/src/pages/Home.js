import styled from "styled-components";
import Header from "../components/Header";
import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";

const Container = styled.article`
  display: flex;
`;

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Posts />
        <Sidebar />
      </Container>
    </>
  );
};

export default Home;
