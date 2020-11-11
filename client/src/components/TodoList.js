import React, { useEffect, useState } from "react";
import { Button } from '@material-ui/core';
import { FormControl,Input,InputLabel } from '@material-ui/core';
import Todo from "./Todo"
import "./TodoList.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Datepicker from 'react-datepicker';
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
const useStyles = makeStyles((theme) => ({
 space: {
    // position: 'absolute',
    // width: 400,
    // backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    // boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
    "padding-top": "15px",
    "padding-bottom": "15px",
    "color": "red",
     "text-align":"left"
  },
  spaces: {
    "padding-bottom": "5px",
  },
  heading: {
    "padding-bottom":"15px"
  }
}));
function TodoList(props) {
   const classes = useStyles();
  const [todos, setTodos] = useState(["wash clothes","read a book"]);
  const [input, setInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
 
  useEffect(() => {
    console.log("todolist ", props.email)
    axios.get("/todos", {
      params: {
        "email":localStorage.getItem("email")
      }
    })
      .then(res => console.log(res))
    .then(data => {
     setTodos(data.map(d => (
    {
    id: d.id,
   todo:d.todo
  }
)))
    console.log(data)
  })
    .catch(err=>console.log(err))
    // fetch(`/todos?email=${props.email}`)
    //   .then(res => {
    //     console.log(res);
       
    //   })
    //   .then(res=>console.log(res))
    // .then(err=>console.log(err))
  }, []
  )


  const addTodo = (e) => {
    e.preventDefault();
     console.log(JSON.stringify(startDate))
     
    fetch("/todos", {
      method: "POST",
       headers: {
          "Content-type": "application/json"
        }, 
      body: JSON.stringify({
        email: localStorage.getItem("email"),
        // date:JSON.stringify(startDate),
         task:input
        }),
    }) 
    .then(res => console.log(res))
    .catch(err => console.log(err));
    // setTodos([...todos, input]);
    setInput("");
  }
  
 const handleChange = date => {
   setStartDate(date);
  }

  return (
    <div className="App">
    <h1 className={classes.heading}>TODOS</h1>
      <form>
        <FormControl>
          <InputLabel className={classes.spaces}>Write a todo</InputLabel>
  <Input className={classes.space} value={input} onChange={(e)=>(setInput(e.target.value))}/>
          <span className={classes.span}>Set a Deadline </span>
           <Datepicker
     selected={startDate}
            onChange={handleChange}
            defaultValue={new Date(2018, 1, 20)}
              name="startDate"
              dateFormat="MM/dd/yyyy"
    />
        </FormControl>
             <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary" >
  Add Todo
        </Button>     
      </form>
       <ul>
        {todos.map((todo) => (
            <Todo todo={todo} key={todo.id} setTodo={setTodos} todos={todos} email={props.email} />
        ))}
      </ul> 
    </div>
  )
}
export default TodoList