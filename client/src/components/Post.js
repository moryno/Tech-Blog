import styled from "styled-components";

const Container = styled.section``;

const Image = styled.img``;

const PostInfoContainer = styled.article``;

const Category = styled.article``;

const CategoryTitle = styled.span``;

const PostTitle = styled.span``;

const PostDate = styled.span``;

const Description = styled.p``;

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
