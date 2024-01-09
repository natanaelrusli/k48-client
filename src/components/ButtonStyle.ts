import { primaryBlue, secondaryGray } from '@/styles/colors';
import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
  button: {
    padding: '9px 12px',
    borderRadius: 6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    borderWidth: 1
  },
  buttonPrimary: {
    extend: 'button',
    backgroundColor: primaryBlue,
    color: 'white'
  },
  buttonSecondary: {
    extend: 'button',
    backgroundColor: secondaryGray,
    color: '#000'
  }
});
