import { Stack } from '@mui/material'
import React from 'react'

const ChatList = (
    {
        w = "100%",
        chats = [],
        chatId,
        onlineUsers = [],
        newMessageAlert = [
            {
                chatId: "",
                count: 0
            }
        ],
        handleDeleteChat,
    }
) => {
    return (
        <Stack direction={"column"} width={w}>
            {
                chats?.map((data) => {
                    return <div>
                        chat
                    </div>
                })
            }
        </Stack>
    )
}

export default ChatList