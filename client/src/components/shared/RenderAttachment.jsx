import React from 'react'
import { transformImage } from '../../lib/features'
import { FileOpen as FileOpenIcon } from '@mui/icons-material'

const RenderAttachment = ({ file, url }) => {

    switch (file) {
        case "video":
            return <video
                src={url}
                controls
                preload='none'
                width={"200px"}
            />

        case "image":
            return <img
                src={transformImage(url, 200)}
                alt="attachment"
                width={"200px"}
                height={"150px"}
                style={{
                    objectFit: 'contain'
                }}
            />

        case "audio":
            return <audio
                src={url}
                controls
                preload='none'
            />

        case "file":
            return <FileOpenIcon />
    }
}

export default RenderAttachment