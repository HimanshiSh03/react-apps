import { CssBaseline } from '@mui/material';
import './App.css'
import Welcome from "./Welcome"; 
import TodoList from "./Todolist";

function App() {
return (
    <>
    <CssBaseline/>
      <Welcome/>
      <TodoList/>
    </>
  );
}

export default App;



