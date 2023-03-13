import { Box, Button, Card, CardActions, CardContent, CardHeader, TextField } from "@mui/material";
import { useState } from "react";
  
export const SignUp = () => {

    const cardStyle = {
      display: "block",
      transitionDuration: "0.3s",
      height: "500px",
      width: "400px",
      variant: "outlined",
    };

    const [name, setName] = useState('')
    const [userID, setUserID] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    const clickSignUp = () => {
      console.log(name)
      console.log(userID)
      console.log(password)
      console.log(passwordConfirmation)
    }
  
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        padding={20}
      >
        <Card style={cardStyle}>
          <CardHeader title="SignUp" />
          <CardContent>
            <div>
            <TextField
                fullWidth
                required
                id="name"
                label="Name"
                placeholder="Name"
                margin="normal"
                onChange={((e)=>{setName(e.target.value)})}
              />
              <TextField
                fullWidth
                required
                id="userID"
                label="UserID"
                placeholder="UserID"
                margin="normal"
                onChange={((e)=>{setUserID(e.target.value)})}
              />
              <TextField
                fullWidth
                required
                id="password"
                type="password"
                label="Password"
                placeholder="Password"
                margin="normal"
                onChange={((e)=>{setPassword(e.target.value)})}
              />
              <TextField
                fullWidth
                required
                id="password_confirmation"
                type="password"
                label="Password Confirmation"
                placeholder="Password Confirmation"
                margin="normal"
                onChange={((e)=>{setPasswordConfirmation(e.target.value)})}
              />
            </div>
          </CardContent>
          <CardActions>
            <Button 
              variant="contained"
              size="large"
              color="secondary"
              onClick={clickSignUp}
            >
              Go
            </Button>
          </CardActions>
        </Card>
      </Box>
    );
    
};