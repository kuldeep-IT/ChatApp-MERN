import React from 'react'
import AppLayout from '../components/layout/AppLayout'
import { Box, Typography } from '@mui/material'
import { grayColor } from '../constants/colors'

const Home = () => {
    return (
        <Box bgcolor={grayColor} height={'100%'} p={'2rem'}>
            <Typography variant='h4' textAlign={"center"}>Select friend to Chat... </Typography>
        </Box>
    )
}

export default AppLayout()(Home) 