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

const Posts = ({ posts }) => {
  return (
    <Container>
      {posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </Container>
  );
};

export default Posts;
