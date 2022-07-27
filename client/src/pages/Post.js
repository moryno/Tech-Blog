import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import posts from "../apis";
import { UserContext } from "../context/Context";

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
  &:first-child {
    color: teal;
  }
  &:last-child {
    color: tomato;
  }
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

const Description = styled.p`
  color: #666;
  font-size: 1.125rem;
  line-height: 1.5;
  &::first-letter {
    margin-left: 1.25rem;
    font-size: 1.875rem;
    font-weight: 600;
  }
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  width: 6.25rem;
  color: white;
  background-color: teal;
  border: none;
  border-radius: 0.3125rem;
  padding: 0.3125rem;
  cursor: pointer;
  margin-top: 1.25rem;
  align-self: flex-end;
`;

const PostInput = styled.input`
  margin: 0.625rem;
  font-family: "Lora", serif;
  font-size: 1.625rem;
  border: none;
  border-bottom: 1px solid lightgray;
  color: grey;
  text-align: center;
  &:focus {
    outline: none;
  }
`;

const Content = styled.textarea`
  font-size: 1.125rem;
  line-height: 1.5;
  border: none;
  border-bottom: 1px solid lightgray;
  color: gray;
  text-align: center;
  &:focus {
    outline: none;
  }
`;

const Post = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [updateMode, setUpdateMode] = useState(false);
  const { user } = useContext(UserContext);
  const [inputs, setInputs] = useState({
    title: "",
    desc: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await posts.get(`/posts/${postId}`);
      setPost(data);
    };
    fetchData();
  }, [postId]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };
  const handleUpdate = async () => {
    try {
      await posts.patch(`/posts/${postId}`, {
        author: user.username,
        title: inputs.title,
        desc: inputs.desc,
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      await posts.delete(`/posts/${postId}`);
      window.location.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Image src={post.photo} alt="postImg" />
        {updateMode ? (
          <PostInput
            onChange={handleChange}
            name="title"
            value={inputs.title}
            placeholder="Title"
          />
        ) : (
          <PostTitle>
            {post.title}
            {post.author === user?.username && (
              <PostEdit>
                <Icon>
                  <i
                    className="singlePostIcon far fa-edit"
                    onClick={() => setUpdateMode(true)}
                  ></i>
                </Icon>
                <Icon>
                  <i
                    className="singlePostIcon far fa-trash-alt"
                    onClick={handleDelete}
                  ></i>
                </Icon>
              </PostEdit>
            )}
          </PostTitle>
        )}

        <PostInfo>
          <PostAuthor>
            Author:
            <Link to={`/?user=${post.author}`}>
              <AuthorName>{post.author}</AuthorName>
            </Link>
          </PostAuthor>
          <Date>{post.date}</Date>
        </PostInfo>

        {updateMode ? (
          <Content
            onChange={handleChange}
            name="desc"
            value={inputs.desc}
            placeholder="Content"
          />
        ) : (
          <Description>{post.desc}</Description>
        )}
        {updateMode && <Button onClick={handleUpdate}> Update </Button>}
      </Wrapper>
    </Container>
  );
};

export default Post;
