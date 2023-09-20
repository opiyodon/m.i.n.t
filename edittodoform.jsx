"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

function EditTodoForm({ id }) {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    if (id) {
      // Fetch data using the id from the route
      fetch(`${API_URL}/api/todos/${id}`, {
        // Assuming your API URL is structured like this
        cache: "no-store",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch todo");
          }
          return response.json();
        })
        .then((data) => {
          // Debugging: Log the response data
          console.log("Response Data:", data);
  
          // Destructure the _id, title, and description from the data received
          const { _id, title, description } = data.todo;
  
          // Now you can use _id, title, and description as needed
          setNewTitle(title);
          setNewDescription(description);
        })
        .catch((error) => {
          console.error("Error loading todo: ", error);
        });
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newTitle || !newDescription) {
      setError("Title and Description are required.");
      return;
    }

    try {
      const res = await fetch(`/api/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          newTitle,
          newDescription,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/");
      } else {
        setError("Failed to update Todo");
      }
    } catch (error) {
      console.error(error);
    }
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
            Edit Todo
          </h1>
        </div>

        <div className="flex items-center justify-center">
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            type="text"
            placeholder="Enter Todo Title"
            className="w-[100%] bg-light_bg_dim text-light_txt outline-none h-10 p-3 border-2 rounded-lg border-light_border_bright border-opacity-50 focus:border-primary"
          />
        </div>

        <div className="flex items-center justify-center">
          <input
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            type="text"
            placeholder="Enter Todo Description"
            className="w-[100%] bg-light_bg_dim text-light_txt outline-none h-10 p-3 border-2 rounded-lg border-light_border_bright border-opacity-50 focus:border-primary"
          />
        </div>

        <div className="flex items-center justify-center pt-5">
          <button
            type="submit"
            className="py-3 px-16 text-black rounded-full bg-primary font-bold hover:bg-secondary transition-all duration-300 ease-in-out">
            Update Todo
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditTodoForm;
