import type { Metadata } from 'next';
import { Space_Mono } from 'next/font/google';
import './globals.css';

const spaceMono = Space_Mono({
  variable: '--font-space-mono',
  subsets: ['latin'],
  weight: '700',
});

export const metadata: Metadata = {
  title: 'Frontend Mentor Challenge Solution',
  description: 'Tip Calculator App Solution built by Dean ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceMono.className} antialiased grid place-content-center min-h-[100vh]`}
      >
        {children}
      </body>
    </html>
  );
}
