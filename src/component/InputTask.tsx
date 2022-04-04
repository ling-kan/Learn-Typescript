
import { styled, } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import { InputBase, Box, IconButton } from '@mui/material';
import React, { useRef } from 'react';

const Input = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  borderColor: theme.palette.primary.main,
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: '55vh',
    margin: 'auto'
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 0, 1, 1),
    // vertical padding + font size from searchIcon
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '40vh',
      '&:focus': {
        width: '43vh',
      },
    },
  },
}));

interface Props {
  todo: string;
  setToDo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const InputTask: React.FC<Props> = ({ todo, setToDo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={(e) => {
      handleAdd(e);
      inputRef.current?.blur();
    }} >
      <Input border={1} >
        <StyledInputBase
          ref={inputRef}
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          type="input"
          value={todo}
          onChange={(e) => setToDo(e.target.value)}
        />
        <IconButton aria-label="delete" size="small" type="submit" color="primary">
          <AddIcon fontSize="large" />
        </IconButton>
      </Input>
    </form>
  );
}
export default InputTask;