import { Box, Button, Card, CardActions, CardContent, CardHeader, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useCookies } from "react-cookie";
import axios from "axios";

function LogIn() {

    const cardStyle = {
      display: "block",
      transitionDuration: "0.3s",
      height: "450px",
      width: "400px",
      variant: "outlined",
    };

    const [userID, setUserID] = useState('');
    const [password, setPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()

    const [cookie, setCookie] = useCookies(['token']);

    const clickLogIn = async () => {
      
      // 入力エラー
      if (userID === '') {
        setErrorMessage('UserID is empty')
        return
      } else if (password === '') {
        setErrorMessage('password is empty')
        return
      }

      // ログイン処理
      const res = await axios.post('login', {
          user_id: userID,
          password: password
      })
      const obj = JSON.parse(JSON.stringify(res));
      console.log(obj.data)

      // エラー処理
      if (obj.data.Result === 'Failed') {
        setErrorMessage(obj.data.Message)
        return
      }

      // 成功時トークン保存とリダイレクト
      setCookie('token', obj.data.Message)
      console.log(cookie)
      navigate('/home')
    }

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
                onChange={((e)=>{setUserID(e.target.value)})}
              />
              <TextField
                fullWidth
                id="password"
                type="password"
                label="Password"
                placeholder="Password"
                margin="normal"
                onChange={((e)=>{setPassword(e.target.value)})}
              />
            </div>
          </CardContent>
          <CardActions>
            <div className="Button">
              <div className="loginButton">
                <Button
                  variant="contained"
                  size="large"
                  color="secondary"
                  onClick={clickLogIn}
                >
                  Log In
                </Button>
              </div>
            </div>
          </CardActions>
          {errorMessage}
        </Card>
      </Box>
    );

}

export default LogIn