import { primaryBlue, secondaryGray } from '@/styles/colors';
import { createUseStyles, Styles } from 'react-jss';

export type ButtonClassNames = 'button' | 'buttonPrimary' | 'buttonSecondary';
export type ButtonClasses = Record<ButtonClassNames, string>;
export type ButtonStyles = Styles<ButtonClassNames>;

const getStyles: Styles<ButtonClassNames> = {
  button: {
    padding: '9px 12px',
    borderRadius: 6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    borderWidth: 1,
    width: '100%'
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
};

const useButtonStyles = createUseStyles(getStyles);

export default useButtonStyles;
