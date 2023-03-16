import styled from "styled-components";
import { NavLink } from 'react-router-dom'

export const ItemList = styled.li`
  font-size: 14px;
`
export const STdActions = styled.td`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const STrLink = styled(NavLink)`
  display: contents;
  color: ${({ theme }) => theme.text};

  :hover {
    color: ${({ theme }) => theme.textInactive}
  }
`

export const SProductImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
`