import styled from "styled-components";

const Container = styled.section`
  width: 18rem;
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

const Post = () => {
  return (
    <Container>
      <Image
        src="https://wallpapersmug.com/download/1366x768/a91749/jinx-arcane-artwork.jpg"
        alt="postImage"
      />
      <PostInfoContainer>
        <Category>
          <CategoryTitle>Music</CategoryTitle>
          <CategoryTitle>Life</CategoryTitle>
        </Category>
        <PostTitle>Star Trek </PostTitle>
        <PostDate>15th Feb 2022</PostDate>
      </PostInfoContainer>
      <Description>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Description>
    </Container>
  );
};

export default Post;
