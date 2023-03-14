import { Button, TextField } from '@mui/material';
import { useState, useContext } from 'react';
import { UserContext } from '../../App';
import axios from 'axios';

function Profile() {

    const {userId} = useContext(UserContext)

    // フレンドリクエスト
    const [friendId, setFriendId] = useState('')

    const reqFriend = async () => {
        const res = await axios.put('sendfriend', {
            user_id: userId,
            friend_id: friendId
        })
        console.log(res.data)
    }
    

    return (
        <>
            <TextField onChange={(e) => setFriendId(e.target.value)} />
            <Button onClick={reqFriend} >リクエスト</Button>
        </>
    )
    
}

export default Profile