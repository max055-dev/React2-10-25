import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-inter',
});

export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-lusitana',
});

export const lusitanaBold = Lusitana({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-lusitana-bold',
});
