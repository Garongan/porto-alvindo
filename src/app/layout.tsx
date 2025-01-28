import "./globals.css";

import { ThemeProvider } from "@/context/ThemeContext";
import { constructMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";
import { geistMono, geistSans } from "./fonts/fonts";
export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("antialiased", geistSans.variable, geistMono.variable)}
      >
       <ThemeProvider>
        {children}
       </ThemeProvider>
      </body>
    </html>
  );
}
