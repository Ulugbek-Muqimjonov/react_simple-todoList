import "./form.css"

function Form({setTodos}) {
    const added = (evt) => {
        evt.preventDefault()
        setTodos(prev => [...prev, {
            id:prev.at(-1).id? prev.at(-1).id+1:1,
            value:evt.target[0].value.trim(),
            isComplated:false
          }])
    }
  return (
    <form className="form form-control w-25 d-flex align-items-center gap-3 shadow p-4 my-3" onSubmit={added}>
        <input className="form-control" type="text" name="user_todo" placeholder="todo..." />
        <button className="btn btn-success">add</button>
    </form>
  )
}

export default Form