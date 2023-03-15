import { Box, Button, TextField } from '@mui/material';
import { useState, useContext, useEffect, createContext } from 'react';
import { UserContext } from '../../App';
import axios from 'axios';
import styled from 'styled-components';
import Header from '../../components/Header';
import FriendList from '../../components/FriendList';
import RequestList from '../../components/RequestList';

type Reload = {
    reload: number,
    setReload: React.Dispatch<React.SetStateAction<number>>
}

export const ReloadContext = createContext({} as Reload)

const FriendListStyle = styled.div`
    margin-left: 30rem
`;

const RequestListStyle = styled.div`
    margin-top: 5rem
`;

function Profile() {

    const {userId} = useContext(UserContext)

    // フレンドリクエスト
    const [friendId, setFriendId] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const reqFriend = async () => {
        if (userId === friendId) {
            setErrorMessage('自分にフレンドリクエストは送れません')
        }
        const res = await axios.post('sendfriend', {
            user_id: userId,
            friend_id: friendId
        })
        setReload(reload+1)
        setErrorMessage(res.data)
    }
    
    // フレンド取得
    const [friendList, setFriendList] = useState([])
    const [requestList, setRequestList] = useState([])
    const [reload, setReload] = useState(0)

    useEffect(() => { 
        const getFriend = async () => {
            const res = await axios.get('getfriend', {params: {user_id: userId}})
            const obj = JSON.parse(JSON.stringify(res));
            console.log(obj.data)
            setFriendList(obj.data.FriendList)
            setRequestList(obj.data.RequestList)
        }
        if (userId !== '') getFriend()
    }, [userId, reload])

    return (
        <ReloadContext.Provider value={{reload, setReload}}>
            <Header/>
            <FriendListStyle>
                <FriendList friends={friendList} />
            </FriendListStyle>
            <Box
                sx={{
                    height: '10rem',
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
                {errorMessage}
            </Box>
            <RequestListStyle>
                <RequestList requests={requestList} />
            </RequestListStyle>
        </ReloadContext.Provider>
    )
    
}

export default Profile