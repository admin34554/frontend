// components/Navbar.js

import React from 'react';
import { Box, InputBase, Typography, IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: '10px 20px',
        borderRadius: '8px',
        boxShadow: 1,
      }}
    >
      {/* Search Box */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#f1f3f4',
          padding: '5px 10px',
          borderRadius: '20px',
          width: '300px',
        }}
      >
        <SearchIcon sx={{ mr: 1, color: '#888' }} />
        <InputBase
          placeholder="Search"
          inputProps={{ 'aria-label': 'search' }}
          fullWidth
        />
      </Box>

      {/* Right-side icons */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
          Admin
        </Typography>
      </Box>
    </Box>
  );
};

export default Navbar;
