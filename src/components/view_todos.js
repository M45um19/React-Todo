import React from "react";

function ViewTodos(props) {
    const handleDelete = (id)=> {
        props.deleteId(id)
    }
  return (
    <div>
      {props.allTodos.map((todo, index) => (
        <div key={index}>
          <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title">{todo.title}</h5>
              <p className="card-text">{todo.description}</p>

              <button className="btn btn-danger" onClick={()=>handleDelete(index)}>Delete</button>

            </div>
          </div>
          <hr style={{ width: '18rem' }}/>
        </div>
      ))}
    </div>
  );
}

export default ViewTodos;