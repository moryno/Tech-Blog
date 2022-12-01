import styled from "styled-components";

const Container = styled.section`
  flex: 9;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 2rem;
`;

const Wrapper = styled.article`
  width: 50%;
  margin: auto;
`;

const SubTitle = styled.h4`
  font-family: "Varela Round", sans-serif;
  font-weight: 500;
  color: #be9656;
`;

const Title = styled.h1`
  font-family: "Lora", serif;
  margin-top: 1rem;
  font-size: 1.5rem;
`;

const Hr = styled.hr`
  width: 7%;
  margin: auto;

  margin-top: 1rem;
`;

const Description = styled.p`
  font-family: "Varela Round", sans-serif;
  font-size: 0.975rem;

  color: #444;
  line-height: 1.5rem;
  margin-top: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;

  -webkit-box-orient: vertical;
`;

const About = () => {
  return (
    <Container id="about">
      <Wrapper>
        <SubTitle>WEB / ANDROID</SubTitle>
        <Title>About this site</Title>
        <Hr />
        <Description>
          As student developers, we’re often asked to share what learn during
          our developing journey. To keep documentations in form of blogs and
          after every projects we do we should submit a blog about the project
          and our development process . I’ve developed this website in response
          to that request. Here, I've a create a space where my fellow students
          and Moringa faculty could post their blogs. It provides them with
          tools to write, edit, upload and share their thoughts and creativity.
          Visitors to the website would be able to see different posts from
          different authors and learn from them. Everything on this site is free
          for you to use and share with proper attribution.
        </Description>
      </Wrapper>
    </Container>
  );
};

export default About;
