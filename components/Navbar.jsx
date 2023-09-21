import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaSun } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Navbar = ({ toggleDarkMode }) => {
  const [isSunIconVisible, setIsSunIconVisible] = useState(true); // State to toggle the icon

  const toggleIcon = () => {
    setIsSunIconVisible(!isSunIconVisible);
    toggleDarkMode(); // Call the toggleDarkMode function on button click
  };

  return (
    <nav className="flex gap-5 p-7 bg-light_bg_dim items-center justify-center top-0 sticky z-10 w-full">
      <div className="flex items-center justify-center">
        <Link href={"/"}>
          <div className="flex gap-1 cursor-pointer px-10 items-center justify-center">
            <Image
              src="/images/bg.jpg"
              alt="logo image"
              width={48}
              height={48}
              className="flex flex-col justify-center items-center object-cover rounded-full w-12 h-12 border-2 border-primary transition-all duration-1000 ease-in-out"
            />

            <div className="font-bold font-clicker text-2xl">
              M.i
              <span className="text-primary transition-all duration-300">
                .N.t
              </span>
            </div>
          </div>
        </Link>
      </div>

      <div className="flex items-center justify-center px-10">
        <Link
          href={"/"}
          className="font-semibold text-lg hover:text-primary transition-all duration-300">
          Home
        </Link>
      </div>

      <div className="flex items-center justify-center px-10">
        <button
          className="flex items-center justify-center w-8 h-8 text-primary hover:text-secondary cursor-pointer transition-all duration-300"
          onClick={toggleIcon}
          name="light_dark_toggler">
          {isSunIconVisible ? (
            <BsFillMoonStarsFill className="w-6 h-6" />
          ) : (
            <FaSun className="w-6 h-6" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
