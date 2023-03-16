import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { darkTheme, lightTheme } from './styles/theme'
import { Layout } from './components/Layout'
import { RoutesApp } from './Routes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './lib/dayjs'

type ThemeContextProps = {
  theme: string
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

const DEFAULT_VALUE = {
  theme: 'light',
  setTheme: () => {}
}

export const ThemeContext = React.createContext<ThemeContextProps>(DEFAULT_VALUE)

function App() {
  const [ theme, setTheme ] = useState('dark');
  const themeStyle = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={themeStyle}>
        <GlobalStyle />
        <Layout>
          <RoutesApp />
        </Layout>
      </ThemeProvider>
      <ToastContainer />
    </ThemeContext.Provider>
  )
}

export default App
