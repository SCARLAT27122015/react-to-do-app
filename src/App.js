import React, {useState} from 'react';
import './App.css';
import {Button, FormControl, FormHelperText, Input, InputLabel} from '@material-ui/core';


function App() {
  const [Todos, setTodos] = useState(['First task', 'Second task']);
  const [Entry, setEntry] = useState('');
  
  const addTodo = () => {
    setTodos([...Todos, Entry]);
    setEntry('');
  }

  return (
    <div className="App">
      <h1>To do App</h1>
      <form>
      
        <FormControl>
          <InputLabel>Enter a To-do</InputLabel>
          <Input value={ Entry } onChange={ e => setEntry(e.target.value)}/>
        </FormControl>
        
        <Button type="submit" disabled={!Entry} onClick={ addTodo } variant="contained" color="primary">
          Add todo
        </Button>
      </form>
      
      <ul>
        {Todos.map((todo,i) => 
          <li key={i}>{ todo }</li>)}
      </ul>
    </div>
  );
}

export default App;
