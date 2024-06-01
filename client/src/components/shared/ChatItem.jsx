import React, { memo } from 'react'
import { Link } from '../styles/StyledComponents'
import { Box, Stack, Typography } from '@mui/material'
import AvatarCard from './AvatarCard'

const ChatItem = ({
    avatar = [],
    name,
    _id,
    groupChat = false,
    sameSender,
    isOnline,
    newMessageAlert,
    index = 0,
    handleDeleteChat,
}) => {
    return (
        <Link
            sx={{
                padding: "0",
            }}
            to={`/chat/${_id}`}
            onContextMenu={(e) => {
                e.preventDefault();
                handleDeleteChat(e, _id, groupChat)
            }}
        >
            <div style={
                {
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                    padding: "1rem",
                    cursor: "pointer",
                    backgroundColor: sameSender ? "black" : "unset",
                    // backgroundColor: "red",
                    color: sameSender ? "white" : "unset",
                    position: "relative",
                    // padding: "1rem",
                }
            }>

                <AvatarCard avatar={avatar} />

                <Stack direction={"column"}>
                    <Typography>{name}</Typography>
                    {
                        newMessageAlert &&
                        (
                            <Typography>{newMessageAlert.count} New Message</Typography>
                        )
                    }
                </Stack>

                <Box sx={{
                    // display: 'flex'
                    flexGrow: 1
                }} />

                {
                    isOnline &&
                    <Box sx={
                        {
                            width: "10px",
                            height: "10px",
                            bgcolor: "green",

                            borderRadius: "50%",

                            // right: "1rem",
                            // top: "1rem",
                            // transform: "translateY(-50%)",
                        }
                    } />


                }
            </div>
        </Link>
    )
}

export default memo(ChatItem)