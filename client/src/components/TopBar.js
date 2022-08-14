import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../context/Context";
import { HashLink as Link } from "react-router-hash-link";

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
  position: relative;
`;
const Input = styled.input`
  position: absolute;
  padding: 0.8rem;
  border-radius: 0.2rem;
  width: 95%;
  outline: none;
  top: 0;
  &::placeholder {
    font-weight: 700;
    font-size: 0.8rem;
  }
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
  const [searchMode, setSearchMode] = useState(false);

  const { user, dispatch } = useContext(UserContext);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    window.location.replace("/login");
  };

  return (
    <Container>
      <TopLeft>
        <a href={`https://www.reddit.com/user/mngash`} target="_blank">
          <Icon>
            <i class="fab fa-reddit-alien"></i>
          </Icon>
        </a>
        <a href={`https://twitter.com/MauriceNganga5`} target="_blank">
          <Icon>
            <i className="sidebarIcon fab fa-twitter"></i>
          </Icon>
        </a>
        <a
          href={`https://www.linkedin.com/in/maurice-nganga-a6668b213/`}
          target="_blank"
        >
          <Icon>
            <i class="fab fa-linkedin"></i>
          </Icon>
        </a>
        <a href={`https://github.com/moryno/`} target="_blank">
          <Icon>
            <i class="fab fa-github"></i>
          </Icon>
        </a>
      </TopLeft>
      <TopCenter>
        <NavList>
          <NavLink to={`/`}>
            <NavItem> HOME </NavItem>
          </NavLink>
          <Link to={`#about`}>
            <NavItem> ABOUT </NavItem>
          </Link>
          <NavLink to={`/compose`}>
            <NavItem> COMPOSE </NavItem>
          </NavLink>
          {user && <NavItem onClick={handleLogout}> LOGOUT </NavItem>}
        </NavList>
        {searchMode && <Input placeholder="Search..." />}
      </TopCenter>
      <TopRight>
        {!user ? (
          <NavList>
            <NavLink to={`/login`}>
              <NavItem> LOGIN </NavItem>
            </NavLink>
            <NavLink to={`/register`}>
              <NavItem> REGISTER </NavItem>
            </NavLink>
          </NavList>
        ) : (
          <NavLink to={`/settings`}>
            <TopImage
              src={
                user.profile.length > 0
                  ? user.profile
                  : "https://ualr.edu/biology/files/2021/11/blank-profile-picture-973460_1280.png"
              }
            />
          </NavLink>
        )}
        {searchMode ? (
          <Icon>
            <i
              onClick={() => setSearchMode(!searchMode)}
              class="fas fa-times"
            ></i>
          </Icon>
        ) : (
          <Icon>
            <i
              onClick={() => setSearchMode(!searchMode)}
              className="topSearchIcon fas fa-search"
              style={{
                fontSize: "1.125rem",
                color: "#666",
                cursor: "pointer",
                marginLeft: "1rem",
              }}
            ></i>
          </Icon>
        )}
      </TopRight>
    </Container>
  );
};

export default TopBar;
