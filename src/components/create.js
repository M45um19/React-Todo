import React, { useState } from "react"

function Create(props){

    const [todo, set_todo] = useState({title: "", description: ""})

    const handleChange = (e)=> {
        set_todo({...todo, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e)=> {
        e.preventDefault()
        props.getdata(todo)
    }

    return (
        <React.Fragment>
            <div>
            <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label className="form-label">Task Title</label>
    <input name="title" value={todo.title} type="text" className="form-control" onChange={handleChange}/>
  </div>
  <div className="mb-3">
    <label className="form-label">Task Description</label>
    <input name="description" value={todo.description} type="text" className="form-control" onChange={handleChange}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
            </div>
        </React.Fragment>
    )
}

export default Create