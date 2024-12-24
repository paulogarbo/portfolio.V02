import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "./_components/theme-provider";
import { jetBrainsMono } from "./_fonts";
import Header from "./_components/header";

export const metadata: Metadata = {
  title: "Garbo's Portfolio",
  description: "Garbo's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="overflow-hidden md:overflow-visible">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
