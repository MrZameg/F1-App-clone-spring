import type { Metadata } from 'next';
import { Rajdhani } from 'next/font/google';
import './globals.css';
import { SidebarProvider } from '@/components/ui/sidebar';

const rajdhani = Rajdhani({
  weight: ['400', '500', '600', '700'],
  variable: '--font-rajdhani',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'F1 clone app',
  description: 'This is a clone of the F1 website for educational purposes',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${rajdhani.variable} antialiased dark`}>
        <SidebarProvider>
          <main className="w-full">{children}</main>
        </SidebarProvider>
      </body>
    </html>
  );
}
