import MainLayout from '@/components/Layout/MainLayout';
import { primaryBlue } from '@/styles/colors';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }: AppProps) {
  const theme = {
    fg: 'white',
    bg: primaryBlue
  };

  const invertTheme = () => ({
    fg: primaryBlue,
    bg: 'white',
    border: '1px'
  });

  return (
    <ThemeProvider theme={invertTheme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}
