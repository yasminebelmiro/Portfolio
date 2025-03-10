import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    --white: #FFFFFF;
    --purple: #6A4D90;
    --purple-100: #1E0C25;
    --purple-300:rgb(232, 198, 222);
}

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
    background-color:black;

}
`;

export const GlobalContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  padding-top: 30px;

  @media (max-width: 1100px) {
    flex-direction: column;
    width: auto;
    height: auto;
  }
`;
