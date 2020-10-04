import { ListItem, List, ListItemText, ListItemAvatar, Button } from '@material-ui/core'; 
import React from 'react';
import './Todo.css';
import db from './firebase';

function Todo({todo}) {
    
    return (
        <div>
            <List className="todo__list">
                <ListItem>
                    <ListItemText primary={ todo.task } secondary="Dummy timestamp"/>
                </ListItem>
                <Button variant="contained" color="secondary" onClick={event => {
                    db.collection('todos').doc(todo.id).delete()
                }}>Delete</Button>
            </List> 
        </div>
    )
}

export default Todo
