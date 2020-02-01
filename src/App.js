import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import colorsAnyName from "./theme/Light/colors";
import typography from "./theme/Light/typography";
import colorsDark from "./theme/Dark/colors";
import typographyDark from "./theme/Dark/typography";
import Button from "@material-ui/core/Button";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const themeLight = {
  ...colorsAnyName,
  ...typography
};

const themeDark = {
  ...colorsDark,
  ...typographyDark
};

const MainContainer = styled.div`
  ${({ theme }) => `
  height: 100vh;
  width: 100vw;
  padding: 30px;
  background-color: ${theme.palette.background}
`}
`;

const BaseButton = styled(Button)`
  ${({ theme }) => `
  &.MuiButton-text {
    padding: 0;
    background-color: ${theme.palette.baseColors.mainStrong};
    color: ${theme.palette.baseColors.mainLight}; 

    :hover {
      background-color: ${theme.palette.baseColors.main};
      color: ${theme.palette.baseColors.mainStrong}; 
    }
  }
`}
`;

const MainHeader = styled.p`
  ${({ theme }) => `
  color:  ${theme.palette.baseColors.mainStrong};
  font-size: ${theme.typo.fontSizes.mainTitle};
  font-family: ${theme.typo.fontFamily};
`}
`;

const Header = () => <MainHeader>Header</MainHeader>;

export default props => {
  const [isLighttheme, setTheme] = useState(true);
  const handleThemeSwitch = () => {
    setTheme(prev => !prev);
  };
  return (
    <ThemeProvider theme={isLighttheme ? themeLight : themeDark}>
      <MainContainer>
        <Header />
        <BaseButton onClick={handleThemeSwitch}>Click</BaseButton>
        <GlobalStyle />
      </MainContainer>
    </ThemeProvider>
  );
};
