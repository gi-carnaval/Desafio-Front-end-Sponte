import styled from "styled-components";
import { v } from "../../styles/variables";

export const FormContainer = styled.div`
  background: ${({ theme }) => theme.bg};
  width: 100%;
  border-radius: 8px;
  overflow: scroll;

  form {
    padding: 32px;
    
    footer {
      display: flex;
      width: 100%;
      justify-content: center;
      button {
        width: 250px;
        height: 32px;
        align-items: center;
        background: ${({ theme }) => theme.bg3};
        border: 0;
        border-radius: 8px;
        cursor: pointer;
        color: ${({ theme }) => theme.text};
        font-weight: 700;
        font-size: 16px;
        transition: color 0.2s;
      }
    }


  button:hover {
    color: #774dd6;
  }

    fieldset {
      border: 0;
      padding: 24px 0;

      legend {
        font-weight: 700;
        font-size: ${v.lgText};
        color: ${({ theme }) => theme.textInactive};
        margin-bottom: 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding-bottom: 16px;
        border-bottom: 1px solid #e6e6f0;

      }
      label {
        font-size: 14px;
        margin-top: 16px; 

        span {
          font-size: 12px;
          color: #c1bccc;
          margin-left: 8px;
        }
      }

      input {
        width: 100%;
        height: 40px;
        margin-top: 8px;
        border-radius: 8px;
        background: ${({ theme }) => theme.inputBackground};
        border: solid 1px ${({ theme }) => theme.border};
        color: ${({ theme }) => theme.text};
        outline: 0;
        padding: 0 16px;
        font-size: 16px;
      }
      textarea {
        width: 100%;
        height: 80px;
        margin-top: 8px;
        border-radius: 8px;
        background: ${({ theme }) => theme.inputBackground};
        border: solid 1px ${({ theme }) => theme.border};
        color: ${({ theme }) => theme.text};
        outline: 0;
        padding: 16px;
        font-size: 16px;
      }
    }
  }
`

export const InputGrid = styled.div<{ marginTop: boolean}>`
  display: flex;
  flex-direction: row;
  column-gap: 16px;
  margin-top: ${(props) => (props.marginTop ? '14px' : 'auto')};

  fieldset {
    display: flex;
    justify-content: space-between;
    padding-top: 24px;

    input {
      width: 90% !important;
      height: 56px;
      margin-top: 8px;
      border-radius: 8px;
      background: ${({ theme }) => theme.inputBackground};
      border: solid 1px ${({ theme }) => theme.border};
      color: ${({ theme }) => theme.text};
      outline: 0;
      padding: 0 16px;
      font-size: 16px;
    }
  }

  div {
    margin-top: 0 !important;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SInputLabel = styled.div`
  margin-top: 24px;
`

export const InputImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 25px;

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 8px;
  }

  input[type='file'] {
    display: none;
  }
`;

export const NewImage = styled.button`
  width: 200px;
  height: 150px;
  background: #f8f8fc;
  border: 1px dashed #8257e5;
  border-radius: 8px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;
