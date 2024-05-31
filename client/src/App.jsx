/* eslint-disable no-unused-vars */
import React, { Suspense, lazy } from 'react'
import { Box } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectRoute from './components/auth/ProtectRoute'
import Loaders from './components/layout/Loaders.jsx'

const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const Groups = lazy(() => import('./pages/Groups'))
const Chat = lazy(() => import('./pages/Chat'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

const App = () => {

  let user = true;

  return (
    <BrowserRouter>

      <Suspense fallback={<Loaders />}>

        <Routes>
          <Route element={<ProtectRoute user={user} />}>
            <Route path="/" element={<Home />} />
            <Route path='/chat/:chatId' element={<Chat />} />
            <Route path='/groups' element={<Groups />} />
          </Route>
          <Route path='/login' element={
            <ProtectRoute user={!user} redirect='/'>
              <Login />
            </ProtectRoute>
          }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
