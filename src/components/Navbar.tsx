import { useState } from 'react';
import { ThemeProvider, useTheme } from 'styled-components';
import Image from 'next/image';
import styled from 'styled-components';

const NavbarButton = styled.button`
  font-size: 1em;
  margin: 1em;
  cursor: pointer;
  padding: 0.4em 1em;
  border-radius: 3px;
  color: ${(props) => props.theme.fg};
  background-color: ${(props) => props.theme.bg};
  border-width: ${(props) => props.theme.border || '0px'};
  transition: all 0.2s;

  &:hover {
    transform: scale(0.95);
    transition: all 0.2s;
  }
`;

const NavbarWrapper = styled.div`
  width: 100%;
  transition: all 0.5s;
  color: ${(props) => props.theme.fg};
  background-color: ${(props) => props.theme.bg};
`;

NavbarButton.defaultProps = {
  theme: {
    main: '#3498db', // Default theme color
    fg: 'white',
    bg: '#2c3e50'
  }
};

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const theme = useTheme();

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <NavbarWrapper>
        <div className="flex h-24 w-full items-center justify-center align-middle">
          <div className="flex  h-full w-9/12 items-center justify-between gap-16 py-3 max-md:w-11/12">
            <Image src="/logo.png" alt="k48 logo" width={100} height={100} />
            <div className="flex-1">
              <ul className="flex flex-row gap-6">
                <li className="cursor-pointer">Home</li>
              </ul>
            </div>
            <NavbarButton onClick={toggleTheme}>Toggle Theme</NavbarButton>
          </div>
        </div>
      </NavbarWrapper>
    </ThemeProvider>
  );
};

const lightTheme = {
  main: '#3498db',
  fg: 'white',
  bg: '#2c3e50'
};

const darkTheme = {
  main: '#2ecc71',
  fg: 'black',
  bg: 'white'
};

export default Navbar;
