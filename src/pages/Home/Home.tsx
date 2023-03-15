import { Box, Button, TextField } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext, createContext } from 'react';
import axios from "axios";
import './Home.css';
import TimeLine from "../../components/TimeLine/TimeLine";
import { UserContext } from '../../App';
import Header from '../../components/Header'

type Reload = {
    reload: number,
    setReload: React.Dispatch<React.SetStateAction<number>>
}

export const ReloadContext = createContext({} as Reload)

function Home() {

    const {userId} = useContext(UserContext)

    // プロフィールに遷移
    const navigate = useNavigate()
    const redirectProfile = () => {
        navigate('/profile')
    }
    
    // 新規投稿
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const clickPost = async () => {

      // 入力エラー
      if (title === '') {
        setErrorMessage('タイトルが入力されていません')
        return
      } else if (body === '') {
        setErrorMessage('本文が入力されていません')
        return
      }

      // 投稿
      const res = await axios.post('createpost', {
        title: title,
        body: body,
        user_id: userId
      })
      const obj = JSON.parse(JSON.stringify(res));
      console.log(obj.data)
      setTitle('')
      setBody('')
      setReload(reload+1)

    }

    // TL取得
    const [timeLine, setTimeLine] = useState([])
    const [reload, setReload] = useState(0)

    useEffect(() => { 
        const getTL = async () => {
            const res = await axios.get('gettimeline', {params: {user_id: userId}})
            const obj = JSON.parse(JSON.stringify(res));
            setTimeLine(obj.data)
        }
        if (userId !== '') getTL()
    }, [userId, reload])
            
    return (
            <div className="wrapper" style={{height: "100vh"}}>
                <Header />
                    <div className="background-color"/>
                        <Box
                            sx={{
                                width: 400,
                                Height: 90
                                // opacity: 0.9,
                            }}
                            style={{ backgroundColor: "#FFFFFF",
                            margin: "-1em 50em 0 0",
                        
                            }}
                            >
                            <TextField
                                required 
                                id="title" 
                                label="title" 
                                variant="standard"
                                sx={{ m: "2em 3em 0 3em", height: "5em", width: "20em" }}
                                value={title}
                                onChange={((e)=>{setTitle(e.target.value)})}
                            />
                            <TextField 
                                required
                                multiline
                                minRows="14"
                                id="post" 
                                label="post" 
                                sx={{ m:"1em 3em 2em 3em", height: "10em", width: "20em" }}
                                value={body}
                                onChange={((e)=>{setBody(e.target.value)})}
                                />
                            <Button 
                                variant="contained"
                                sx={{ m:"14em 5em 10em 20em ", height: "3em", textAlign:"center", justifyContent: "center", alignItems: "center", display:"flex" }} 
                                style={{ backgroundColor: "#388e3c" }}
                                onClick={clickPost}
                            >投稿</Button>
                        
                            <Button
                                onClick={redirectProfile}
                                sx={{ m:" -25em 0em 0em 4em ", 

                                backgroundColor: "#FFFFF"}}>
                                    Friend
                            </Button>
                            {/* {errorMessage} */}
                        
                        </Box>
                        <div className="TimeLine">
                            <ReloadContext.Provider value={{reload, setReload}}>
                                <TimeLine timeLine={timeLine} />
                            </ReloadContext.Provider>
                        </div>
            </div>
    
    )
 
}

export default Home
