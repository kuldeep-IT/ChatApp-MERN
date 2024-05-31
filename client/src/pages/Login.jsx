import React, { useState } from 'react'
import { CameraAlt } from '@mui/icons-material';
import { Container, Paper, Typography, TextField, Button, Stack, Avatar, IconButton } from '@mui/material'
import { VisuallyHiddenInput } from '../components/styles/StyledComponents';
import { useFileHandler, useInputValidation } from '6pp'
import { userNameValidation } from '../utils/Validator';

const Login = () => {

    const [isLogin, setIsLogin] = useState(true);

    const toggleLogin = () => {
        setIsLogin((prev) => !prev)
    }

    const handleLogin = (e) => {
        e.preventDefault()
    }

    const handleSignUp = (e) => {
        e.preventDefault()
    }

    const name = useInputValidation('')
    const bio = useInputValidation('')
    const username = useInputValidation('', userNameValidation)
    const password = useInputValidation('')

    const avatar = useFileHandler('single')

    return (
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', margin: '2rem' }} component={'main'} maxWidth="sx">
            <Paper
                elevation={3}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 3,
                    width: 500
                }}>
                {
                    isLogin ?
                        <>
                            <Typography variant='h5'>Login</Typography>
                            <form style={{
                                margin: '2rem'
                            }}
                                onSubmit={handleLogin}

                            >
                                <TextField
                                    sx={{ margin: 1 }}
                                    label="User Name"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    value={username.value}
                                    onChange={username.changeHandler}
                                />
                                {
                                    username.error &&
                                    <Typography sx={{ margin: 1, color: 'red' }} >{username.error}</Typography>
                                }
                                <TextField sx={{ margin: 1 }} label="Password" variant="outlined" required fullWidth type='password'
                                    value={password.value}
                                    onChange={password.changeHandler}
                                />
                                <Button variant='contained' sx={{ margin: 1 }} fullWidth type='submit' >Login</Button>

                                <Typography sx={{ margin: 1, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }} fullWidth >Or</Typography>

                                <Button variant='text' sx={{ margin: 1 }} fullWidth onClick={toggleLogin}>Sign Up</Button>

                            </form>
                        </>
                        :
                        <>
                            <Typography variant='h5'>Sign Up</Typography>
                            <form style={{
                                margin: '1rem',
                            }}
                                onSubmit={handleSignUp}
                            >
                                <Stack position={'relative'} width={'10rem'} margin={'auto'}>
                                    <Avatar
                                        sx={{
                                            width: '10rem',
                                            height: '10rem',
                                            objectFit: 'contain'
                                        }}
                                        src={avatar.preview}
                                    />
                                    <IconButton sx={{
                                        position: 'absolute',
                                        right: 0,
                                        bottom: 0,
                                        color: 'white',
                                        backgroundColor: 'rgba(0,0,0,0.5)',
                                        ":hover": {
                                            backgroundColor: 'rgba(0,0,0,0.8)',
                                        }
                                    }}
                                        component={'label'}
                                    >
                                        <>
                                            <CameraAlt />
                                            <VisuallyHiddenInput type="file" onChange={avatar.changeHandler} />
                                        </>
                                    </IconButton>

                                </Stack>

                                {
                                    avatar.error &&
                                    <Typography sx={{ margin: 1, color: 'red' }} >{avatar.error}</Typography>
                                }


                                <TextField
                                    sx={{ margin: 1 }}
                                    label="User Name"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    value={username.value}
                                    onChange={username.changeHandler}
                                />

                                {
                                    username.error &&
                                    <Typography sx={{ margin: 1, color: 'red' }} >{username.error}</Typography>
                                }

                                <TextField
                                    sx={{ margin: 1 }}
                                    label="Name"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    value={name.value}
                                    onChange={name.changeHandler}
                                />

                                <TextField
                                    sx={{ margin: 1 }}
                                    label="Bio"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    value={bio.value}
                                    onChange={bio.changeHandler}
                                />
                                <TextField sx={{ margin: 1 }} label="Password" variant="outlined" required fullWidth type='password' />
                                <Button variant='contained' sx={{ margin: 1 }} fullWidth type='submit' >Sign Up</Button>

                                <Typography sx={{ margin: 1, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }} fullWidth >Or</Typography>

                                <Button variant='text' sx={{ margin: 1 }} fullWidth onClick={toggleLogin}>Login</Button>


                            </form>
                        </>
                }
            </Paper>
        </Container >
    )
}

export default Login