const RemoveBtn = () => {

  /** ========================== delete data from database ========================== */

  const removeTodo =async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/todos?id=${10}`, {
        method: "DELETE",
      });
    }
  };

  /** ========================== delete data from database ========================== */

  return (
    <button onClick={removeTodo} className="text-red-400  hover:text-red-600 transition-all duration-300 ease-in-out">
        Del
    </button>
  )
}

export default RemoveBtn