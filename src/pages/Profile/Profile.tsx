import { Box, Button, TextField } from '@mui/material';
import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../App';
import axios from 'axios';
import Header from '../../components/Header';
import FriendList from '../../components/FriendList';

function Profile() {

    const {userId} = useContext(UserContext)

    // フレンドリクエスト
    const [friendId, setFriendId] = useState('')

    const reqFriend = async () => {
        const res = await axios.post('sendfriend', {
            user_id: userId,
            friend_id: friendId
        })
        console.log(res.data)
    }
    
    // フレンド取得
    const [friendList, setFriendList] = useState([])
    const [requestList, setRequestList] = useState([])

    useEffect(() => { 
        const getFriend = async () => {
            const res = await axios.get('getfriend', {params: {user_id: userId}})
            const obj = JSON.parse(JSON.stringify(res));
            console.log(obj.data)
            setFriendList(obj.data.FriendList)
            setRequestList(obj.data.RequestList)
        }
        if (userId !== '') getFriend()
    }, [userId])

    return (
        <>
            <Header/>
            <Box
                sx={{
                    width: '30rem',
                    opacity: 0.9,
                }}
                style={{ backgroundColor: "#FFFCEF" }}
                >
                <TextField
                    id="friendReq" 
                    label="Friend Request" 
                    variant="standard"
                    sx={{ m: "2em 3em 0 3em", height: "5em", width: "20em" }}
                    onChange={(e) => setFriendId(e.target.value)}
                />
                <Button 
                    variant="contained"
                    sx={{ m: "0em 0em 0em 10em ", height: "3em", width: "10em", textAlign:"center", justifyContent: "center", alignItems: "center", display:"flex" }} 
                    style={{ backgroundColor: "#388e3c" }}
                    onClick={reqFriend}
                >リクエスト送信</Button>
            </Box>
            <FriendList friends={friendList} />
        </>
    )
    
}

export default Profile