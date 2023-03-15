import { Box, Button, CardContent, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useContext } from "react";
import { ReloadContext } from "../pages/Profile/Profile";

function FriendData(props: {data: string}) {

    const obj = JSON.parse(JSON.stringify(props.data));
    const {reload, setReload} = useContext(ReloadContext)

    // フレンド削除
    const removeFriend = async () => {
        const res = await axios.delete('removefriend', {params: {
            user_id: obj.UserId,
            friend_id: obj.FriendId
        }})
        setReload(reload+1)
        console.log(res.data)  
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