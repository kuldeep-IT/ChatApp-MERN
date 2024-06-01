import { Add as AddIcon } from '@mui/icons-material';
import { Avatar, IconButton, ListItem, ListItemText, Stack, Typography, } from '@mui/material';
import React from 'react'

const UserItem = ({
    user, handler, isHandlerLoading
}) => {

    const { _id, name, avatar } = user;

    return (
        <ListItem >

            <Stack direction={"row"}
                alignContent={"center"}
                spacing={"1rem"}
                width={"100%"}
            >
                <Avatar />
                <Typography
                    variant='body1'
                    sx={{
                        flexGrow: 1,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        justifyItems: 'flex-start',
                        alignItems: 'center',
                        textAlign: 'inherit',
                        display: '-webkit-flex',
                        WebkitBoxOrient: 'vertical',
                    }}

                >{name}</Typography>
                <IconButton
                    sx={{
                        bgcolor: "primary.main",
                        color: "white",
                        height: '1.5rem',
                        width: '1.5rem',
                        "&:hover": {
                            bgcolor: "primary.dark",
                        }
                    }}
                    onClick={() => handler(_id)} disabled={isHandlerLoading}>
                    <AddIcon />
                </IconButton>
            </Stack>
        </ListItem>
    )
}

export default UserItem