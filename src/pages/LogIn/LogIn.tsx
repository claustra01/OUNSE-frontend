import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    TextField,
  } from "@mui/material";
  import { memo } from "react";
  import { useState } from 'react'
  import axios from 'axios'
  import { redirect } from 'react-router'
  import { DEFAULT_MAX_VERSION } from "tls";
  import React from "react";

  
  export const LogIn = memo(() => {
     const cardStyle = {
      display: "block",
      transitionDuration: "0.3s",
      height: "450px",
       width: "400px",
       variant: "outlined",
     };

        const [value, setValue] = useState('');
        const [userID, setUserID] = useState('');
        const [password, setPassword] = useState('');
        



    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        padding={20}
      >
        <Card style={cardStyle}>
          <CardHeader title="LogIn" />
          <CardContent>
            <div>
              <TextField
                fullWidth
                id="userID"
                type="userID"
                label="UserID"
                placeholder="UserID"
                margin="normal"
                onChange={(e) => setUserID(e.target.value)}
              />
              <TextField
                fullWidth
                id="password"
                type="password"
                label="Password"
                placeholder="Password"
                margin="normal"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </CardContent>
          <CardActions>
            <div className="Button">
                <div className="loginButton">
                    <Button variant="contained" size="large" color="secondary" onClick={(e) => console.log(e.currentTarget.value)}>
                    GO
                    </Button>
                </div>
            </div>
          </CardActions>
        </Card>
      </Box>
      
    );
  })