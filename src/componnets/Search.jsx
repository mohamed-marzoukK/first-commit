
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
function Search() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchIconClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
       
      {isSearchOpen && (
        <TextField
          id="search"
          label="Rechercher"
          variant="standard"
          
        />
        
      )}
      <SearchIcon onClick={handleSearchIconClick} />
  </div>
  )
}

export default Search