
import { FiX } from 'react-icons/fi';

import { Container } from './styles';

interface CategoryTagProps {
  label: string,
  onClick: () => void
}

export function CategoryTag(props: CategoryTagProps) {
  const { label, onClick } = props;

  return (
    <Container>
      <span>{label}</span>
      <button type="button" onClick={onClick}>
        <FiX />
      </button>
    </Container>
  );
}
