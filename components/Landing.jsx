import Link from "next/link";
import Todos from "./Todos";

function Landing() {
  return (
    <div className="min-h-screen md:min-h-[87vh] lg:min-h-[100%] w-[100%] flex flex-col lg:flex-row gap-10 md:gap-2 lg:gap-10 justify-around px-3 md:px-20 py-7">
      <div className="flex flex-col gap-5">
        <Todos />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col items-center justify-center w-[100%] lg:w-[450px] h-[240px] bg-light_bg_dim text-light_txt outline-none md:p-10 border-2 rounded-lg border-light_border_bright border-opacity-50">
          <Link
            href={`/createTodo`}
            className="text-primary hover:text-secondary md:p-10 transition-all duration-300 ease-in-out">
            <button
              type="submit"
              className="py-3 px-16 text-black rounded-full bg-primary font-bold hover:bg-secondary transition-all duration-300 ease-in-out">
              Create New Todo
            </button>
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center w-[100%] lg:w-[450px] h-[240px] bg-light_bg_dim text-light_txt outline-none p-3 md:p-10 border-2 rounded-lg border-light_border_bright border-opacity-50">
          <div className="flex gap-2">
            <span className="text-secondary text-7xl">&ldquo;</span>
            <p className="pt-3">Embrace the art of M.I.N.T : Manage, Inspire, Nurture, and Transform. With every task, cultivate the seeds of possibility, let your intentions bloom, and watch your aspirations flourish like a garden of dreams.&rdquo;</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
