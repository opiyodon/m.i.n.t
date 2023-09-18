import EditTodoForm from '/components/EditTodoForm';

/** ========================== get data from database ========================== */
{/*const getTodoById = async (id) => {
  try {
    const res = await fetch(`https://localhost:3000/api/todos/${10}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch a todo");
    }
    return res.json();
  }
  catch (error) {
    console.log(error);
  }
}*/}
/** ========================== get data from database ========================== */

function EditTodo() {

  /** ========================== get data from database ========================== */
  {/*const { id } = params;
  const { todo } = await getTodoById(10);
const { title, description } = todo;*/}
  /** ========================== get data from database ========================== */

  return (
    <div className="min-h-[82vh] w-[100%] flex gap-28 justify-center p-10">
      <EditTodoForm />
    </div>
  )
}

export default EditTodo;
