import styled from "styled-components";

import Post from "./Post";

const Posts = ({ posts }) => {
  return (
    <Container>
      {posts.map((post) => {
        return <Post key={post._id} post={post} />;
      })}
    </Container>
  );
};

export default Posts;

const Container = styled.section`
  flex: 9;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 1.25rem;
  justify-content: space-evenly;
`;
