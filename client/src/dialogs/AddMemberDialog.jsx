import React, { useState } from 'react'
import { sampleUsers } from '../constants/sampleData';
import { Button, Dialog, DialogTitle, Stack, Typography } from '@mui/material';
import UserItem from "../components/shared/UserItem";

const AddMemberDialog = ({ addMember, isLoadingAddMembers, chatId }) => {

    const [members, setMembers] = useState(sampleUsers);
    const [selectedMembers, setSelectedMembers] = useState(sampleUsers);

    const selectMemberHandler = (id) => {

        setSelectedMembers(prev =>
            prev.includes(id) ?
                prev.filter(member => member !== id) :
                [...prev, id])

    }

    const closeHandler = () => {

        console.log("Close Handler");
        setSelectedMembers([])
        setMembers([])
    }

    const addMemberSubmitHandler = () => {
        closeHandler();
        console.log("Add Member Submit Handler");
    }

    return (
        <Dialog open onClose={closeHandler}>
            <DialogTitle textAlign={"center"} variant='h5'>Add Members</DialogTitle>

            <Stack p={"2rem"} width={"20rem"}   >
                {
                    members.length > 0 ?
                        members.map((data, index) => {
                            return <UserItem
                                key={data._id}
                                user={data}
                                handler={selectMemberHandler}
                            />

                        }) :
                        <Typography> No Members Found </Typography>
                }
            </Stack>

            <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-evenly"}
                mb={"2rem"}
            >
                <Button color="error" onClick={closeHandler}>
                    Cancel
                </Button>
                <Button
                    onClick={addMemberSubmitHandler}
                    variant="contained"
                    disabled={isLoadingAddMembers}
                >
                    Submit Changes
                </Button>
            </Stack>
        </Dialog>
    )
}

export default AddMemberDialog