import { Avatar, Button, Dialog, DialogTitle, ListItem, Stack, Typography } from '@mui/material'
import React, { memo } from 'react'
import { sampleNotifications } from '../constants/sampleData'

const Notifications = () => {

    const friendRequestHandler = ({ _id, accept }) => {
        console.log("Friend Request Handler ", accept);
    }

    return (
        <Dialog open>
            <Stack sx={{
                p: {
                    sm: "2rem",
                    xs: "1rem"
                },
                maxWidth: "30rem"
            }}>
                <DialogTitle>Notifications</DialogTitle>
                {
                    sampleNotifications.length > 0 ? (
                        //this called destructuring {sender, _id}
                        sampleNotifications.map(({ sender, _id }) => {
                            return (
                                <NotificationItem
                                    sender={sender}
                                    _id={_id}
                                    key={_id}
                                    handler={friendRequestHandler}
                                />
                            )
                        })
                    ) : (
                        <Typography sx={{ textAlign: "center" }}>No Notifications</Typography>
                    )
                }
            </Stack>
        </Dialog>
    )
}


const NotificationItem = memo(({ sender, _id, handler }) => {

    const { name, avatar } = sender

    return (
        <ListItem >
            <Stack
                direction={"row"}
                alignContent={"center"}
                spacing={"1rem"}
                width={"100%"}
            >
                <Avatar src={avatar} sx={{ width: "2rem", height: "2rem" }} />
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
                >{name} Sends you a friend request</Typography>
                <Stack direction={{
                    xs: "column",
                    sm: "row"
                }}
                >
                    <Button onClick={() => handler({ _id, accept: true })}>accept</Button>
                    <Button onClick={() => handler({ _id, accept: false })} color="error">Reject</Button>
                </Stack>

            </Stack>
        </ListItem >
    )
})

export default Notifications