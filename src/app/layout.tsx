import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Coffee Shop",
  description: "The kingdom of coffee",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
  
        {children}</body>
    </html>
  );
}
