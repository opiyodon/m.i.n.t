import CreateTodoForm from '/components/CreateTodoForm';

function CreateTodo() {
    return (
        <div className="min-h-[74vh] md:min-h-[85vh] lg:min-h-[77vh] w-[100%] flex gap-28 justify-center p-10">
            <CreateTodoForm />
        </div>
    )
}

export default CreateTodo;
