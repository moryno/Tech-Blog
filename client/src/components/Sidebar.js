import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.section`
  flex: 3;
  width: 100%;
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
  width: 80%;
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

const TopImage = styled.img`
  margin-top: 0.9375rem;
  width: 80%;
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
  width: 45%;
  margin-top: 0.625rem;
  cursor: pointer;
  margin-right: 0px;
`;

const SideBarSocial = styled.article`
  margin: 0.9375rem 0;
  width: 15.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  cursor: pointer;
`;

const PopularPost = styled.article`
  display: flex;
  align-items: center;
  width: 80%;
`;

const PopularInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.625rem;
  padding: 0.3125rem;
  width: 100%;
`;

const PopularTitle = styled.span`
  margin-bottom: 0.5rem;
  color: #444;
  cursor: pointer;
  &:hover {
    font-weight: 600;
  }
`;

const Date = styled.span`
  color: #444;
  font-weight: 500;
  font-size: 0.75rem;
`;

const PopularImage = styled.img`
  width: 4.5rem;
  height: 3.5rem;
  object-fit: cover;
`;

const Sidebar = ({ posts }) => {
  return (
    <Container>
      <SideItem>
        <SideTitle> ABOUT US </SideTitle>
        <TopImage
          src="https://www.gizmodo.com.au/wp-content/uploads/sites/2/2021/11/04/league-of-legends-arcane.jpg?quality=80&resize=1280,720"
          alt="sideImg"
        />
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat
          vulputate purus vitae placerat.
        </Description>
      </SideItem>
      <SideItem>
        <SideTitle> POPULAR POSTS </SideTitle>
        <PopularPost>
          <PopularImage
            src="https://www.gizmodo.com.au/wp-content/uploads/sites/2/2021/11/04/league-of-legends-arcane.jpg?quality=80&resize=1280,720"
            alt="popularImg"
          />
          <PopularInfoContainer>
            <PopularTitle>Top 10 Ingredient</PopularTitle>
            <Date>15th Feb 2022</Date>
          </PopularInfoContainer>
        </PopularPost>
        <PopularPost>
          <PopularImage
            src="https://www.gizmodo.com.au/wp-content/uploads/sites/2/2021/11/04/league-of-legends-arcane.jpg?quality=80&resize=1280,720"
            alt="popularImg"
          />
          <PopularInfoContainer>
            <PopularTitle>Top 10 Ingredient</PopularTitle>
            <Date>15th Feb 2022</Date>
          </PopularInfoContainer>
        </PopularPost>
        <PopularPost>
          <PopularImage
            src="https://www.gizmodo.com.au/wp-content/uploads/sites/2/2021/11/04/league-of-legends-arcane.jpg?quality=80&resize=1280,720"
            alt="popularImg"
          />
          <PopularInfoContainer>
            <PopularTitle>Top 10 Ingredient</PopularTitle>
            <Date>15th Feb 2022</Date>
          </PopularInfoContainer>
        </PopularPost>
      </SideItem>

      <SideItem>
        <SideTitle> FOLLOW US </SideTitle>
        <SideBarSocial>
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
        </SideBarSocial>
      </SideItem>
      <SideItem>
        <SideTitle> CATEGORY </SideTitle>
        <SideList>
          {posts?.map((post) => {
            return post.categories.map((category, index) => (
              <Link to={`/?cat=${category}`}>
                {" "}
                <SideElement key={index}> {category} </SideElement>{" "}
              </Link>
            ));
          })}
        </SideList>
      </SideItem>
    </Container>
  );
};

export default Sidebar;
