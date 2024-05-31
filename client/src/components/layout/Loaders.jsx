import { Grid, Skeleton, Stack } from '@mui/material'
import React from 'react'

const Loaders = () => {
    return (
        <>
            <Grid container height={"calc(100vh - 4rem)"} spacing={2} >
                <Grid item sm={4} md={3} height={"100vh"} sx={{
                    display: { xs: 'none', sm: 'block' }
                }}>
                    <Skeleton variant='rounded' height={"100vh"} />
                </Grid>
                <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>

                    <Stack gap={2}>
                        {
                            Array.from({ length: 10 }).map((_, index) =>
                                <Skeleton
                                    variant='rounded'
                                    key={index}
                                    height={"4rem"}
                                />
                            )
                        }
                    </Stack>

                    <Skeleton variant='rounded' />

                </Grid>
                <Grid item md={4} lg={3} height={"100%"} sx={{
                    display: { md: 'block', xs: 'none' },

                }}>
                    <Skeleton variant='rounded' height={"100vh"} />

                </Grid>
            </Grid>
        </>
    )
}

export default Loaders