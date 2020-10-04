import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import BrushIcon from '@material-ui/icons/Brush';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, Input, ListItem, List, ListItemText, Button, Modal } from '@material-ui/core'; 
import React, { useState} from 'react';
import './Todo.css';
import db from './firebase';

const useStyles = makeStyles((theme) => ({
    paper: {
        margin: '20px auto',
        width: 800,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const styleText = {
    backgroundColor:'white',
    textAlign:'center',
    borderRadius:'10px'
}

function Todo({todo}) {
    const [Open, setOpen] = useState(false);
    const classes = useStyles();
    const [input, setInput] = useState('');

    const updateTodo = ()=>{
        
        db.collection('todos').doc(todo.id).set({
            task:input
        },{merge:true});

        setOpen(false);
    }

    return (
        
        <React.Fragment>
        <Modal open={Open} onClose={e=>setOpen(false)}>
            <div className={classes.paper}>
                <h1>Update To-do</h1>
                <FormControl>
                    <InputLabel>Update a To-do</InputLabel>
                    <Input placeholder={todo.task} onChange={e=>setInput(e.target.value)}/>
                </FormControl>
                <Button variant="contained" color="primary" onClick={ updateTodo }>Update</Button>
            </div>
        </Modal>
        <List className="todo__list">
            <ListItem>
                <ListItemText primary={ todo.task } style={styleText}/>
            </ListItem>
            <BrushIcon onClick={ e => setOpen(true)}>Edit </BrushIcon>
            <DeleteForeverIcon onClick={event => {
                db.collection('todos').doc(todo.id).delete()
            }}></DeleteForeverIcon>
        </List> 
        </React.Fragment>
        
    )
}

export default Todo
