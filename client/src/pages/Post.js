import styled from "styled-components";

const Container = styled.section`
  flex: 9;
`;

const Wrapper = styled.article`
  padding: 20px;
  padding-right: 0;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 5px;
  object-fit: cover;
`;

const PostTitle = styled.h1`
  text-align: center;
  margin: 10px;
  font-family: "Lora", serif;
  font-size: 26px;
`;

const PostEdit = styled.article`
  float: right;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;

  cursor: pointer;
`;

const PostInfo = styled.article`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  font-family: "Varela Round", sans-serif;
  font-size: 16px;
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

const Post = () => {
  return (
    <Container>
      <Wrapper>
        <Image
          src="https://www.gizmodo.com.au/wp-content/uploads/sites/2/2021/11/04/league-of-legends-arcane.jpg?quality=80&resize=1280,720"
          alt="postImg"
        />
        <PostInput />
        <PostTitle>
          The Witcher
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
            <AuthorName>John Doe</AuthorName>
          </PostAuthor>
          <Date>15th Feb 2021</Date>
        </PostInfo>
        <Content />
        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Description>
        <Button> Update </Button>
      </Wrapper>
    </Container>
  );
};

export default Post;
