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
// import { useNavigate, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// const settings = [
//     { label: 'ログアウト', link: '/'}
//   ];

function Home() {
        const navigate = useNavigate()
        const redirectSignOut = () => {
            navigate('/')
            console.log(Home)     
    }

    return (
        <>
            <div className="background-color"/>
            <AppBar position="static" style={{ backgroundColor: "#CDDFD3" }}>
                <Button 
                variant="contained" 
                sx={{m: "1em 5em 1em 90em", 
                justifyContent:"center", 
                textAlign: "center"
                 }}
                 onClick={redirectSignOut}
                style={{ backgroundColor: "#388e3c" }}
                
                >SignOut
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
                </Button> 
            </AppBar>
            <Box
                sx={{
                    width: 400,
                    opacity: 0.9,
                }}
                style={{ backgroundColor: "#FFFCEF" }}

                >
    
            {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{m:"20em auto 5em auto", height: "30em", justifyContent: "center", alignItems: "center", display:"flex"}}/> */}
            <TextField 
            required
            multiline
            minRows="14"
            id="outlined-basic" 
            label="input" 
            sx={{m:"5em 3em 5em 3em", 
            height: "10em",
            width: "20em"
            }}/>
            <Button 
            variant="contained"
            sx={{m:"10em 5em 10em 20em ", height: "3em"}} 
            style={{ backgroundColor: "#388e3c" }}
            >投稿</Button>
            </Box>
        </>
    )
}

export default Home