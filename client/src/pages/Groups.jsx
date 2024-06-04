import {
    Add as AddIcon,
    Delete as DeleteIcon,
    Done as DoneIcon, Edit as EditIcon, KeyboardBackspace as KeyboardBackspaceIcon, Menu as MenuIcon
} from '@mui/icons-material'
import { Backdrop, Box, Button, Drawer, Grid, IconButton, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React, { Suspense, lazy, memo, useEffect, useState } from 'react'
import { matBlack } from '../constants/colors'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Link } from '../components/styles/StyledComponents'
import AvatarCard from '../components/shared/AvatarCard'
import { sampleChats, sampleUsers } from '../constants/sampleData'
import AddMemberDialog from '../dialogs/AddMemberDialog'
import UserItem from '../components/shared/UserItem'
// import ConfirmDeleteDialog from '../dialogs/ConfirmDeleteDialog'

const ConfirmDeleteDialog = lazy(() => import('../dialogs/ConfirmDeleteDialog'));

const Groups = () => {

    const chatId = useSearchParams()[0].get("group")

    const navigate = useNavigate()

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [grpName, setGrpName] = useState("")
    const [grpNameUpdatedValue, setGrpNameUpdatedValue] = useState("")

    const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);

    let isAddMember = false

    const navigateBack = () => {
        navigate("/")
    }

    const handleMobile = () => {
        console.log("Handle Mobile");
        setIsMobileMenuOpen((prev) => !prev)
    }

    const closeHandleMobile = () => {
        setIsMobileMenuOpen(false)
    }

    const updateGroupName = () => {
        setIsEdit(false)
        console.log(grpNameUpdatedValue);
    }

    useEffect(() => {
        if (chatId) {
            setGrpName(`Group Name ${chatId}`)
            setGrpNameUpdatedValue(`Group Name ${chatId}`)
        }
        return () => {
            setGrpName("")
            setGrpNameUpdatedValue("")
            setIsEdit(false)
        }
    }, [chatId])

    const IconButtons = <>

        <Box sx={{
            top: '1rem',
            right: '1rem',
            position: 'fixed',
            display: {
                xs: 'block',
                sm: 'none'
            }
        }}>
            <IconButton onClick={handleMobile}>
                <MenuIcon />
            </IconButton>
        </Box>

        <Tooltip title="back">
            <IconButton sx={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                bgcolor: matBlack,
                color: 'white',
                ":hover": {
                    bgcolor: 'rgba(0, 0, 0, 0.6)',
                }
            }}
                onClick={navigateBack}
            >
                <KeyboardBackspaceIcon />
            </IconButton>
        </Tooltip>
    </>

    const groupName = <Stack
        direction={"row"}
        spacing={1}
        p={4}
        justifyContent={"center"}
        alignItems={"center"}>
        {
            isEdit ? <>
                <TextField value={grpNameUpdatedValue} onChange={e => setGrpNameUpdatedValue(e.target.value)}></TextField>
                <IconButton onClick={updateGroupName}>
                    <DoneIcon />
                </IconButton>
            </>
                : (
                    <>
                        <Typography variant='h4'>{grpName}</Typography>
                        <IconButton onClick={() => setIsEdit(true)}>
                            <EditIcon />
                        </IconButton>
                    </>
                )
        }
    </Stack>

    const deleteHandler = () => {
        closeConfirmDeleteHandler()
        console.log("deleteHandler");
    }

    const closeConfirmDeleteHandler = () => {
        setConfirmDeleteDialog(false);
    };

    const openConfirmDeleteHandler = () => {
        setConfirmDeleteDialog(true)
        console.log("openConfirmDeleteHandler");
    }

    const openAddMemberHandler = () => {
        isAddMember = true
        console.log("openAddMemberHandler");
    }

    const removeMemberHandler = (id) => {
        console.log("removeMemberHandler ", id);
    }

    const ButtonGroup = (
        <Stack
            direction={{
                xs: "column-reverse",
                sm: "row",
            }}
            spacing={"1rem"}
            p={{
                xs: "0",
                sm: "1rem",
                md: "1rem 4rem",
            }}
        >
            <Button
                size="large"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={openConfirmDeleteHandler}
            >
                Delete Group
            </Button>
            <Button
                size="large"
                variant="contained"
                startIcon={<AddIcon />}
                onClick={openAddMemberHandler}
            >
                Add Member
            </Button>
        </Stack>
    );

    return (
        <Grid
            container
            height={"100vh"}
        >
            <Grid
                item
                display={
                    {
                        xs: 'none',
                        sm: 'block'
                    }
                }
                sm={4}
                bgcolor={'bisque'}
            >
                <GroupList myGroups={sampleChats} chatId={chatId} />
            </Grid>

            <Grid
                item
                xs={12}
                sm={8}
                height={"100%"}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative'
                }}
            >
                <Box>
                    {IconButtons}

                    {grpName && <>
                        {groupName}

                        <Typography
                            margin={"2rem"}
                            alignSelf={"flex-start"}
                            variant="body1"
                        >
                            Members
                        </Typography>

                        <Stack
                            maxWidth={"45rem"}
                            width={"100%"}
                            boxSizing={"border-box"}
                            padding={{
                                sm: "1rem",
                                xs: "0",
                                md: "1rem 4rem",
                            }}
                            spacing={"2rem"}
                            height={"50vh"}
                            overflow={"auto"}
                        >
                            {
                                sampleUsers.map((user, index) => (
                                    <UserItem
                                        key={user._id}
                                        user={user}
                                        isAdded
                                        isStyling={
                                            {
                                                boxShadow: "0 0 0.5rem  rgba(0,0,0,0.2)",
                                                padding: "1rem 2rem",
                                                borderRadius: "1rem",
                                            }
                                        }
                                        handler={(id) => removeMemberHandler(id)}

                                    />
                                ))
                            }
                        </Stack>

                        {ButtonGroup}

                    </>}
                </Box>
            </Grid>

            {
                isAddMember && (
                    <Suspense fallback={<Backdrop open />}>
                        <AddMemberDialog

                        />
                    </Suspense>
                )
            }

            {confirmDeleteDialog && (
                <Suspense fallback={<Backdrop open />}>
                    <ConfirmDeleteDialog
                        open={confirmDeleteDialog}
                        handleClose={closeConfirmDeleteHandler}
                        deleteHandler={deleteHandler}
                    />
                </Suspense>
            )}

            <Drawer
                open={isMobileMenuOpen}
                onClose={closeHandleMobile}
                sx={{
                    display: {
                        xs: 'block',
                        sm: 'none'
                    }
                }}
            >
                <Box
                    sx={{
                        height: '100vh',
                        bgcolor: 'white',
                    }}
                >
                    <GroupList w={'50vw'} myGroups={sampleChats} chatId={chatId} />
                </Box>
            </Drawer>

        </Grid>
    )
}

const GroupList = ({ w = "100%", myGroups = [], chatId }) => {

    return (
        <Stack width={w}>
            {
                myGroups.length > 0 ?
                    myGroups.map((group, index) => (
                        <GroupItem
                            key={group._id}
                            group={group}
                            chatId={chatId}
                        />
                    ))
                    : <Typography padding={"1rem"} variant='h6' textAlign={"center"}>No groups</Typography>
            }
        </Stack>
    )
}

const GroupItem = memo(({ group, chatId }) => {

    const { name, _id, avatar } = group

    return (
        <Link to={`?group=${_id}`} onClick={e => {
            if (chatId === _id) {
                e.preventDefault()
            }
        }}>
            <Stack direction={"row"} spacing={1} alignItems={"center"} >
                <AvatarCard avatar={avatar} />
                <Typography>{name}</Typography>
            </Stack>
        </Link>
    )
})




export default Groups