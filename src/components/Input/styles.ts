import styled from "styled-components";

export const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2;
  margin-bottom: 15px;
  width: 100%;
`

export const SFieldStyled = styled.input`
  width: 100%;
  height: 56px;
  margin-top: 8px;
  border-radius: 8px;
  background: #f8f8fc;
  
  outline: 0;
  padding: 0 16px;
  font-size: 16px;
`

export const SLabel = styled.label`
  text-transform: capitalize;
`

export const SRequiredLabel = styled.span`
  color: ${({ theme }) => theme.requiredColor};
`

export const SErrorStyled = styled.span`
  color: ${({ theme }) => theme.requiredColor};
  font-size: 14px;
`