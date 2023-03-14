import { Box, Button, Card, CardActions, CardContent, CardHeader, TextField } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";
import { useState } from "react";

function Home() {
        const [cookie, setCookie, removeCookie] = useCookies(["token"]);
        const [title, setTitle] = useState('')
        const [post, setPost] = useState('')
        const navigate = useNavigate()
        const redirectSignOut = () => {
                removeCookie("token");
                navigate('/')
            }
        const clickPost = async () => {
            console.log(title)
            console.log(post)
        }
            
    return (
        <>
          <div className="background-color"/>
            <AppBar position="static" style={{ backgroundColor: "#CDDFD3" }}>
                < Button 
                    variant="contained" 
                    sx={{m: "1em 5em 1em 90em", 
                    justifyContent:"center", 
                    textAlign: "center"
                    }}
                    onClick={redirectSignOut}
                    style={{ backgroundColor: "#388e3c" }}
                    >SignOut
                    <TextField id="filled-basic" label="Filled" variant="filled" 
                    />
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
                   <TextField
                   required 
                   id="title" 
                   label="title" 
                   variant="standard"
                   sx={{m: "2em 3em 0 3em",
                   height: "5em",
                   width: "20em"
                }}
                onChange={((e)=>{setTitle(e.target.value)})}/>
            {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{m:"20em auto 5em auto", height: "30em", justifyContent: "center", alignItems: "center", display:"flex"}}/> */}
                <TextField 
                    required
                    multiline
                    minRows="14"
                    id="post" 
                    label="post" 
                    sx={{m:"1em 3em 2em 3em", 
                    height: "10em",
                    width: "20em",
                    }}
                    onChange={((e)=>{setPost(e.target.value)})}
                    />
                <Button 
                    variant="contained"
                    sx={{m:"14em 5em 10em 20em ", 
                    height: "3em",
                    textAlign:"center",
                    justifyContent: "center", 
                    alignItems: "center", 
                    display:"flex"
                    }} 
                    style={{ backgroundColor: "#388e3c" }}
                    onClick={clickPost}
                    >投稿</Button>
                </Box>
        </>
    )
 
}

export default Home
