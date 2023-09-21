import Link from "next/link"

const Footer = () => {
  return (
    <footer className="flex justify-center p-3 bg-light_bg_dim text-light_txt1">
        <p>
            &copy;2023 M.I.N.T All rights Reserved | Developed by <span className="text-primary font-semibold cursor-pointer hover:text-secondary transition-all duration-300">
              <Link
                href={"https://donartkins.vercel.app/"}
                target="_blank"
              >
              Artkins
              </Link>
            </span>
        </p>
    </footer>
  )
}

export default Footer