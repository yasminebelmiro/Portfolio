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
    width: 95%;
    padding: 10%;
    margin-bottom: 90px;
    border-radius: 0px 45px 45px 0px;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;

  @media (max-width: 400px) {
    font-size: 1.4rem;
  }
`;

export const SocialIcons = styled.div`
  font-size: 50px;
  color: white;
`;

export const ContactForm = styled.form`
width: 70%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  @media(max-width: 600px){
  width: 95%;}
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 20px;
  border: 2px solid transparent;
  margin-bottom: 20px;
  padding: 15px;
  font-size: 18px;
  color: black;
  transition: border 0.3s ease;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    outline: none;
    border: 2px solid var(--purple);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  border-radius: 20px;
  border: 2px solid transparent;
  margin-bottom: 20px;
  padding: 15px;
  font-size: 18px;
  color: black;
  resize: none;
  transition: border 0.3s ease;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    outline: none;
    border: 2px solid var(--purple);
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  background-color: black;
  color: white;
  font-size: 18px;
  border-radius: 20px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: var(--purple);
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;
