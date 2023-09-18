"use client";

import Link from 'next/link';
import RemoveBtn from './RemoveBtn';

/** ========================== get data from database ========================== */
const getTodos = async () => {
  try {
    const res = await fetch('https://localhost:3000/api/todos', {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch todos");
    }
    return res.json
  }
  catch (error) {
    console.log("Error loading todos: ", error);
  }
};
/** ========================== get data from database ========================== */

async function Todos() {

  /** ========================== get data from database ========================== */
  //const { todos } = await getTodos();
  /** ========================== get data from database ========================== */

  return (
    <>
      {/** ========================== display data ========================== */}
      {/*{todos.map((t) => (*/}
        <div
          className="flex justify-between gap-5 items-start w-[500px] bg-light_bg_dim text-light_txt outline-none p-7 border-2 rounded-lg border-light_border_bright border-opacity-50"
        >
          <div>
            <h2 className="font-bold text-2xl text-primary">{/*{t.title}*/}Title</h2>
            <div>{/*{t.description}*/}Description</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn /*id={t._id}*/ />
            <Link href={`/editTodo/10`} className="text-primary hover:text-secondary transition-all duration-300 ease-in-out">
              Edit
            </Link>
          </div>
        </div>
      {/*))}*/}
      {/** ========================== display data ========================== */}
    </>
  );
}

export default Todos;
