import EditTodoForm from '/components/EditTodoForm';

function EditTodo({ params }) {

  /** ========================== get data from database ========================== */
  const { id } = params;

  return (
    <div className="min-h-[74vh] md:min-h-[85vh] lg:min-h-[77vh] w-[100%] flex gap-28 justify-center p-10">
      <EditTodoForm id={id} />
    </div>
  )
}

export default EditTodo;
