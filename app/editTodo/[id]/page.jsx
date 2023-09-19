import EditTodoForm from '/components/EditTodoForm';

/** ========================== get data from database ========================== */
const getTodoById = async (id) => {
  try {
    const res = await fetch(`${API_URL}?id=${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch a todo");
    }
    return res.json();
  }
  catch (error) {
    console.log(error);
    return null; // Return null in case of an error
  }
}
/** ========================== get data from database ========================== */

async function EditTodo({ params }) {

  /** ========================== get data from database ========================== */
  const { id } = params;
  const result = await getTodoById(id);
  
  // Check if 'result' contains 'todo'
  const { todo } = result || {};
  
  // Check if 'todo' exists before destructuring it
  const { title, description } = todo || {};
  /** ========================== get data from database ========================== */

  return (
    <div className="min-h-[82vh] w-[100%] flex gap-28 justify-center p-10">
      <EditTodoForm id={id} title={title} description={description} />
    </div>
  )
}

export default EditTodo;
