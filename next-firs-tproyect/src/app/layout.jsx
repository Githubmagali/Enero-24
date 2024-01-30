import Navbar from "@/components/Navbar";
import "./globals.css"


export const metadata = {
  title: "Next js",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container mx-auto h-screen flex justify-center h-[calc(100vh-7rem)]">
          {children}
        </main>
      </body>
    </html>
  );
}