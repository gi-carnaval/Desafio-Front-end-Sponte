import React from 'react'
import { SContainer, SErrorStyled, SFieldStyled, SLabel, SRequiredLabel } from './styles'
import {Field, ErrorMessage } from 'formik';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  name: string,
  type?: string,
  label: string,
  required?: boolean,
}

export default function Input({ name, type = "", label, required, ...props}: InputProps) {
  return (
    <SContainer>
      <SLabel>
        {label || name}
        {required && <SRequiredLabel>*</SRequiredLabel>}
      </SLabel>
      <Field as={SFieldStyled} name={name} type={type} {...props} />
      <ErrorMessage name={name} component={SErrorStyled} />
    </SContainer>
  )
}
