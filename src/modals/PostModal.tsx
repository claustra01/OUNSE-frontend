import { Modal, Box, TextField, Button } from "@mui/material"
import { useContext, useState } from "react";
import { UserContext } from "../App";
import axios from "axios";
import { ReloadContext } from '../pages/Home/Home';

type MyProps = {
    openModal: boolean,
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>,
    post: string
}

function PostModal({openModal, setOpenModal, post}: MyProps) {

    const {userId} = useContext(UserContext)
    const {reload, setReload} = useContext(ReloadContext)

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    
    const obj = JSON.parse(JSON.stringify(post));

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -60%)',
        height: '30rem',
        width: '40rem',
        borderRadius: '5%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    // 投稿削除
    const removePost = async () =>{
        const res = await axios.delete('deletepost', {params: {id: obj.Id}})
        setReload(reload+1)
        setOpenModal(false)
        console.log(res.data)  
    }

    // ボタン表示切替
    const EditButton = (writer: string, reader: string) => {
        if (writer === reader) {
            return (
                <>
                    <Button 
                        variant="contained"
                        sx={{ m:"21em 5em 10em 38em", height: "4em", width: "6em", textAlign:"center", justifyContent: "center", alignItems: "center", display:"flex" }} 
                        style={{ backgroundColor: "#388e3c" }}
                    >保存</Button>
                    <Button 
                        variant="contained"
                        sx={{ m:"-52em 0em 10em 40em", height: "4em", width: "6em", textAlign:"center", justifyContent: "center", alignItems: "center", display:"flex" }} 
                        style={{ backgroundColor: "#e94709" }}
                        onClick={ removePost }
                    >削除</Button>
                </>
            )
        } else {
            return <></>
        }
    }

    return ( 
        <Modal
            open={openModal}
            onClose={() => (setOpenModal(false))}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <TextField
                    required 
                    id="title" 
                    label="title" 
                    variant="standard"
                    sx={{ m: "2em 3em 0 3em", height: "5em", width: "35em" }}
                    defaultValue={obj.Title}
                    onChange={((e)=>{setTitle(e.target.value)})}
                />
                <TextField 
                    required
                    multiline
                    minRows="14"
                    id="post" 
                    label="post" 
                    sx={{ m:"1em 3em 2em 3em", height: "5em", width: "35em" }}
                    defaultValue={obj.Body}
                    onChange={((e)=>{setBody(e.target.value)})}
                />
                {EditButton(obj.UserId, userId)}
            </Box>
        </Modal>
    )

}

export default PostModal