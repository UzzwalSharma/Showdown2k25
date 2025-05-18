import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const StyledButton = styled(Button)({
  padding: '0.8rem 2rem',
  fontSize: '1rem',
  borderRadius: '5px',
  textTransform: 'none',
  '@media (max-width: 768px)': {
    fontSize: '0.9rem',
    padding: '0.6rem 1.5rem',
  },
});

export default StyledButton;