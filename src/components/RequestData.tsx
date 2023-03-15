import { Box, CardContent, Typography, Button, Grid } from "@mui/material";
import axios from "axios";
import { useContext } from "react";
import { ReloadContext } from "../pages/Profile/Profile";

function RequestData(props: {data: string}) {

    const obj = JSON.parse(JSON.stringify(props.data));
    const {reload, setReload} = useContext(ReloadContext)

    // 申請承認
    const acceptRequest = async () => {
        const res = await axios.post('sendfriend', {
            user_id: obj.FriendId,
            friend_id: obj.UserId
        })
        setReload(reload+1)
        console.log(res.data)
    }

    // 申請削除
    const rejectRequest = async () => {
        const res = await axios.delete('removefriend', {params: {
            user_id: obj.UserId,
            friend_id: obj.FriendId
        }})
        setReload(reload+1)
        console.log(res.data)  
    }
    
    return (
        <Box
            sx={{
                height: '10rem',
                width: '30rem',
                opacity: 0.9,
            }}
            style={{ backgroundColor: "#FFFCEF" }}
        >
            <Box sx={{ margin:"5%", borderRadius: "5%" }} style={{ backgroundColor:"#FFFFFF" }}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={7}>
                            <Typography>
                                {obj.UserId}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Button 
                                variant="contained"
                                sx={{ m: "10% 10%", height: "80%", width: "10%", textAlign:"center", justifyContent: "center", alignItems: "center", display:"flex" }} 
                                style={{ backgroundColor: "#388e3c" }}
                                onClick={ acceptRequest }
                            >承認</Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button 
                                variant="contained"
                                sx={{ m: "10% 10%", height: "80%", width: "10%", textAlign:"center", justifyContent: "center", alignItems: "center", display:"flex" }} 
                                style={{ backgroundColor: "#e94709" }}
                                onClick={ rejectRequest }
                            >削除</Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Box>
            {obj.UserId}
        </Box>
    )
}

export default RequestData