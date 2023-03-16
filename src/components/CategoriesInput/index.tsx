import React, { SetStateAction, useState } from 'react'
import { CategoryTag } from '../CategoryTag';
import { CategoryContainer, Container } from './styles';

interface CategoriesInputProps {
  name: string,
  label: string,
  auxiliaryText: string,
  values: string[],
  setValues: React.Dispatch<SetStateAction<string[]>>
}

export default function CategoriesInput(props: CategoriesInputProps) {
  const { label, name, auxiliaryText, values, setValues } = props;
  const [newItem, setNewItem] = useState('');

  const handleAddItem = (event: React.KeyboardEvent<HTMLInputElement>) => {
    
    if ((event.code === "ShiftLeft" || event.key === "Shift")) {
      event.preventDefault();
    }

    if ((event.code || event.key) === "Enter") {
      event.preventDefault();
      
      const target = event.target as HTMLInputElement;
      const targetValue = target.value;
      if (!values.find((value) => value === targetValue)) {
        setValues([...values, targetValue]);
      }
      setNewItem('');
    }
  };

  const handleRemoveItem = (item: string) => {
    setValues(values.filter((value) => value !== item));
  };

  return (
    <Container>
      <label htmlFor={name}>
        {label}
        {auxiliaryText !== '' && <span>{auxiliaryText}</span>}
        <input
          id={name}
          name={name}
          value={newItem}
          onChange={(event) => setNewItem(event.target.value)}
          onKeyDown={(event) => handleAddItem(event)}
        />
      </label>
      <CategoryContainer>
        {values &&
          values.map((item) => (
            <CategoryTag
              key={item}
              label={item}
              onClick={() => handleRemoveItem(item)}
            />
          ))}
      </CategoryContainer>
    </Container>
  )
}
