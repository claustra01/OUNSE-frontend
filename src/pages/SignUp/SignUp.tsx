import { Box, Button, Card, CardActions, CardContent, CardHeader, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
  
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

    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()

    const clickSignUp = async () => {
    
      // 入力エラー
      if (name === '') {
        setErrorMessage('Name is empty')
        return
      } else if (userID === '') {
        setErrorMessage('UserID is empty')
        return
      } else if (password === '') {
        setErrorMessage('password is empty')
        return
      } else if (password !== passwordConfirmation) {
        setErrorMessage('Password does not match')
        return
      }

      // 登録処理
      const res = await axios.post('signup', {
        user_id: userID,
        name: name,
        password: password
      })
      const obj = JSON.parse(JSON.stringify(res));
      console.log(obj.data)

      // エラー処理
      if (obj.data.Status === false) {
        setErrorMessage(obj.data.Message)
        return
      }

      // 成功時リダイレクト
      navigate('/login')
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
              Sign Up
            </Button>
          </CardActions>
          {errorMessage}
        </Card>
      </Box>
    );
    
};