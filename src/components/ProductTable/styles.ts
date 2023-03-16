import styled from "styled-components";
import { v } from "../../styles/variables";
import * as Dialog from '@radix-ui/react-dialog';

export const STable = styled.table`
  flex: 1;
  width: 100%;
  white-space: nowrap;
  border-collapse: collapse;
`

export const SThead = styled.thead`
  background: ${({ theme }) => theme.bg};
  font-size: ${v.xsText};
  font-weight: 700;
  color: ${({ theme }) => theme.textInactive};
  text-align: left;
  border: 1px solid ${({ theme }) => theme.textInactive};
  text-transform: uppercase;
  /* vertical-align: middle; */

  td {
    padding: .75rem 1rem;
    /* border: 1px solid ${({ theme }) => theme.border}; */
  }

  td::after, td::before {
    box-sizing: border-box;
    
  }
`

export const STbody = styled.tbody`
  background: ${({ theme }) => theme.bg2};
  color: ${({ theme }) => theme.text};
  border: ${({ theme }) => theme.bg};

  tr {

    border-bottom: 1px solid ${({ theme }) => theme.borderTable};
  }
  td {
    padding: .75rem 1rem;
   
  }
`

export const STdActions = styled.td`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const SDialogTrigger = styled(Dialog.Trigger)`
  background: none;
  box-sizing: border-box;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-size: ${v.mdText};

  :hover {
    color: ${({ theme }) => theme.textInactive};
  }
`

export const SOverlay = styled(Dialog.Overlay)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: black;
  opacity: .80;
`

export const SDialogContent = styled(Dialog.Content)`
  position: absolute;
  padding: 2.5rem;
  background: ${({ theme }) => theme.bg};
  border-radius: ${v.xxlSpacing};
  width: 100%;
  max-width: 28rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
`

export const SDialogClose = styled(Dialog.Close)`
  background: none;
  border: none;
  cursor: pointer; 
  position: absolute;
  right: 24px;
  top: 24px;
  color: ${({ theme }) => theme.text};

  svg {
    font-size: 20px;
  }
  :hover {
    color: ${({ theme }) => theme.textInactive};
  }
`

export const SDialogTitle = styled(Dialog.Title)`
  font-size: ${v.lgText};
  font-weight: 700;
`