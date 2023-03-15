import { Box, Button, CardContent, Grid, Typography } from "@mui/material";

function FriendData(props: {data: string}) {

    const obj = JSON.parse(JSON.stringify(props.data));

    // フレンド削除
    const removeFriend = () => {
        
    }

    return (
        <Box sx={{ margin:"2%", borderRadius: "5%" }} style={{ backgroundColor:"#FFFFFF" }}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={10}>
                        <Typography>
                            {obj.FriendId}
                        </Typography>
                        <Typography>
                            {obj.IsRequest ? '申請中' : 'フレンド'}
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Button 
                            variant="contained"
                            sx={{ marginRight:"3%", height: "4em", width: "6em", textAlign:"center", justifyContent: "center", alignItems: "center", display:"flex" }} 
                            style={{ backgroundColor: "#e94709" }}
                            onClick={ removeFriend }
                        >削除</Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Box>
    )
}

export default FriendData