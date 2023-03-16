import { SetStateAction } from 'react'
import { FaBars } from "react-icons/fa";
import { Container } from "./styles";

interface HeaderProps {
  sidebar: boolean
  setSidebarActive:  React.Dispatch<SetStateAction<boolean>>
}

export function Header({sidebar, setSidebarActive}: HeaderProps) {

  const handleToggleSidebar = () => {
    setSidebarActive(!sidebar)
  }

  return(
    <Container>
      <FaBars onClick={handleToggleSidebar}/>
    </Container>
  )
}