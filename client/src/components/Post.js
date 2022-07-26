import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.section`
  width: 18rem;
  margin-bottom: 2.5rem;
`;

const Image = styled.img`
  width: 100%;
  height: 17.5rem;
  border-radius: 0.4375rem;
  object-fit: cover;
`;

const PostInfoContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Category = styled.article``;

const CategoryTitle = styled.span`
  font-family: "Varela Round", sans-serif;
  font-size: 0.6875rem;
  color: #be9656;
  line-height: 1.25rem;
  margin-top: 1rem;
  margin-right: 0.625rem;
  cursor: pointer;
`;

const PostTitle = styled.span`
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 1rem;
  cursor: pointer;
`;

const PostDate = styled.span`
  font-family: "Lora", serif;
  font-style: italic;
  font-size: 0.8125rem;
  color: #999;
  margin-top: 1rem;
`;

const Description = styled.p`
  font-family: "Varela Round", sans-serif;
  font-size: 0.875rem;
  color: #444;
  line-height: 1.5rem;
  margin-top: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

const Post = ({ post }) => {
  return (
    <Container>
      <Image src={post.photo} alt="postImage" />
      <PostInfoContainer>
        <Category>
          {post.category.map((cat, index) => (
            <CategoryTitle key={index}>{cat}</CategoryTitle>
          ))}
        </Category>
        <Link to={`/post/${post.id}`}>
          <PostTitle>{post.title}</PostTitle>
        </Link>
        <PostDate>{post.date}</PostDate>
      </PostInfoContainer>
      <Description>{post.desc}</Description>
    </Container>
  );
};

export default Post;
