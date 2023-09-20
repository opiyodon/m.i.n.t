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
            className="flex justify-between gap-5 items-start w-[500px] bg-light_bg_dim text-light_txt outline-none p-7 border-2 rounded-lg border-light_border_bright border-opacity-50"
          >
            <div>
              <h2 className="font-bold text-2xl text-primary">{t.title}</h2>
              <div>{t.description}</div>
            </div>

            <div className="flex gap-2">
              <RemoveBtn id={t._id} />
              <Link
                href={`/editTodo/${t._id}`}
                className="text-primary hover:text-secondary transition-all duration-300 ease-in-out"
              >
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p>No todos found.</p>
      )}
    </>
  );
}

export default Todos;
