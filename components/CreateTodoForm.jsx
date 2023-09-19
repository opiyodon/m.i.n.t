"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function CreateTodoForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
        setError("Title and Description are required.");
      return;
    }

    /** ========================== post data from database ========================== */
    try {
      const res = await fetch("api/todos", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/");
      } else {
        setError("Failed to create Todo");
      }
    } catch (error) {
        setError(error);
    }
    /** ========================== post data from database ========================== */
  };

  return (
    <div className="p-20">
      <form
        onSubmit={handleSubmit}
        action=""
        method="POST"
        className="flex flex-col gap-4 items-center justify-center w-[500px] h-[100%] bg-light_bg_dim text-light_txt outline-none p-16 border-2 rounded-lg border-light_border_bright border-opacity-50 focus:border-primary">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-semibold text-primary pb-4">
            Create Todo
          </h1>
        </div>

        <div className="flex items-center justify-center">
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Enter Todo Title"
            className="w-[100%] bg-light_bg_dim text-light_txt outline-none h-10 p-3 border-2 rounded-lg border-light_border_bright border-opacity-50 focus:border-primary"
          />
        </div>

        <div className="flex items-center justify-center">
          <input
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="Enter Todo Description"
            className="w-[100%] bg-light_bg_dim text-light_txt outline-none h-10 p-3 border-2 rounded-lg border-light_border_bright border-opacity-50 focus:border-primary"
          />
        </div>

        <div className="flex items-center justify-center pt-5">
          <button
            type="submit"
            className="py-3 px-16 text-black rounded-full bg-primary font-bold hover:bg-secondary transition-all duration-300 ease-in-out">
            Add Todo
          </button>
        </div>

        {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
      </form>
    </div>
  );
}

export default CreateTodoForm;
