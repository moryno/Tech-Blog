import styled from "styled-components";

const Container = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  font-family: "Josefin Sans", sans-serif;
  position: sticky;
  top: 0;
  z-index: 999;
  height: 3.125rem;
  background-color: white;
`;

const TopLeft = styled.article`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TopCenter = styled.article`
  flex: 6;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
`;

const NavItem = styled.li`
  margin-right: 1.25rem;
  font-weight: 300;
  font-size: 1.125rem;
  cursor: pointer;
  &:hover {
    font-weight: 400;
  }
`;

const TopRight = styled.article`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TopImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  cursor: pointer;
`;

const TopBar = () => {
  return (
    <Container>
      <TopLeft>
        <Icon>
          <i className="sidebarIcon fab fa-facebook"></i>
        </Icon>
        <Icon>
          <i className="sidebarIcon fab fa-twitter"></i>
        </Icon>
        <Icon>
          <i className="sidebarIcon fab fa-pinterest-p"></i>
        </Icon>
        <Icon>
          <i className="sidebarIcon fab fa-instagram"></i>
        </Icon>
      </TopLeft>
      <TopCenter>
        <NavList>
          <NavItem> HOME </NavItem>
          <NavItem> ABOUT </NavItem>
          <NavItem> COMPOSE </NavItem>
        </NavList>
      </TopCenter>
      <TopRight>
        <NavList>
          <NavItem> LOGIN </NavItem>
          <NavItem> REGISTER </NavItem>
        </NavList>
        <TopImage src="https://www.gizmodo.com.au/wp-content/uploads/sites/2/2021/11/04/league-of-legends-arcane.jpg?quality=80&resize=1280,720" />
        <i
          className="topSearchIcon fas fa-search"
          style={{
            fontSize: "1.125rem",
            color: "#666",
            cursor: "pointer",
            marginLeft: "1rem",
          }}
        ></i>
      </TopRight>
    </Container>
  );
};

export default TopBar;
