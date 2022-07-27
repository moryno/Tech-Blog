import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import posts from "../apis";

const Container = styled.section`
  flex: 9;
`;

const Wrapper = styled.article`
  padding: 1.25rem;
  padding-right: 0;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  height: 25rem;
  border-radius: 0.3125rem;
  object-fit: cover;
`;

const PostTitle = styled.h1`
  text-align: center;
  margin: 0.625rem;
  font-family: "Lora", serif;
  font-size: 1.625rem;
`;

const PostEdit = styled.article`
  float: right;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.625rem;

  cursor: pointer;
`;

const PostInfo = styled.article`
  margin-bottom: 1.25rem;
  display: flex;
  justify-content: space-between;
  font-family: "Varela Round", sans-serif;
  font-size: 1rem;
  color: #b39656;
`;

const PostAuthor = styled.span``;

const AuthorName = styled.b`
  cursor: pointer;
`;

const Date = styled.span``;

const Content = styled.textarea`
  font-size: 18px;
  line-height: 1.5;
  border: none;
  border-bottom: 1px solid lightgray;
  color: gray;
  &:focus {
    outline: none;
  }
`;

const Description = styled.p`
  color: #666;
  font-size: 18px;
  line-height: 1.5;
  &::first-letter {
    margin-left: 20px;
    font-size: 30px;
    font-weight: 600;
  }
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  width: 100px;
  color: white;
  background-color: teal;
  border: none;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  margin-top: 20px;
  align-self: flex-end;
`;

const PostInput = styled.input`
  margin: 10px;
  font-family: "Lora", serif;
  font-size: 26px;
  border: none;
  border-bottom: 1px solid lightgray;
  color: grey;
  text-align: center;
  &:focus {
    outline: none;
  }
`;

const Post = ({ users }) => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await posts.get(`/posts/${postId}`);
      setPost(data);
    };
    fetchData();
  }, [postId]);

  return (
    <Container>
      <Wrapper>
        <Image src={post.photo} alt="postImg" />
        <PostInput />
        <PostTitle>
          {post.title}

          <PostEdit>
            <Icon>
              <i className="singlePostIcon far fa-edit"></i>
            </Icon>
            <Icon>
              <i className="singlePostIcon far fa-trash-alt"></i>
            </Icon>
          </PostEdit>
        </PostTitle>
        <PostInfo>
          <PostAuthor>
            Author:
            <Link to={`/?user=${post.author}`}>
              <AuthorName>{post.author}</AuthorName>
            </Link>
          </PostAuthor>
          <Date>{post.date}</Date>
        </PostInfo>
        <Content />
        <Description>{post.desc}</Description>
        <Button> Update </Button>
      </Wrapper>
    </Container>
  );
};

export default Post;
