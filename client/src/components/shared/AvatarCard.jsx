import { Avatar, AvatarGroup, Box, Stack } from '@mui/material'
import React from 'react'

const AvatarCard = ({ avatar = [], max = 4 }) => {
    return (
        <Stack direction={"row"} spacing={0.5}>
            <AvatarGroup max={max}>
                <Box width={"5rem"} height={"3rem"}>
                    {
                        avatar.map((data, index) => {
                            return (
                                <Avatar
                                    key={Math.random() * 1000}
                                    src={data}
                                    alt={`Avatar ${index + 1}`}
                                    sx={{
                                        width: "2rem",
                                        height: "2rem",
                                        position: "absolute",
                                        left: {
                                            xs: `${0.5 + index}rem`,
                                            sm: `${1 + index}rem`,
                                        }
                                    }}
                                />
                            )
                        })
                    }
                </Box>
            </AvatarGroup>
        </Stack>
    )
}

export default AvatarCard