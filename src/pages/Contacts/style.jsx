import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 70%;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: white;
  background-color: var(--purple);
  border-radius: 45px 0px 0px 45px;
  padding: 3% 10%;
`;

export const SocialIcons = styled.div`
  font-size: 50px;
  color: white;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
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
`;

export const Button = styled.button`
  width: 200px;
  height: 40px;
  border: none;
  background-color: black;
  color: white;
  font-size: 18px;
  border-radius: 20px;
  cursor: pointer;
`;

export const SocialContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;
