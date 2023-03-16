import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.bg};
  width: 100%;
  border: solid 1px ${({ theme }) => theme.border};
  /* padding: 32px; */
  border-radius: 15px;

  @media (max-width: 1024px) {
    overflow: scroll;
  }
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 32px;

  h1 {
    color: ${({ theme }) => theme.text};
    font-weight: 500;
    font-size: 20px;
  }
`