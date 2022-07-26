import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Post from "./Post";

const Container = styled.article`
  display: flex;
`;

const Posts = () => {
  return (
    <Container>
      <Post />
      <Sidebar />
    </Container>
  );
};

export default Posts;
