import { ListItem, List, ListItemText, ListItemAvatar } from '@material-ui/core'; 
import React from 'react';
import './Todo.css';


function Todo({todo}) {
    return (
        <div>
            <List className="todo__list">
                <ListItem>
                    <ListItemAvatar>
                    </ListItemAvatar>
                    <ListItemText primary={todo} secondary="Dummy deadline"/>
                </ListItem>
            </List> 
        </div>
    )
}

export default Todo
