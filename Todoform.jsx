import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import { InputAdornment } from '@mui/material';
import IconButton from '@mui/material/IconButton';

export default function TodoForm({addTodo}){
    const[text, setText]=useState("");
    const handleChange=(evt)=>{
        setText(evt.target.value)

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        addTodo(text);
        setText("");
    }
    return(
        <ListItem>
            <form onSubmit={handleSubmit}> 
            <TextField 
            id="outlined-basic" 
            label="Add New" 
            variant="outlined" 
            onChange={handleChange} 
            value={text} 
            color="success" 
            focused
            InputProps={{
                endAdornment: (<InputAdornment position="end">
                <IconButton
                 aria-label="create todo"
                 edge="end"
                 color="success"
                 type="success"
                 >
                
                  <CreateIcon />
                </IconButton>
              </InputAdornment>
    )
            
            }}
            />
             </form> 
            </ListItem>


                
    )
}
