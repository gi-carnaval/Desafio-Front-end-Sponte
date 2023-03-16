
import React, { useContext, SetStateAction } from "react"
import SponteLogo from '../../assets/sponteLogo.png'
import { FaPlusCircle, FaBox, FaAngleDoubleLeft } from "react-icons/fa"
import { Container, Content, LogoContainer, SFooter, SLink, SLinkIcon, SLinkLabel, STheme, SThemeLabel, SThemeToggler, SToggleThumb } from "./styles"
import { NavLink } from 'react-router-dom'
import { ThemeContext } from "../../App"

interface SideBarProps {
  sidebar: boolean
  setSidebarActive:  React.Dispatch<SetStateAction<boolean>>
}

const linksArray = [
  {
    label: "Produtos",
    icon: <FaBox />,
    to: '/'
  },
  {
    label: "Adicionar Produto",
    icon: <FaPlusCircle />,
    to: '/products/new'
  }
]

export function Sidebar({ sidebar, setSidebarActive }: SideBarProps) {
const { setTheme, theme } = useContext(ThemeContext)

const handleToggleSidebar = () => {
  setSidebarActive(!sidebar)
}

  return(
    <Container active={sidebar}>
      <NavLink to="/">
        <LogoContainer>
          <img className="logoImage" src={SponteLogo} alt="logo sponte"/>
        </LogoContainer>
      </NavLink>
      <Content>
        {linksArray.map(({icon, label, to}) => (
          <SLink key={label} to={to}>
            <SLinkIcon>{icon}</SLinkIcon>
            <SLinkLabel>{label}</SLinkLabel>
          </SLink>
          
        ))}
        <STheme>
          <SThemeLabel>Dark Mode</SThemeLabel>
          <SThemeToggler isActive={theme === 'dark'} onClick={() => setTheme(p => p === 'light' ? 'dark' : 'light')}>
            <SToggleThumb style={theme === 'dark' ? {right: '1px'} : {}} />
          </SThemeToggler>
        </STheme>
        <SFooter>
          <FaAngleDoubleLeft onClick={handleToggleSidebar}/>
        </SFooter>
      </Content>
    </Container>
  )
}