import styled from "styled-components";

export const AboutContainer = styled.section`
  width: 70%;
  height: 83vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: var(--purple);
  border-radius: 45px 0px 0px 45px;

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
  margin-bottom: 5%;
  @media (max-width: 400px) {
    font-size: 1.4rem;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  max-width: 700px;

  @media (max-width: 900px) {₢
    font-size: 1rem;
  }
  
`;

export const Subtitle = styled.h2`
  font-size: 2rem;
  margin: 5% 0;
  
  @media (max-width: 400px) {
    font-size: 1.4rem;
  }
`;

export const LangageContent = styled.div`
  width: 100%;
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;

  @media (max-width: 1100px) {
    gap: 30px;
  }
  @media (max-width: 600px) {
    gap: 20px;
  }
`;

export const Icon = styled.div`
  font-size: 4rem;
  color: white;
`;
