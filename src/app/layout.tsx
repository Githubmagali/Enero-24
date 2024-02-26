import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from '@/context/cartProvider'
import NavbarPage from '@/components/navbar/page'



export const metadata: Metadata = {
  title: "Coffee Shop",
  description: "The kingdom of coffee",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <CartProvider>
      <NavbarPage />
        {children}
        </CartProvider>
        </body>
    </html>
  );
}
