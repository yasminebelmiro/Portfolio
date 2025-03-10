import styled from "styled-components";

export const HomeContainer = styled.section`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  @media (max-width: 1100px) {
    width: 100%;
    height: auto;
    padding: 30px;
  }
  @media (max-width: 400px) {

    padding: 10px;
  }
`;

export const MobileRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1100px) {
    width: 100%;
    flex-direction: row;

    gap: 20px;
  }
`;
export const MobileColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

export const MobileColumnVariant = styled(MobileColumn)`
  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    align-items: start;
    padding: 5%;
  }

  @media (max-width: 400px) {
    padding: 0%;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  width: 200px;
  border-radius: 100%;
  border: 5px solid white;
  margin-bottom: 1.5rem;

  @media (max-width: 600px) {
    width: 103px;
    border: 4px solid white;
  }
`;

export const Name = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;

  @media (max-width: 600px) {
    font-size: 1.1rempx;
  }
`;

export const Hole = styled.h2`
  font-size: 1.5rem;
  background-color: var(--purple);
  padding: 0.5rem;
  margin-bottom: 2rem;
  border-radius: 10px;
  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

export const Text = styled.p`
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
`;

export const TextIcons = styled.div`
  font-size: 24px;
  margin-right: 5px;
`;

export const SocialContainer = styled.div`
  display: flex;
  margin-top: 1rem;

  @media (max-width: 600px) {
    gap: 14px;
  }
`;

export const SocialIcons = styled.div`
  font-size: 50px;
  @media (max-width: 600px) {
    font-size: 33px;
    color: var(--purple);
  }
`;
