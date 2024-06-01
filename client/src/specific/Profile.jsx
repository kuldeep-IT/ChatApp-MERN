import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'
import {
    CalendarMonth as CalendarIcon,
    Face as FaceIcon,
    AlternateEmail as UserIcon

} from "@mui/icons-material";
import moment from "moment";

const Profile = () => {
    return (
        <Stack
            spacing={"2rem"}
            direction={"column"}
            alignContent={"center"}
        >
            <Avatar
                src={"https://www.w3schools.com/howto/img_avatar.png"}
                sx={{
                    width: "10rem",
                    height: "10rem",
                    borderRadius: "50%",
                    border: "5px solid white",
                    alignSelf: "center"
                }}
            />

            <ProfileCard text={"John"} heading={"Name"} />
            <ProfileCard text={"johndoe"} heading={"Username"} Icon={<UserIcon />} />
            <ProfileCard text={"John Doe"} heading={"Name"} Icon={<FaceIcon />} />
            <ProfileCard text={moment("2024-01-04T18:30:00.000Z").fromNow()} heading={"Joined"} Icon={<CalendarIcon />} />

        </Stack>
    )
}



const ProfileCard = ({
    text, Icon, heading
}) => {
    return (
        <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={"1rem"}
            color={"white"}
            textAlign={"center"}
            alignSelf={"center"}
        >
            {Icon && Icon}

            <Stack>
                <Typography variant='body1'>{text}</Typography>
                <Typography variant='caption'
                    color={"gray"}
                >{heading}</Typography>
            </Stack>


        </Stack>
    )
}


export default Profile