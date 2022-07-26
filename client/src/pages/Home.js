import styled from "styled-components";
import Header from "../components/Header";
import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";
import post from "../apis";
import { useEffect, useState } from "react";

const Container = styled.article`
  display: flex;
`;

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await post.get("/posts");
      setPosts(data);
    };
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <Container>
        <Posts posts={posts} />
        <Sidebar />
      </Container>
    </>
  );
};

export default Home;
