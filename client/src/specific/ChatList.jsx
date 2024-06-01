import { Stack } from '@mui/material'
import React from 'react'
import ChatItem from '../components/shared/ChatItem'

const ChatList = (
    {
        w = "100%",
        chats = [],
        chatId,
        onlineUsers = [],
        newMessageAlert = [
            {
                chatId: "",
                count: 1
            }
        ],
        handleDeleteChat,
    }
) => {

    return (
        <Stack overflow={"auto"} height={"100%"} direction={"column"} width={w}>
            {
                chats?.map((data, index) => {

                    const { avatar, _id, name, members, groupChat } = data;

                    const newMessageAlertData = newMessageAlert.find(
                        ({ chatId }) => chatId === _id
                    );


                    console.log(newMessageAlert[0].chatId, _id)
                    console.log(newMessageAlertData)

                    //The some function in JavaScript is an array method that tests whether at least one element 
                    //in the array passes the provided function (predicate). 
                    //It returns a boolean value: true if at least one element passes the test,
                    //and false otherwise.
                    const isOnline = members?.some((member) => onlineUsers.includes(_id));


                    return <ChatItem
                        index={index}
                        newMessageAlert={newMessageAlertData}
                        isOnline={isOnline}
                        avatar={avatar}
                        name={name}
                        groupChat={groupChat}
                        _id={_id}
                        key={_id}
                        sameSender={chatId === _id}
                        handleDeleteChat={handleDeleteChat}
                    />
                })
            }
        </Stack>
    )
}

export default ChatList