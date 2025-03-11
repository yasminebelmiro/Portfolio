import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.nav`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  @media (max-width: 600px) {
    position: fixed;
    bottom: 0;
    right: 0;
  }
`;

export const Left = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const Right = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 0px 0px 0px 45px;
  background-color: var(--purple);


  @media (max-width: 600px) {
    width: 100%;
    border-radius: 40px 0px 0px 40px;
  }
`;

export const Image = styled.img`
  width: 2rem;
  margin: 1rem;
`;
export const Item = styled(Link)`
  text-decoration: none;
  color: ${({ active }) => (active ? "black" : "white")};
  font-size: 1.3rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;

    @media (max-width: 400px) {
    font-size: 1rem;
  }

`;
