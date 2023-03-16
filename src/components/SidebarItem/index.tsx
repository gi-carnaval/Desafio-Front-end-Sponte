import { useState } from "react";
import { IconType } from "react-icons/lib";
import { Container, DropdownMenu, DropdownMenuItem } from "./styles";
import { NavLink } from 'react-router-dom'

interface SidebarItemProps {
  Icon: IconType
  Text: string
}

export function SidebarItem({Icon, Text}: SidebarItemProps) {
  return(
    <NavLink style={{ textDecoration: 'none'}} to='/products'>
      <Container>
        <Icon />
        {Text}
      </Container>
    </NavLink>
  )
  

}