import React, { useRef } from 'react'
import AppLayout from '../components/layout/AppLayout'
import { IconButton, Stack } from '@mui/material'
import { grayColor, orange } from '../constants/colors'
import { AttachFile as AttachFileIcon, Send as SendIcon } from '@mui/icons-material'
import { InputBox } from '../components/styles/StyledComponents'
import FileMenu from '../dialogs/FileMenu'
import { sampleMessage } from '../constants/sampleData'
import MessageComponent from '../components/shared/MessageComponent'


const user = {
    _id: "sdfsdfsdf",
    name: "Jai Thakar",
}

const Chat = () => {

    const containerRef = useRef(null)

    return (
        <>
            <Stack
                ref={containerRef}
                boxSizing={"border-box"}
                bgcolor={grayColor}
                p={"1rem"}
                spacing={"1rem"}
                sx={{
                    height: "90%",
                    overflowX: "hidden",
                    overflowY: "auto",
                }}>
                {
                    sampleMessage.map((message, index) => (
                        <MessageComponent
                            key={message._id}
                            message={message}
                            user={user}
                        />
                    ))
                }

            </Stack>

            <form style={{ height: "10%" }}>
                <Stack
                    direction={"row"}
                    alignItems={"center"}
                    height={"100%"}
                    // spacing={"1rem"}
                    p={"1rem"}
                    position={'relative'}
                >
                    <IconButton sx={{
                        position: 'absolute',
                        left: '1rem',
                        rotate: '30deg',
                    }}>
                        <AttachFileIcon />
                    </IconButton>

                    <InputBox placeholder='Type a message...' />

                    <IconButton type='submit'
                        sx={{
                            bgcolor: orange,
                            color: "white",
                            left: '0.5rem',
                            rotate: '-30deg',
                            "&:hover": {
                                bgcolor: "error.main"
                            }
                        }}

                    >
                        <SendIcon />
                    </IconButton>

                </Stack>
            </form>

            <FileMenu />
        </>
    )
}

export default AppLayout()(Chat)
