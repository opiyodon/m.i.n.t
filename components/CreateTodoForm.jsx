"use client";

import { useState } from 'react';

function CreateTodoForm() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !description) {
            alert('Title and Description are required.');
            return;
        }

        /** ========================== post data from database ========================== */
        fetch('/api/todos', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ title, description }),
        })
            .then((res) => {
                if (res.ok) {
                    // Handle success
                    console.log('Todo added successfully');
                    // You can redirect here if needed
                } else {
                    // Handle failure
                    throw new Error('Failed to create Todo');
                }
            })
            .catch((error) => {
                console.error(error);
            });
        /** ========================== post data from database ========================== */

    };

    return (
        <div className="p-20">

            <form
                onSubmit={handleSubmit}
                action=""
                method="POST"
                className="flex flex-col gap-4 items-center justify-center w-[500px] h-[100%] bg-light_bg_dim text-light_txt outline-none p-16 border-2 rounded-lg border-light_border_bright border-opacity-50 focus:border-primary"
            >
                <div className="flex items-center justify-center">
                    <h1 className="text-2xl font-semibold text-primary pb-4">
                        Create Todo
                    </h1>
                </div>

                <div className="flex items-center justify-center">
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Enter Todo Title"
                        className="w-[100%] bg-light_bg_dim text-light_txt outline-none h-10 p-3 border-2 rounded-lg border-light_border_bright border-opacity-50 focus:border-primary"
                    />
                </div>

                <div className="flex items-center justify-center">
                    <input
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        type="text"
                        name="description"
                        id="description"
                        placeholder="Enter Todo Description"
                        className="w-[100%] bg-light_bg_dim text-light_txt outline-none h-10 p-3 border-2 rounded-lg border-light_border_bright border-opacity-50 focus:border-primary"
                    />
                </div>

                <div className="flex items-center justify-center pt-5">
                    <button
                        type="submit"
                        className="py-3 px-16 text-black rounded-full bg-primary font-bold hover:bg-secondary transition-all duration-300 ease-in-out"
                    >
                        Add Todo
                    </button>
                </div>

            </form>

        </div>
    )
}

export default CreateTodoForm;