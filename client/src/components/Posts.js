import styled from "styled-components";
import Post from "./Post";

const Container = styled.section`
  flex: 9;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 1.25rem;
  justify-content: space-evenly;
`;

const Posts = () => {
  return (
    <Container>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Container>
  );
};

export default Posts;
