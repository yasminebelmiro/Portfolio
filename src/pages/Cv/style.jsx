import styled from "styled-components";

export const CvContainer = styled.div`
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
  @media (max-width: 400px) {
    font-size: 1.4rem;
  }
`;

export const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 1rem;
  width: 200px;
  height: 40px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  margin: 20px;

  &: hover {
    background-color: white;
    color: black;
  }

  @media (max-width: 400px) {
    width: 150px;

    font-size: 0.8rem;
  }
`;

export const EducationContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:60px;
  height: 60px;
  background-color: black;
  padding: 10px;
  border-radius: 10px;

  @media (max-width: 600px) {
    height: 50px;
    width:50px;
  }
`;

export const Icon = styled.div`
  font-size: 2rem;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const DescriptionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 20px;
`;

export const Subtitle = styled.h2`
  margin-top: 15px;
  font-size: 1.6rem;
  margin-left: 2rem;
  @media (max-width: 400px) {
    font-size: 1.4rem;
  }
  @media (max-width: 600px) {
    margin-left: 1rem;
  }
`;
export const Column = styled.div`
  padding: 20px 0;
`;

export const Name = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 15px;
  @media (max-width: 400px) {
    font-size: 1rem;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: var(--purple-300);
  @media (max-width: 400px) {
    font-size: 0.9rem;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
