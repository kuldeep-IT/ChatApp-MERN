import React, { memo } from 'react'
import { blueColor, grayColor, orange, white } from '../../constants/colors'
import { Box, Typography } from '@mui/material'
import moment from 'moment'
import RenderAttachment from './RenderAttachment'
import { fileFormat } from '../../lib/features'

const MessageComponent = ({ message, user }) => {

    const { sender, attachments = [], createdAt, content } = message

    const sameSender = sender?._id === user?._id

    const timeAgo = moment(createdAt).fromNow()

    return (
        <div style={
            {
                width: 'fit-content',
                maxWidth: '20rem',
                alignSelf: sameSender ? 'flex-end' : 'flex-start',
                backgroundColor: sameSender ? orange : white,
                color: sameSender ? 'white' : 'black',
                padding: '0.5rem',
                borderRadius: '5px'
            }
        }>
            {
                !sameSender && (
                    <Typography
                        color={blueColor}
                        variant='caption'
                        fontWeight={600}
                    >{sender?.name}</Typography>
                )
            }

            {
                content && (
                    <Typography>{content}</Typography>
                )
            }

            {
                attachments.length > 0 &&
                attachments.map((attachment, index) => {

                    const url = attachment.url
                    const file = fileFormat(url)
                    return (
                        <Box key={index}>
                            <a
                                href={url}
                                target="_blank"
                                download
                                style={{
                                    color: 'black',
                                }}
                            >
                                {
                                    console.log("url", url)
                                }
                                {
                                    <RenderAttachment file={file} url={url} />
                                }
                            </a>
                        </Box>
                    )
                })
            }
            {
                <Typography variant='caption' color={!sameSender ? `text.secondary` : grayColor}>{timeAgo}</Typography>
            }

        </div>
    )
}

export default memo(MessageComponent) //to prevent re-rendering of MessageComponent