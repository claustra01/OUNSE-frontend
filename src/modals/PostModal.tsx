import { Modal, Box, TextField } from "@mui/material"
import { useState } from "react";

type MyProps = {
    openModal: boolean,
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>,
    post: string
}

function PostModal({openModal, setOpenModal, post}: MyProps) {

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
                    value={obj.Body}
                    onChange={((e)=>{setBody(e.target.value)})}
                />
            </Box>
        </Modal>
    )

}

export default PostModal