import styled from 'styled-components';
import { Inter } from 'next/font/google';
import { primaryLightBlue } from '@/styles/colors';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

const PartnersSection = styled.section`
  width: 100vw;
  background-color: ${primaryLightBlue};
  display: flex;
  justify-content: center;
  padding: 1.5rem 0;
  color: black;
  font-weight: 600;
  font-size: 1.5rem;
`;

const PartnersGrid = styled.div``;

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-2 ${inter.className}`}
    >
      <PartnersSection>
        <h1>Partners</h1>
        <PartnersGrid>
          <Image
            src={
              'https://seeklogo.com/images/K/karmen_pet_hospital-logo-006B754D1D-seeklogo.com.png'
            }
            alt="Logo"
            width={100}
            height={100}
          />
          <Image
            src={
              'https://seeklogo.com/images/K/karmen_pet_hospital-logo-006B754D1D-seeklogo.com.png'
            }
            alt="Logo"
            width={100}
            height={100}
          />
          <Image
            src={
              'https://seeklogo.com/images/K/karmen_pet_hospital-logo-006B754D1D-seeklogo.com.png'
            }
            alt="Logo"
            width={100}
            height={100}
          />
          <Image
            src={
              'https://seeklogo.com/images/K/karmen_pet_hospital-logo-006B754D1D-seeklogo.com.png'
            }
            alt="Logo"
            width={100}
            height={100}
          />
          <Image
            src={
              'https://seeklogo.com/images/K/karmen_pet_hospital-logo-006B754D1D-seeklogo.com.png'
            }
            alt="Logo"
            width={100}
            height={100}
          />
        </PartnersGrid>
      </PartnersSection>
    </main>
  );
}
