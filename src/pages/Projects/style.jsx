import styled from "styled-components";

export const ProjectsContainer = styled.div`
  width: 70%;

  display: flex;
  flex-direction: column;

  color: white;
  background-color: var(--purple);
  border-radius: 45px 0px 0px 45px;
  padding: 5% 10%;
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
  margin: 40px 0;
`;

export const Image = styled.img`
  width: 300px;
  height: 139px;
  border-radius: 20px;
`;

export const Column = styled.div`
  display: flex;
  padding-left: 40px;
  justify-content: space-between;
  flex-direction: column;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 18px;
  margin: 10px 0;
`;
