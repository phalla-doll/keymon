import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Keymon - Mechanical Keyboards',
  description: 'Premium mechanical keyboards that combine aesthetics, durability, and high performance.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>{children}</body>
    </html>
  );
}
