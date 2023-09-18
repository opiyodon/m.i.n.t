import './globals.css'
import Navbar from '/components/Navbar'
import Footer from "/components/Footer"

export const metadata = {
  title: 'M.I.N.T',
  description: 'M.I.N.T is a ToDo app created with Nextjs, Typescript, Tailwind and data is stored in Mongo DB',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden w-[100%]">
      <body className="bg-light_bg_bright font-sans text-light_txt transition-all duration-1000 ease-in-out ||| DARK">
      <Navbar />
        {children}
      <Footer />
      </body>
    </html>
  )
}
