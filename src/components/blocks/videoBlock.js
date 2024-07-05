import React from "react"
import { Box } from "theme-ui"
import Video from "./video"

const VideoBlock = ({ media, sx }) => {
  if (media.mimeType !== "video/mp4") {
    return null
  }

  return (
    <Box
      sx={{
        overflow: "hidden",
        ...sx,
      }}
    >
      <Video
        muxPlaybackId={media.video.muxPlaybackId}
        customData={media.customData}
        aspectRatio={"1/1"}
        highRes={true}
      />
    </Box>
  )
}

export default VideoBlock
