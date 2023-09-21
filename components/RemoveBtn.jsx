import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation"; // Import 'next/navigation'
import { useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const RemoveBtn = ({ id }) => {
  const router = useRouter();
  const [error, setError] = useState("");

  /** ========================== delete data from database ========================== */

  const removeTodo = async () => {
    try {
      const res = await fetch(`${API_URL}/api/todos/?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh(); // Refresh the page
      } else {
        setError("Failed to delete todo");
      }
    } catch (error) {
      setError(error);
    }
  };

  /** ========================== delete data from database ========================== */

  return (
    <div className="max-w-fit">
      <button
        onClick={removeTodo}
        className="text-red-400 hover:text-red-600 transition-all duration-300 ease-in-out">
        <HiOutlineTrash size={24} />
      </button>

      {error && (
        <div className="border-secondary border-2 text-red-500 bg-light_bg_dim font-bold w-fit text-sm py-2 px-5 rounded-full absolute top-3 left-5 mt-3 z-10">
          {error}
        </div>
      )}
    </div>
  );
};

export default RemoveBtn;
