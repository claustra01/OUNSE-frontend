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
  
  export const LogIn = memo(() => {
    const cardStyle = {
      display: "block",
      transitionDuration: "0.3s",
      height: "450px",
      width: "400px",
      variant: "outlined",
    };
  
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
              />
              <TextField
                fullWidth
                id="password"
                type="password"
                label="Password"
                placeholder="Password"
                margin="normal"
              />
            </div>
          </CardContent>
          <CardActions>
            <div className="Button">
                <div className="loginButton">
                    <Button variant="contained" size="large" color="secondary">
                    GO
                    </Button>
                </div>
            </div>
          </CardActions>
        </Card>
      </Box>
    );
  });
