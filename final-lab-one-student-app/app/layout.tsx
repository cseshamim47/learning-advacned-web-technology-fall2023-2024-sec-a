import './globals.css'
import { Poppins } from 'next/font/google'


const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Student Management',
}

export default function RootLayout({ children } : any) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className='container'>
          {children}
        </main>
      </body>
    </html>
  )
}