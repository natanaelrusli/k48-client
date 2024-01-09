import React, {
  HTMLProps,
  PropsWithChildren,
  ReactNode,
  useEffect,
  useState
} from 'react';
import useButtonStyles, { ButtonClasses } from './ButtonStyle';

export type ButtonProps = {
  buttonType?: 'submit' | 'reset' | 'button';
  variant?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  color?: string;
  bgColor?: 'primary' | 'secondary' | 'transparent';
  radius?: string;
  size?: string;
} & HTMLProps<HTMLButtonElement>;

const Button = ({
  children,
  variant = 'primary',
  buttonType,
  color,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  const [buttonClasses, setButtonClasses] = useState<string>('');
  const classes: ButtonClasses = useButtonStyles();

  useEffect(() => {
    const getButtonClasses = () => {
      switch (variant) {
        case 'primary':
          return classes.buttonPrimary;
        case 'secondary':
          return classes.buttonSecondary;
        default:
          return '';
      }
    };

    setButtonClasses(getButtonClasses());
  }, [variant, classes.buttonPrimary, classes.buttonSecondary]);

  const containerClasses =
    React.Children.count(children) === 1
      ? 'flex items-center justify-center'
      : 'flex w-10/12 items-center justify-between text-center';

  return (
    <button {...props} type={buttonType} className={`${buttonClasses}`}>
      <div className={containerClasses}>{children}</div>
    </button>
  );
};

export default Button;
