import { Box, Button, CardActions, CardContent, TextField, Typography } from "@mui/material";
import { useState } from "react";
import PostModal from "../modals/PostModal";

function Post(props:{post: string}) {

    const [openModal, setOpenModal] = useState(false)
    const obj = JSON.parse(JSON.stringify(props.post));

    return (
        <Box sx={{ width:"32%", marginTop:"1%", marginLeft:"1%", borderRadius: "5%" }} style={{ backgroundColor:"#FFFFFF" }}>
            <CardContent>
                <Typography>
                    <TextField
                        disabled
                        fullWidth
                        variant="standard"
                        sx={{
                            "& .MuiInputBase-input.Mui-disabled": {
                              WebkitTextFillColor: "#000000",
                          },
                        }}
                        inputProps={{style: {fontSize: 32}}}
                        value={obj.Title}
                    />
                </Typography>
                <Typography color="gray">
                    {"投稿者: " + obj.UserId}<br/>
                    {"最終更新: " + obj.Time}
                </Typography>
                <Typography color="common.gray">
                    {obj.Body}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => (setOpenModal(true))}>Open</Button>
                <PostModal openModal={openModal} setOpenModal={setOpenModal} post={props.post} />
            </CardActions>
        </Box>
    )

}

export default Post