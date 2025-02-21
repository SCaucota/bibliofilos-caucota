import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import "./search.css";
import { SearchContext } from "../../../context/SearchContext";
import { useNavigate } from "react-router-dom";

const Search = ({ drawer }) => {
  const [inputSearchValue, setInputSearchValue] = useState("");
  const { setSearchTerm } = useContext(SearchContext);
  const navigation = useNavigate();

  console.log(drawer)

  const handleSearch = () => {
    setSearchTerm(inputSearchValue);
    navigation("/");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div style={drawer ? {marginTop: '1rem'} : {}} className="searchContainer">
      <TextField
        sx={{
          "& .MuiInputBase-input": {
            color: drawer ? "#2F2C79" : "white",
            paddingRight: "45px",
          },
          "& .MuiInputLabel-root": { color: drawer ? '#2F2C79' : "white" },
          "& .MuiInputLabel-root.Mui-focused": { color: drawer ? '#2F2C79' : "white" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: drawer ? '#2F2C79' : "white" },
            "&:hover fieldset": { borderColor: "#2F2C79" },
            "&.Mui-focused fieldset": { borderColor: "#2F2C79" },
          },
        }}
        value={inputSearchValue}
        onChange={(e) => setInputSearchValue(e.target.value)}
        onKeyDown={handleKeyPress}
        id="outlined-basic"
        label="Buscar titulo..."
        variant="outlined"
      />
      <button style={drawer ? { top: '285px', right: '40px', backgroundColor: 'white', marginTop: '1rem' } : {}} className="iconSearch" onClick={handleSearch}>
        <SearchIcon sx={drawer ?{ color: "black" }: { color: "white" }} />
      </button>
    </div>
  );
};

export default Search;
