import { AppBar, Backdrop, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React, { Suspense, lazy, useState } from 'react'
import { orange } from '../../constants/colors'
import { Add as AddIcon, Notifications as NotificationsIcon, Group as GroupIcon, Logout as LogoutIcon, Menu as MenuIcon, Search as SearchIcon, } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';

const SearchDialog = lazy(() => import('../../specific/Search'));
const NotificationsDialog = lazy(() => import('../../specific/Notifications'));
const NewGroupDialog = lazy(() => import('../../specific/NewGroup'));

const Header = () => {

    const navigate = useNavigate()

    const [isMobile, setIsMobile] = useState(false)
    const [isSearch, setIsSearch] = useState(false)
    const [isNewGroup, setIsNewGroup] = useState(false)
    const [isNotification, setIsNotification] = useState(false)

    const handleMobile = () => {
        console.log("Handle Mobile");
        setIsMobile((prev) => !prev)

    }

    const openSearchDialog = () => {
        console.log("Handle Mobile");
        setIsSearch((prev) => !prev)
    }

    const openNewGroup = () => {
        console.log("openNewGroup openNewGroup");
        setIsNewGroup((prev) => !prev)
    }

    const openNotification = () => {
        console.log("openNotification openNotification");
        setIsNotification((prev) => !prev)
    }

    const navigateToGroup = () => {
        navigate("/groups")
    }

    const logoutHandle = () => {
        console.log("logout handler");
    }

    logoutHandle

    const CustomIconButton = ({ title, onClick, icon }) => {
        return (
            <Tooltip title={title}>
                <IconButton color="inherit" size="large" onClick={onClick}>
                    {icon}
                </IconButton>
            </Tooltip>
        )
    }


    return (
        <>
            <Box sx={{ flexGrow: 1 }} height={"4rem"}>
                <AppBar position="static" sx={{
                    bgcolor: orange
                }}>
                    <Toolbar>
                        <Typography
                            variant='h6'
                            sx={{
                                display: { xs: 'none', sm: 'block' },
                                color: 'white',
                            }}
                        >
                            Chat App
                        </Typography>

                        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                            <IconButton
                                color='inherit'
                                onClick={handleMobile}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>

                        <Box sx={{ flexGrow: 1 }} />
                        <Box>
                            <CustomIconButton
                                title="Search"
                                onClick={openSearchDialog}
                                icon={<SearchIcon />}
                            />
                            <CustomIconButton
                                title="New Group"
                                onClick={openNewGroup}
                                icon={<AddIcon />}
                            />
                            <CustomIconButton
                                title="Manage Groups"
                                onClick={navigateToGroup}
                                icon={<GroupIcon />}
                            />
                            <CustomIconButton
                                title="Notifications"
                                onClick={openNotification}
                                icon={<NotificationsIcon />}
                            />
                            <CustomIconButton
                                title="Logout"
                                onClick={logoutHandle}
                                icon={<LogoutIcon />}
                            />
                        </Box>


                    </Toolbar>
                </AppBar>
            </Box>

            {
                isSearch && <Suspense fallback={<Backdrop open />}>
                    <SearchDialog />
                </Suspense>
            }


            {
                isNotification && <Suspense fallback={<Backdrop open />}>
                    <NotificationsDialog />
                </Suspense>
            }

            {
                isNewGroup &&
                <Suspense fallback={<Backdrop open />}>
                    <NewGroupDialog />
                </Suspense>
            }

        </>
    )


}



export default Header