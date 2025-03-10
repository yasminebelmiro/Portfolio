import styled from "styled-components";

export const ContactContainer = styled.div`
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

export const SocialIcons = styled.div`
  font-size: 50px;
  color: white;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
   @media (max-width: 600px) {

  }
`;

export const SmallInput = styled.input`
  width: 494px;
  height: 50px;
  border-radius: 20px;
  border: none;
  margin-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 18px;
  color: black;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const LargeInput = styled.input`
  width: 494px;
  height: 200px;
  border-radius: 20px;
  border: none;
  margin-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 18px;
  color: black;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  width: 494px;
  height: 40px;
  border: none;
  background-color: black;
  color: white;
  font-size: 18px;
  border-radius: 20px;
  cursor: pointer;
    @media (max-width: 600px) {
    width: 100%;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;
