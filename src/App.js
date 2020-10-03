import React, {useState, useEffect} from 'react';
import './App.css';
import {Button, FormControl, Input, InputLabel} from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';


function App() {
  const [Todos, setTodos] = useState([]);
  const [Entry, setEntry] = useState('');
  
  const addTodo = () => {
    db.collection('todos').add({
      task: Entry,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setEntry('');
  }

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().task))
    });
  }, []);


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
          <Todo key={i} todo={todo}/>)}
      </ul>
    </div>
  );
}

export default App;
