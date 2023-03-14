import { Button, TextField } from '@mui/material';
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

    useEffect(() => { 
        const getFriend = async () => {
            const res = await axios.get('getfriend', {params: {user_id: userId}})
            const obj = JSON.parse(JSON.stringify(res));
            console.log(obj.data)
            setFriendList(obj.data.FriendList)
        }
        if (userId !== '') getFriend()
    }, [userId])

    return (
        <>
            <Header/>
            <TextField onChange={(e) => setFriendId(e.target.value)} />
            <Button onClick={reqFriend}>リクエスト</Button>
            <FriendList friends={friendList} />
        </>
    )
    
}

export default Profile