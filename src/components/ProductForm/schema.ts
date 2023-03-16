import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  title: Yup.string()
    .max(100, 'Limitado à 100 caracteres.')
    .required('Preenchimento obrigatório.'),
  description: Yup.string().required('Preenchimento obrigatório.'),
  barcode: Yup.string().required('Preenchimento obrigatório.'),
  acquisitionDate: Yup.date().max(new Date(), 'Não deve ser superior à data atual.'),
  value: Yup.number()
    .moreThan(0, 'Deve ser maior que 0.')
    .required('Preenchimento obrigatório.'),
  weight: Yup.number().moreThan(0, 'Deve ser maior que 0.'),
  height: Yup.number().moreThan(0, 'Deve ser maior que 0.'),
  width: Yup.number().moreThan(0, 'Deve ser maior que 0.'),
  length: Yup.number().moreThan(0, 'Deve ser maior que 0.'),
  image: Yup.string(),
});