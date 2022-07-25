import styled from "styled-components";

const Container = styled.section`
  flex: 3;
  margin: 1.25rem;
  padding-bottom: 1.875rem;
  background-color: #fdfbfb;
  border-radius: 0.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

const SideItem = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SideTitle = styled.span`
  margin: 0.625rem;
  padding: 0.3125rem;
  width: 80%;
  border-top: 1px solid #a7a4a4;
  border-bottom: 1px solid #a7a4a4;
  font-family: "Varela Round", sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  color: #222;
  line-height: 1.25rem;
  text-align: center;
`;

const Image = styled.img`
  margin-top: 0.9375rem;
  width: 70%;
  height: 15.625rem;
  object-fit: cover;
`;

const Description = styled.p`
  padding: 1.875rem;
`;

const SideList = styled.ul`
  list-style: none;
  margin-bottom: 1.875rem;
`;

const SideElement = styled.li`
  display: inline-block;
  width: 50%;
  margin-top: 0.625rem;
  cursor: pointer;
  margin-right: 0px;
`;

const SideBarSocial = styled.article`
  margin-top: 0.9375rem;
  width: 15.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Sidebar = () => {
  return (
    <Container>
      <SideItem>
        <SideTitle> ABOUT US </SideTitle>
      </SideItem>
      <Image
        src="https://www.gizmodo.com.au/wp-content/uploads/sites/2/2021/11/04/league-of-legends-arcane.jpg?quality=80&resize=1280,720"
        alt="sideImg"
      />
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat
        vulputate purus vitae placerat.
      </Description>
      <SideItem>
        <SideTitle> CATEGORY </SideTitle>
      </SideItem>
      <SideList>
        <SideElement> Music </SideElement>
        <SideElement> Art </SideElement>
        <SideElement> Food </SideElement>
        <SideElement> Movies </SideElement>
        <SideElement> Dance </SideElement>
        <SideElement> Books </SideElement>
      </SideList>
      <SideItem>
        <SideTitle> FOLLOW US </SideTitle>
      </SideItem>
      <SideBarSocial>
        <i className="sidebarIcon fab fa-facebook"></i>
        <i className="sidebarIcon fab fa-twitter"></i>
        <i className="sidebarIcon fab fa-pinterest-p"></i>
        <i className="sidebarIcon fab fa-instagram"></i>
      </SideBarSocial>
    </Container>
  );
};

export default Sidebar;
