import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"
       style={{backgroundColor: "#0DA242", height:"40px"}}>
      </AppBar>
    </Box>
  );
}