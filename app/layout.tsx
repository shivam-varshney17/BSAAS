import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import SmoothScrollProvider from '@/components/providers/smooth-scroll-provider';
import dynamic from 'next/dynamic';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Shivam | AI Agent Architect & Full-Stack Developer',
  description: 'Portfolio of Shivam, AI Agent Architect and Full-Stack Developer specializing in building intelligent systems, RAG-based platforms, and scalable web applications.',
};

// Client component wrapper for the AILoader
const AILoader = dynamic(() => import('@/components/ai-loader'), { 
  ssr: false 
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            <AILoader />
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}