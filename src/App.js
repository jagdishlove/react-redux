import './App.css';
import React from 'react';
import { TextField, Typography, makeStyles, Button, Box } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoAction, RemoveTodoAction } from './actions/TodoActions';
import { v4 } from 'uuid';

const useStyle = makeStyles({
  inputfiled: {
    marginTop: '1em',
    width: '20%',
    minWidth: '500px',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: 0,
    fontWeight: 500,

  },
  input: {
    background: 'white',
    border: "1px solid #ccc",
    borderRadius: '1em',

  },
  button: {
    marginTop: '1em',
  }
});

function App() {
  const classes = useStyle();
  const [inputValue, setInputValue] = React.useState([
    {
      id: '',
      todo: '',
    }
  ]);
  const dispatch = useDispatch();
  const Todo = useSelector(state => state.Todo);



  const { todos } = Todo;
  console.log("this is todo", todos)
  const handleChange = (value) => {
    setInputValue({ id: v4(), todo: value });

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.todo.length !== 0) {
      dispatch(AddTodoAction(inputValue));
      setInputValue({ id: '', todo: '' });
    }
    return console.log("this is notttt")
  }

  const handleDelete = (item) => {
    dispatch(RemoveTodoAction(item))
  }

  return (
    <div className="App">
      <header className="App-header">
        <Typography variant='h3' sx={{ fontWeight: "500" }}>
          Todo List App in Redux
        </Typography>
        <TextField
          value={inputValue.todo}
          onChange={(e) => handleChange(e.target.value)}
          placeholder='Enter Todo'
          variant='outlined'
          className={classes.inputfiled}
          InputProps={{
            className: classes.input,
          }}>
        </TextField>
        <Button onClick={(e) => handleSubmit(e)} variant='contained' color='primary' className={classes.button}>
          Add
        </Button>

        {
          todos && todos.map(item => {
            return (
              <Box key={item.id} display={'flex'} sx={{ justifyContent: 'space-between', background: 'skyblue', borderRadius: '1em', minWidth: '500px' }} p={2} alignItems={'center'} mt={5}>
                <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
                  <li>
                    <Typography variant='h5' color='white' sx={{ fontWeight: "500" }}>
                      {item.todo}
                    </Typography>
                  </li>
                </ul>
                <Button onClick={() => handleDelete(item)} variant='contained' color='secondary'>Delete</Button>
              </Box>
            )
          })}

      </header>
    </div>
  );
}

export default App;
