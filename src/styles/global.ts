import { createGlobalStyle, DefaultTheme  } from "styled-components";

export const GlobalStyle = createGlobalStyle<{theme: DefaultTheme}>`
  *, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: ${({ theme }) => theme.bg2};
  color: ${({ theme }) => theme.text};
  font-family: 'Inter', sans-serif;
}
`