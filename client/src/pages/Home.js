import styled from "styled-components";
import Header from "../components/Header";
import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";
import post from "../apis";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import About from "../components/About";

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
      <About />
      <Container>
        <Posts posts={posts} />
        <Sidebar />
      </Container>
    </>
  );
};

export default Home;
