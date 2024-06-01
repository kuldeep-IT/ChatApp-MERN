import { Dialog, DialogTitle, InputAdornment, List, ListItem, ListItemText, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useInputValidation } from "6pp";
import { Search as SearchIcon } from "@mui/icons-material";
import UserItem from '../components/shared/UserItem';
import { sampleUsers } from '../constants/sampleData';

const Search = () => {

    const search = useInputValidation("")

    const [users, setUsers] = useState(sampleUsers)
    const addFriendHandler = (id) => {
        //add friend
        console.log("Add Friend Handler", id);
    }

    const isLoadingFriendRequest = false

    return (
        <Dialog open>
            <Stack p={"2rem"} width={"30rem"} direction={"column"}>
                <DialogTitle sx={{ textAlign: "center" }}> Find People </DialogTitle>
                <TextField
                    label=""
                    variant="outlined"
                    fullWidth
                    size='small'
                    value={search.value}
                    onChange={search.changeHandler}
                    placeholder="Search"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position='start'>
                                <SearchIcon />
                            </InputAdornment>
                        )
                    }}
                />

                <List >
                    {
                        users.map((user, index) => {
                            return (
                                <UserItem
                                    user={user}
                                    key={user._id}
                                    handler={addFriendHandler}
                                    handleIsLoading={isLoadingFriendRequest}
                                />
                            )
                        })
                    }
                </List>

            </Stack>
        </Dialog>
    )
}

export default Search