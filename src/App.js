import { useState } from "react";
import Create from "./components/create";
import ViewTodos from "./components/view_todos";

function App() {
  
  const [todos, setTodos] = useState([])

  const getData = (allData)=> {
    setTodos([...todos, allData])
  }
  
  const deletData = (id)=> {
    const updatedTodos = todos.filter((_, index) => index !== id);
    setTodos(updatedTodos);
  }

  return (
    <div>
      <Create getdata={getData}/>
      <br/>
      <ViewTodos allTodos={todos} deleteId={deletData}/>
    </div>
  );
}

export default App;
