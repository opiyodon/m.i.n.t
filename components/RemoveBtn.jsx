import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation"; // Import 'next/navigation'

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const RemoveBtn = ({ id }) => {
  const router = useRouter(); // Initialize the router inside the component function

  /** ========================== delete data from database ========================== */

  const removeTodo = async () => {
    try {
      const res = await fetch(`${API_URL}?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh(); // Refresh the page
      } else {
        throw new Error("Failed to delete todo");
      }
    } catch (error) {
      console.error("Error deleting todo: ", error);
      // Handle error, e.g., by displaying an error message to the user.
    }
  };

  /** ========================== delete data from database ========================== */

  return (
    <button
      onClick={removeTodo}
      className="text-red-400 hover:text-red-600 transition-all duration-300 ease-in-out"
    >
      <HiOutlineTrash size={24} />
    </button>
  );
};

export default RemoveBtn;
