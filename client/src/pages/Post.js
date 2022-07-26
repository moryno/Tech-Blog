import styled from "styled-components";

const Container = styled.section`
  width: 288px;
  margin: 0px 25px 40px 25px;
`;

const Image = styled.img`
  width: 100%;
  height: 280px;
  border-radius: 7px;
  object-fit: cover;
`;

const PostInfo = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostCatategoryContainer = styled.article``;

const PostCategory = styled.span`
  font-family: "Varela Round", sans-serif;
  font-size: 11px;
  color: #be9656;
  line-height: 20px;
  margin-top: 15px;
  margin-right: 10px;
  cursor: pointer;
`;

const Hr = styled.hr``;

const PostTitle = styled.span`
  font-family: "Josefin Sans", sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin-top: 15px;
  cursor: pointer;
`;

const Date = styled.span`
  font-family: "Lora", serif;
  font-style: italic;
  font-size: 13px;
  color: #999;
  margin-top: 15px;
`;

const Description = styled.p`
  font-family: "Varela Round", sans-serif;
  font-size: 14px;
  color: #444;
  line-height: 24px;
  margin-top: 15px;
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
        src="https://www.gizmodo.com.au/wp-content/uploads/sites/2/2021/11/04/league-of-legends-arcane.jpg?quality=80&resize=1280,720"
        alt="catImg"
      />
      <PostInfo>
        <PostCatategoryContainer>
          <PostCategory> Music </PostCategory>
        </PostCatategoryContainer>
        <PostTitle> The Witcher </PostTitle>
        <Hr />
        <Date>15 Feb 2021</Date>
      </PostInfo>
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
