// import React from "react";
// import Button from "./Button";

// const Todo = ({ todo, handleDone, handleRemoveTodo }) => {
//   return (
//     <li className="list-group-item d-flex align-items-baseline list-unstyled">
//       <input
//         type="checkbox"
//         id={"done" + todo.id}
//         className="mr-4"
//         onChange={() => handleDone(todo)}
//         defaultChecked={todo.done}
//       />
//       <label for={"done" + todo.id}>
//         {todo.done ? <s>{todo.task}</s> : todo.task}
//       </label>
//       <Button
//         className="btn btn-danger ml-auto"
//         onClick={() => handleRemoveTodo(todo)}
//       >
//         Delete
//       </Button>
//     </li>
//   );
// };

// export default Todo;
import React, { useEffect, useState } from "react";
import "./Todo.css"
import { List,Avatar,ImageIcon,ListItemAvatar, ListItemText, ListItem, Button,Modal } from '@material-ui/core';
import DeleteForeverOutlinedIcon  from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  paper: {
    "text-align":"center",
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  button:{
    "padding-left": "5px",
    "padding-right":"15px"
  },
  delete: {
    "padding-left": "25px",
    "padding-right": "15px",
    "padding-top":"5px"
  }
}));
function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState("");
    const handleOpen = () => {
        setOpen(true);
    }
    const updateTodo = (e) => {
        //update todo with new input text
        // db.collection('todos').doc(props.todo.id).set({
        //     todo:input
        // },{merge:true})
      // todo:input
       const { id } = e.target.parentElement;
      props.todos.splice(id, 1);
     props.setTodo([...props.todos,input]);
            setOpen(false);
      console.log("UPDATE")
    }
   const deleteTodo = (e) => {
        //update todo with new input text
        // db.collection('todos').doc(props.todo.id).set({
        //     todo:input
        // },{merge:true})
        //     setOpen(false);
     const { id } = e.target.parentElement;
     props.todos.splice(id, 1);
     props.setTodo([...props.todos]);
      console.log("DeletE")
    }
    return (
        <>
        <Modal
        open={open}
                onClose={e => setOpen(false)}>
                <div className={classes.paper}>
                    <h4>Edit Todo</h4>
                    <input placeholder={props.todo.todo} value={input} onChange={e=>setInput(e.target.value)}></input>
                    <Button onClick={updateTodo}>Update</Button>
                </div>
        </Modal>
        <List className="todo_list">
            <ListItem>
                <ListItemAvatar>       
                </ListItemAvatar>
                <ListItemText primary={props.todo} secondary="Deadline" />
          </ListItem>
          <Button variant="outlined" color="secondary"  onClick={e=>setOpen(true)} className="{classes.button}">Edit Me</Button>
          <span className={classes.delete}>    
          <DeleteForeverOutlinedIcon onClick={deleteTodo} fontSize="large"  />
           </span> </List>
            </>
    )
}

export default Todo;
