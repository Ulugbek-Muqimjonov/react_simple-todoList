import Item from "../item/Item";
import "./list.css";

function List({ todos, setTodos }) {
    const chec = (id) => {
        const find = todos.find(item => item.id === id)
        find.isComplated = !find.isComplated
        setTodos([...todos])
    }
    const del = (id) => {
        const deleted = todos.findIndex(item => item.id === id);
        todos.splice(deleted,1)
        setTodos([...todos])   
    }
    const edit = (id) => {
        const edited = todos.find(item => item.id === id);
        const newVal =prompt(`taxrirlang`,edited.value);
        edited.value = newVal;
        setTodos([...todos]) 
    }
  return <>
    {todos.length? (<ul className="list list-group w-50 my-3 shadow-lg">
        {todos.map(item => <Item key={item.id} id={item.id}  todo ={item.value} isComplated={item.isComplated} chec={chec} del={del} edit={edit}/>)}
    </ul>):`Hali todolar yo'q`}
  </>;
}

export default List;
