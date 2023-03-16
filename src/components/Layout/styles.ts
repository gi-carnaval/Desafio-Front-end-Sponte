import styled from "styled-components";

import { v } from "../../styles/variables";

export const SLayout = styled.div`
  display: flex; 
  width: 100%;
`;

export const SContentSide = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

export const SMain = styled.main`
  position: relative;
  left: 250px;
  top: 100px;
  padding: calc(${v.xlSpacing});
  z-index: 0;
  width: calc(100% - 250px);

  @media (max-width: 768px) {
    width: 100%;
    top: 0;
    left: 0;
  }
`