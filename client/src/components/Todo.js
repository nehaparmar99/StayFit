import React, {  useState } from "react";
import "./Todo.css"
import { List,ListItemAvatar, ListItemText, ListItem, Button,Modal } from '@material-ui/core';
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
      const { id } = e.target.parentElement;
      console.log(id)
      // fetch("/todos/", {
      //   method="POST",
      //   headers:{
      //       "Content-type": "application/json"
      //   },
      //     body: JSON.stringify({
      //email:props.email
      //       id: id,
      //       todo:input
      //   }),
      // }).then(res => console.log(res))
      //   .catch(err => console.log(err))
      //    setOpen(false);
    //   props.todos.splice(id, 1);
    //  props.setTodo([...props.todos,input]);
    //         setOpen(false);
    //   console.log("UPDATE")
    }
   const deleteTodo = (e) => {
     const { id } = e.target.parentElement;
      console.log(id)
      // fetch("/todos/", {
      //   method="DELETE",
      //   headers:{
      //       "Content-type": "application/json"
      //   },
      //     body: JSON.stringify({
    // email:props.email,
      //       id: id,
      //   }),
      // }).then(res => console.log(res))
      //  .catch(err => console.log(err))
        setOpen(false);
    //  props.todos.splice(id, 1);
    //  props.setTodo([...props.todos]);
    //   console.log("DeletE")
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
