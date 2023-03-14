import { Box, Button, CardActions, CardContent, TextField, Typography } from "@mui/material";

function Post(props:{post: string}) {

    const obj = JSON.parse(JSON.stringify(props.post));

    return (
        <Box sx={{ width:"32%", marginTop:"1%", marginLeft:"1%", borderRadius: "5%" }} style={{ backgroundColor:"#FFFFFF" }}>
            <CardContent>
                <Typography>
                    <TextField
                        disabled
                        fullWidth
                        variant="standard"
                        value={obj.Title}
                    />
                </Typography>
                <Typography>
                    {obj.UserId} {obj.Time}
                </Typography>
                <Typography>
                    <TextField
                        disabled
                        fullWidth
                        multiline
                        variant="outlined"
                        value={obj.Body}
                    />
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Open</Button>
            </CardActions>
        </Box>
    )

}

export default Post