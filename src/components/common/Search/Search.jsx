import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import './search.css'
import { SearchContext } from '../../../context/SearchContext';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [inputSearchValue, setInputSearchValue] = useState('');
    const {setSearchTerm} = useContext(SearchContext);
    const navigation = useNavigate();
    
    const handleSearch = () => {
        setSearchTerm(inputSearchValue);
        navigation('/');
    }

    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            handleSearch();
        }
    }

  return (
    <div className='searchContainer'>
      <TextField
        sx={{
          "& .MuiInputBase-input": { color: "white", paddingRight: "45px" }, 
          "& .MuiInputLabel-root": { color: "white" },
          "& .MuiInputLabel-root.Mui-focused": { color: "white" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "white" },
            "&:hover fieldset": { borderColor: "#2F2C79" },
            "&.Mui-focused fieldset": { borderColor: "#2F2C79" }
          },
        }}
        value={inputSearchValue}
        onChange={(e) => setInputSearchValue(e.target.value)}
        onKeyDown={handleKeyPress}
        id="outlined-basic" 
        label="Buscar titulo..." 
        variant="outlined" 
      />
      <button className='iconSearch' onClick={handleSearch} >
        <SearchIcon sx={{ color: 'white' }} />
      </button>
    </div>
  );
}

export default Search;
