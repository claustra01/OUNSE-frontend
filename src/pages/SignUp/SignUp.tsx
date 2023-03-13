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
  
  export const SignUp = memo(() => {
    const cardStyle = {
      display: "block",
      transitionDuration: "0.3s",
      height: "500px",
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
          <CardHeader title="SignUp" />
          <CardContent>
            <div>
            <TextField
                fullWidth
                id="Name"
                type="Name"
                label="Name"
                placeholder="Name"
                margin="normal"
              />
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
              <TextField
                fullWidth
                id="checkpassword"
                type="checkpassword"
                label="checkPassword"
                placeholder="checkPassword"
                margin="normal"
              />
            </div>
          </CardContent>
          <CardActions>
            <Button variant="contained" size="large" color="secondary">
              Go
            </Button>
          </CardActions>
        </Card>
      </Box>
    );
  });
