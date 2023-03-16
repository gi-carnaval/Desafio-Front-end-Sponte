import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  padding: 10px;
  border-radius: 10px;
  margin: 0 15px 20px;

  :hover > svg, :hover {
    color: ${({ theme }) => theme.text};
  }

  > svg {
    position: relative;
    color: ${({ theme }) => theme.text};
    width: 20px;
    height: 20px;
    margin-right: 18px;
  }

  .openIcon, .closeIcon {
    position: absolute;
    right: 0;
    cursor: pointer;
  }
`

export const DropdownMenu = styled.ul<{isOpen: boolean}>`
  position: absolute;
  top: 40px;
  left: 0;
  
  padding: 10px;
  list-style: none;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

export const DropdownMenuItem = styled.li`
  padding: 5px;
  color: #1570EF;
  cursor: pointer;
`;