import Link from 'next/link';
import Todos from './Todos';

function Landing() {
  return (
    <div className="min-h-[82vh] w-[100%] flex gap-10 justify-around px-20 py-10">
      <div className="flex flex-col gap-5">
        <Todos />
      </div>

      <div
        className="flex flex-col items-center justify-center w-[500] h-[100%] bg-light_bg_dim text-light_txt outline-none p-10 border-2 rounded-lg border-light_border_bright border-opacity-50"
      >
        <Link 
          href={`/createTodo`} 
          className="text-primary hover:text-secondary p-10 transition-all duration-300 ease-in-out"
        >
          <button
            type="submit"
            className="py-3 px-16 text-black rounded-full bg-primary font-bold hover:bg-secondary transition-all duration-300 ease-in-out"
          >
            Create New Todo
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Landing;
