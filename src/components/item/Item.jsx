import "./item.css"

function Item({id,todo,isComplated,chec,del,edit}) {
  return (
    <li className="item list-group-item d-flex align-items-center">
        <input className="checked form-check mx-2" type="checkbox" checked={isComplated } onChange={() =>chec(id)} />
        <p className={`text m-0 flex-grow-1 text-center fs-4 ${isComplated? "text-decoration-line-through":"" }`}>{todo}</p>
        <button className="btn btn-warning mx-3" data-id={id} onClick={() => edit(id)} >edit</button>
        <button className="btn btn-danger" data-id={id} onClick={() =>del(id)}>delete</button>
    </li>
  )
}

export default Item