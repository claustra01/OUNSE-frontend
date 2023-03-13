import React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardHeader, TextField } from "@mui/material";
import { Stack } from '@mui/material';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate, Link } from 'react-router-dom';

const settings = [
    { label: 'ログアウト', link: '/sign_up'}
  ];
export function Home() {
    return (
        <>
            <div className="background-color"/>
            <AppBar position="static" style={{ backgroundColor: "#388e3c" }}>
            <Button variant="contained">SignOut</Button> 
                <Container maxWidth="xl">
                <Toolbar disableGutters>
                <Typography
                    
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ mr: 2, display: { xs: 'none', md: 'flex'} }}
                    >
                    </Typography>
                    </Toolbar>
                </Container>
                
            </AppBar>
            <Box
                sx={{
                    width: 400,
                    // height: 500,
                    backgroundColor: 'primary.dark',
                    // '&:hover': {
                    // backgroundColor: 'primary.main',
                    // opacity: [0.9, 0.8, 0.7],
                    // },
                }}
                >
    
            {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{m:"20em auto 5em auto", height: "30em", justifyContent: "center", alignItems: "center", display:"flex"}}/> */}
            <TextField id="outlined-basic" label="input" variant="outlined" sx={{m:"20em auto 5em auto", height: "20em"}}/>
            <Button variant="contained"sx={{m:"10em 5em 10em 20em ", height: "3em"}} >投稿</Button>
            </Box>
        </>
    )
}