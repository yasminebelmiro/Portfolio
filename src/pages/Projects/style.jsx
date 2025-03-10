import styled from "styled-components";

export const ProjectsContainer = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: var(--purple);
  border-radius: 45px 0px 0px 45px;
  padding: 5%;

  @media (max-width: 1100px) {
    height: auto;
    width: 95%;
    padding: 10%;
    margin-bottom: 90px;
    border-radius: 0px 45px 45px 0px;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
`;

export const ProjectsGrid = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProjectCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 40px 0;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
 width: 300px;
  height: 139px;
  border-radius: 20px;

  @media (max-width: 800px) {
    width: 90%;
    height: auto;
  }
`;

export const Column = styled.div`
  display: flex;
  padding-left: 40px;
  justify-content: space-between;
  flex-direction: column;

  @media (max-width: 800px) {
    align-items: flex-start;
    padding: 20px 0;

  }
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Name = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  margin: 10px 0;
  color: var(--purple-300);
`;
