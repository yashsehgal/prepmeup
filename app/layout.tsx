"use client";
import Navbar from '@/components/sections/navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // to store the user authentication state
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
