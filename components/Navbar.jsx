import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex gap-5 p-7 bg-light_bg_dim items-center justify-center top-0 sticky w-[100%]">


      <div>


        <Link href={"/"}>

          <div
            className="flex gap-1 cursor-pointer px-10 justify-center"
          >
            {/*<Image
              src="/bg.jpg"
              alt="logo image"
              className="rounded-full w-8 h-8 border-2 border-primary transition-all duration-300 cover"
              width={0}
              height={0}
  />*/}

            <div
              className="font-bold text-2xl"
            >
              M.I<span className="text-primary transition-all duration-300">.N.T</span>
            </div>

          </div>

        </Link>

      </div>


      <div className="flex items-center justify-center px-10">

        <Link href={"/"} className="font-semibold text-lg hover:text-primary transition-all duration-300">Home</Link>
        
      </div>


      <div className="flex items-center justify-center px-10">

        <div className="flex items-center justify-center rounded-full w-8 h-8 border-2 border-primary hover:border-secondary text-primary hover:text-secondary cursor-pointer transition-all duration-300">
          L
        </div>

      </div>


    </nav>
  )
}

export default Navbar