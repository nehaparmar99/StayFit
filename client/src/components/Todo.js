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
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState("");
    const handleOpen = () => {
        setOpen(true);
    }
    const updateTodo = () => {
        //update todo with new input text
        // db.collection('todos').doc(props.todo.id).set({
        //     todo:input
        // },{merge:true})
        //     setOpen(false);
      console.log("UPDATE")
    }
   const deleteTodo = () => {
        //update todo with new input text
        // db.collection('todos').doc(props.todo.id).set({
        //     todo:input
        // },{merge:true})
        //     setOpen(false);
      console.log("DeletE")
    }
    return (
        <>
        <Modal
        open={open}
                onClose={e => setOpen(false)}>
                <div className={classes.paper}>
                    <h1>Open</h1>
                    <input placeholder={props.todo.todo} value={input} onChange={e=>setInput(e.target.value)}></input>
                    <Button onClick={updateTodo}>Update</Button>
                </div>
        </Modal>
        <List className="todo_list">
            <ListItem>
                <ListItemAvatar>       
                </ListItemAvatar>
                <ListItemText primary={props.todo} secondary="Dummy deadline" />
            </ListItem>
           <button onClick={e=>setOpen(true)}>Edit Me</button>
                <DeleteForeverIcon onClick={deleteTodo} />
            </List>
            </>
    )
}

export default Todo;
