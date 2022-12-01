import styled from "styled-components";

const Footers = styled.footer`
  padding: 3.75rem;
  text-align: center;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  box-sizing: border-box;
`;

const Span = styled.span`
  color: #ccc;
`;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Footers>
      <Span>Copyright ⓒ {year}</Span>
    </Footers>
  );
};

export default Footer;
