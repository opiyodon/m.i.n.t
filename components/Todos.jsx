import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const getTodos = async () => {
  try {
    const res = await fetch(`${API_URL}/api/todos`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch todos");
    }

    return res.json();
  } catch (error) {
    console.error("Error loading todos: ", error);
    return { todos: [] }; // Return an empty array in case of an error
  }
};

async function Todos() {
  const { todos } = await getTodos();

  return (
    <>
      {todos && todos.length > 0 ? (
        todos.map((t) => (
          <div
            key={t._id} // Add a unique key for each item
            className="relative flex items-center justify-between gap-5 w-[100%] bg-light_bg_dim text-light_txt outline-none p-7 border-2 rounded-lg border-light_border_bright border-opacity-50">

            <div className="w-full">
              <h2 className="font-bold text-2xl text-primary">{t.title}</h2>
              <div>{t.description}</div>
            </div>

            <div className="flex gap-2">
              <RemoveBtn id={t._id} />
              <Link
                href={`/editTodo/${t._id}`}
                className="text-primary hover:text-secondary transition-all duration-700 ease-in-out">
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>

        ))
      ) : (
        <div className="flex flex-col items-center justify-center w-[100%] h-[240px] md:h-[400px] lg:h-[500px] bg-light_bg_dim text-light_txt outline-none p-10 md:p-20 border-2 rounded-lg border-light_border_bright border-opacity-50">
          <p className="text-secondary hover:text-primary transition-all duration-700 ease-in-out font-bold text-3xl">No todos found!</p>
        </div>
      )}
    </>
  );
}

export default Todos;
