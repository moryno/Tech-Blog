import styled from "styled-components";
import Header from "../components/Header";
import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";
import post from "../apis";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Container = styled.article`
  display: flex;
`;

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await post.get("/posts" + search);
      setPosts(data);
    };
    fetchData();
  }, [search]);

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
