import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: calc(100% - 250px) ;
  top: 0;
  left: 250px;
  height: 100px;
  display: flex;
  z-index: 2;
  background: ${({ theme }) => theme.bg};

  > img {
    display: none;
    position: absolute;
    width: 200px;
    left: 300px;
  }

  > svg {
    display: none;
    position: fixed;
    color: ${({ theme }) => theme.primary};
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    top: 0;
    left: 0;
    height: 100px;
    z-index:0;
    > img, > svg {display: block;}
  }
`