import React, { Component } from "react";
// import "./App.css";
import Todos from "./Todos";
import ViewToggle from "./ViewToggle";
// import ViewToggle from '@pluralsight/ps-design-system-viewtoggle'
export default class TodoList extends Component {
  state = {
    todos: ["Wash Clothes", "Press Items"],
    showDone: false
  };

  handleDone = todo => {
    const todos = [...this.state.todos];
    const index = todos.indexOf(todo);
    const putData = {
      method: "PUT",
      body: JSON.stringify({ done: !todo.done }),
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch("/todos/" + todo.id, putData)
      .then(response => response.json())
      .then(({ todo }) => {
        todos[index] = { id: todo.id, task: todo.task, done: todo.done };
        this.setState({ todos });
      })
      .catch(error => console.log(error));
  };

  handleAddTodo = task => {
    const todos = [...this.state.todos];
    const postData = {
      method: "POST",
      body: JSON.stringify({ task: task }),
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch("/todos/", postData)
      .then(response => response.json())
      .then(({ todo }) => {
        todos.push({ id: todo.id, task: todo.task, done: todo.done });
        this.setState({ todos, showDone: false });
      })
      .catch(error => console.log(error));
  };

  handleRemoveTodo = todo => {
    const deleteData = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch("/todos/" + todo.id, deleteData)
      .then(response => response.json())
      .then(data => {
        if (data.code === 200) {
          const todos = this.state.todos.filter(td => td !== todo);
          this.setState({ todos });
        }
      })
      .catch(error => console.log(error));
  };

  handleViewToggle = bool => this.setState({ showDone: bool });

  todosSelector = () => {
    if (this.state.showDone) {
      const todos = this.state.todos.filter(td => td.done);
      return todos
    }
    else {
     const todos= this.state.todos.filter(td => td.done === false);
    return todos
    }
  };

  componentDidMount() {
    fetch("/todos/")
      .then(response => response.json())
      .then(data => this.setState({ todos: data }))
      .catch(error => console.log(error));
  }

  render() {
    return (
       <>
      <div className="container-fluid mt-5">
        <div className="row justify-content-center">
          <div className="col-8">
            <div className="card text-center">
              <div className="card-header">
                <ul className="nav card-header-pills justify-content-center">
                  <li className="nav-item">
                    <ViewToggle
                      handleViewToggle={this.handleViewToggle}
                      showDone={this.state.showDone}
                    />
                   
                  </li>
                </ul>
              </div>
              <Todos
                todos={this.todosSelector()}
                handleDone={this.handleDone}
                handleRemoveTodo={this.handleRemoveTodo}
                handleAddTodo={this.handleAddTodo}
              />
            </div>
          </div>
        </div>
        </div>
        </>
    );
  }
}
// import React, { useEffect, useState } from "react";
// import { Button } from '@material-ui/core';
// import { FormControl,Input,InputLabel } from '@material-ui/core';
// import Todo from "./Todo"
// import "./TodoList.css";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { makeStyles } from '@material-ui/core/styles';
// const useStyles = makeStyles((theme) => ({
//  spans: {
//     // position: 'absolute',
//     // width: 400,
//     // backgroundColor: theme.palette.background.paper,
//     // border: '2px solid #000',
//     // boxShadow: theme.shadows[5],
//     // padding: theme.spacing(2, 4, 3),
//     "padding-top": "15px",
//     "padding-bottom": "15px",
//     "color": "red",
//      "text-align":"left"
//   },
//   spaces: {
//     "padding-bottom": "5px",
//   },
//   heading: {
//     "padding-bottom":"15px"
//   }
// }));
// function TodoList() {
//    const classes = useStyles();
//   const [todos, setTodos] = useState(["Wash clothes","Read a book"]);
//   const [input, setInput] = useState("");
//    const [startDate, setStartDate] = useState(new Date());
//   const addTodo = (e) => {
//     e.preventDefault();
//     setTodos([...todos, input]);
//     setInput("");
//   }
//   return (
//     <div className="App">
//     <h1 className={classes.heading}>TODOS</h1>
//       <form>
//         <FormControl>
//           <InputLabel className={classes.spaces}>Write a todo</InputLabel>
//   <Input className={classes.space} value={input} onChange={(e)=>(setInput(e.target.value))}/>
//   <span className={classes.spans}>Set a Deadline </span>
//           <DatePicker selected={startDate} defaultValue={new Date(2018, 1, 20)} required={true} onChange={date => setStartDate(date)} />
//         </FormControl>
//              <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary" >
//   Add Todo
//         </Button>     
//       </form>
//        <ul>
//         {todos.map((todo) => (
//           <Todo todo={todo}/>
//         ))}
//       </ul> 
//     </div>
//   )
// }
// export default TodoList