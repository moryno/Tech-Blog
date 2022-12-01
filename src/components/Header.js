import styled from "styled-components";

const Container = styled.section`
  margin-top: 3.75rem;
`;

const TitleWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Lora", serif;
  color: #444;
`;

const Title = styled.span`
  position: absolute;
  top: 12%;
  font-size: 6.25rem;
`;

const SubTitle = styled.span`
  position: absolute;
  top: 10%;
  font-size: 1.25rem;
`;

const Button = styled.button``;

const HeaderImage = styled.img`
  width: 100%;
  height: 55vh;
  margin-top: 3.8%;
  object-fit: cover;
`;

const Header = () => {
  return (
    <Container>
      <TitleWrapper>
        <SubTitle>TECH</SubTitle>
        <Title>BLOG</Title>
      </TitleWrapper>
      <HeaderImage
        src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1496&q=80"
        alt="headerImg"
      />
    </Container>
  );
};

export default Header;
