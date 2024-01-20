import { Inter, Roboto } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next js',
  description: 'Create next app',
}

 const roboto = Roboto({
  weight: ["300", "400"],
  styles: ["italic", "normal"],
  subjects: ["latin"]
 })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${roboto.className}`}>
       <Navbar />
        
        {children}</body>
    </html>
  )
}
