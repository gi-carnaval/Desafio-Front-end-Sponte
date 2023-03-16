import { useEffect, useState, useRef } from 'react'
import { Formik, Form } from 'formik';
import { useParams, useNavigate } from 'react-router-dom'
import dayjs from 'dayjs';
import { FormContainer, InputGrid, InputImageContainer, NewImage } from './styles';

import { toast } from 'react-toastify';
import Input from '../Input';
import "react-datepicker/dist/react-datepicker.css";
import { validationSchema } from './schema';
import productRepository from '../../repositories/productRepository';
import { IProduct } from '../../types/product';
import CategoriesInput from '../CategoriesInput';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

interface ProductFormProps {
  edit?: boolean;
}

type ParamsProps = {
  id: string;
};

export default function ProductForm({edit}: ProductFormProps) {
  const { id } = useParams<ParamsProps>()
  const fileInputRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const [categories, setCategories] = useState<string[]>([]);

  const [selectedDate, setSelectedDate] = useState<string>()
  const [image, setImage] = useState<File | null>();
  const [preview, setPreview] = useState<string | null>();
  const [formValues, setFormValues] = useState<IProduct>({} as IProduct);

  async function fetchProductData(productId: string) {
    if(!productId) return
    const res = await productRepository.getProductById(productId)
    if (res.data) {     
      setFormValues(res.data);
      setPreview(formValues.image)
    } 
  }
  
  useEffect(() => {
    setPreview(formValues.image)
    if(Object.keys(formValues).length > 0){
      const splitedCategories = formValues.categories.split(',')
      setCategories(splitedCategories)
    }

  }, [formValues])

  useEffect(() => {
    if(id){
      fetchProductData(id)
    }
  }, [id]);

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null)
    }
  }, [image])

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>){
      if(event.target.files){
        const file = event.target.files[0];
        if (file && file.type.substring(0, 5) === "image") {
          setImage(file);
        } else {
          setImage(null);
        }
      }
  }

  function handleButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
      event.preventDefault();
      fileInputRef.current?.click();
  }

  const handleSubmit = async (values: IProduct) => {
    if(preview){
      values.image = preview
    }
    if(categories) {
      values.categories = categories.join()
    }
    
    try {
      if (edit) {
        confirmAlert({
          title: 'Atualizando produto...',
          message: 'Confirmar Edição?',
          buttons: [
            {
              label: 'Sim',
              onClick: async ()  => {
                await productRepository.updateProduct(values)
                toast.success('Produto alterado com sucesso.');
              }
            },
            {
              label: 'Não',
              onClick: () => {return}
            }
          ]
        });
       
      } else {
        confirmAlert({
          title: 'Adicionando produto...',
          message: 'Confirmar Criação?',
          buttons: [
            {
              label: 'Sim',
              onClick: async ()  => {
                await productRepository.createProduct(values)
                toast.success('Produto adicionado com sucesso.');
                navigate('/');
              }
            },
            {
              label: 'Não',
              onClick: () => {return}
            }
          ]
        });
        
      }
    } catch (error) {
      console.log(error)
      toast.error('Não foi possível salvar o produto.');
    }
  };

  if(edit && Object.keys(formValues).length <= 0 ){
    return <p>Carregando...</p>
  }
  return (
    <FormContainer>
      <Formik
        enableReinitialize
        initialValues={formValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
       >
         <Form>
            <fieldset>
              <legend>Dados</legend>
              <Input name="title" id="title" label="Nome do Produto"></Input>
              <Input name="description" id="description" as="textarea" label="Descrição do Produto"></Input>
            </fieldset>
           
            
              <fieldset>
                <legend>Medidas</legend>
                <InputGrid marginTop>
                  <Input name="weight" id="weight" type="number" label="Peso do produto (KG)" />
                  <Input name="height" id="height" type="number" label="Altura do produto (centímetros)" />
                  <Input name="width" id="width" type="number" label="Largura do produto (centímetros)" />
                  <Input name="length" id="length" type="number" label="Comprimento do produto (centímetros)" />
                </InputGrid>
              </fieldset>
            <fieldset>
              {
                id ? 
                  <Input
                    name="acquisitionDate" 
                    value={
                      dayjs(formValues.acquisitionDate).format('DD/MM/YYYY')
                    } 
                    id="acquisitionDate" 
                    label="Data de aquisição" 
                    disabled 
                  />
                  : 
                  <Input 
                    name="acquisitionDate" 
                    id="acquisitionDate" 
                    type="date" 
                    value={selectedDate} 
                    onChange={(e: React.ChangeEvent<EventTarget>) => {
                      const target = e.target as HTMLInputElement;
                      const value = target.value;
                      setSelectedDate(value)
                    }} 
                    label="Data de aquisição" 
                  />
              }
            </fieldset>
            <fieldset>
              <legend>Informações</legend>
              <Input name="barcode" id="barcode" label="Código de Barras do produto" />
              <Input name="value" type="number" id="value"  label="Valor do produto" />
              <Input name="quantity" id="quantity" type="number" label="Quantidade" />
              <CategoriesInput
                name="category"
                label="Categoria"
                auxiliaryText="(informe a categoria e tecle enter para adicionar)"
                values={categories}
                setValues={setCategories}
              />
            </fieldset>
            <fieldset>
              <legend>Imagem do Produto</legend>
              <InputImageContainer>
                {preview ? (
                  <img src={preview} alt={"preview"} style={{ objectFit: "contain" }} />
                ) : (
                  <NewImage
                    onClick={handleButtonClick}>
                    Adicionar Imagem
                  </NewImage>
                )}
              </InputImageContainer>
              <input 
                type="file" 
                style={{
                   display: "none" 
                }} 
                ref={fileInputRef}
                accept="image/*"
                onChange={handleInputChange}/>

            </fieldset>
            <footer>
              <button type="submit">
                Salvar
              </button>
            </footer>
         </Form>
       </Formik>
    </FormContainer>
  );
}
