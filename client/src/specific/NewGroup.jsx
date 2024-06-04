import { Avatar, Button, Dialog, DialogTitle, InputAdornment, List, ListItem, Stack, TextField, Typography } from '@mui/material'
import React, { memo, useState } from 'react'
import { sampleUsers } from '../constants/sampleData'
import UserItem from '../components/shared/UserItem'
import { useInputValidation } from '6pp'
import { Search as SearchIcon } from "@mui/icons-material";

const NewGroup = () => {

    const groupName = useInputValidation("");

    const [members, setMembers] = useState(sampleUsers);
    const [selectedMembers, setSelectedMembers] = useState([]);

    const selectMemberHandler = (id) => {

        setSelectedMembers(prev =>
            prev.includes(id) ?
                prev.filter(member => member !== id) :
                [...prev, id])

    }

    console.log("Selected Members", selectedMembers);

    const submitHandler = () => {
        console.log("Submit Handler");
    }

    const closeHandler = () => {
        console.log("Close Handler");
    }

    return (
        <Dialog open onClose={closeHandler}>
            <Stack p={"2rem"} width={"30rem"} direction={"column"}>
                <DialogTitle sx={{ textAlign: "center" }}> New Group </DialogTitle>
                <TextField
                    label=""
                    variant="outlined"
                    fullWidth
                    size='small'
                    value={groupName.value}
                    onChange={groupName.changeHandler}
                    placeholder="Group Name"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position='start'>
                                <SearchIcon />
                            </InputAdornment>
                        )
                    }}
                />

                <List>
                    <Stack>
                        {
                            members.map((user, index) => {
                                return (
                                    <UserItem
                                        user={user}
                                        key={user._id}
                                        handler={selectMemberHandler}
                                        isAdded={selectedMembers.includes(user._id)}
                                    />
                                )
                            })
                        }
                    </Stack>
                </List>
                <Stack direction={"row"}>
                    <Button color='error'
                        variant='outlined'
                    >Cancel</Button>
                    <Button sx={{ ml: "auto" }}
                        variant="contained"
                        onClick={submitHandler}
                    >Create</Button>
                </Stack>
            </Stack>
        </Dialog>
    )
}

export default NewGroup
