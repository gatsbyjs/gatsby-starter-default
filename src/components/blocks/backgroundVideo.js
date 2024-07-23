import React from "react"
import { Box } from "theme-ui"
import Video from "./video"

const BackgroundVideo = ({ media }) => {
  if (media.mimeType !== "video/mp4") {
    return null
  }

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        overflow: "hidden",
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

export default BackgroundVideo
