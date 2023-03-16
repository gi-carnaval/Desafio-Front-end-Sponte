import styled from 'styled-components'
import { btnReset, v } from '../../styles/variables';
import { Link } from 'react-router-dom'

export const Container = styled.div<{ active: boolean }>`
  background: ${({ theme }) => theme.bg};
  width: 250px;
  position: fixed;
  height: 100vh;
  top: 0px;
  /* left: 0px; */
  z-index: 1;
  ${props => props.active ? 'left: 300px' : 'left: 0' }
  

  animation: showSidebar 0.4s;
  @keyframes showSidebar {
    from {
      opacity: 0;
      left: -300px
    }
    to {
      opacity: 1;
      left: 0;
    }
  }

  @media (max-width: 429px) {
    position: absolute;
    ${props => props.active ? 'left: 0px' : 'left: -300px' }
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  
  > img {
    position: absolute;
    height: 60px;
    margin-top: 20px;
    margin-left: 20px;
  }
`

export const Content = styled.div`
  margin-top: 100px;
  padding: 25px;
`

export const SLinkContainer = styled.div`
  background: transparent;
  border-radius: ${v.borderRadius};
  margin: 8px 0;

  :hover {
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bg3}
  }
`

export const SLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  padding: calc(${v.smSpacing} - 2px) 0;
`

export const SLinkIcon = styled.div`
  padding: ${v.smSpacing} ${v.smSpacing};
  display: flex;

  svg {
    font-size: 20px;
  }
`

export const SLinkLabel = styled.span`
  display: block;
  flex: 1;
  margin-left: ${v.smSpacing};
`


export const STheme = styled.div`
  display: flex;
  align-items: center;
  font-size: 16x;
`

export const SThemeLabel = styled.span`
  display: block;
  flex: 1;
`

export const SThemeToggler = styled.button<{isActive: boolean}>`
  ${btnReset};
  cursor: pointer;
  width: 36px;
  height: 20px;
  border-radius: 10px;
  background: ${({ theme, isActive }) => !isActive ? theme.bg3 : theme.text};

  position: relative;
`

export const SToggleThumb = styled.div`
  height: 18px;
  width: 18px;
  position: absolute;
  top: 1px;
  bottom: 1px;
  transition: .2s ease right;
  right: calc(100% - 18px - 1px);
  border-radius: 50%;
  background: ${({ theme }) => theme.bg2};
`

export const SFooter = styled.div`
  display: none;
  justify-content: center;

  > svg {
    display: flex;
    font-size: 30px;
    right: 0;
    color: ${({ theme }) => theme.primary};
    width: 32px;
    height: 32px;
    margin: 32px;
    /* margin-right: 32px; */
    cursor: pointer
  }

  @media (max-width: 768px) {
    display: flex;
  }
`