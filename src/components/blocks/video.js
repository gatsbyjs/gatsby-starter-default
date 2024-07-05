import React, { useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import { Box } from "@theme-ui/components"
import MuxPlayer from "@mux/mux-player-react"

const Video = ({
  muxPlaybackId,
  customData,
  minHeight = "100%",
  aspectRatio,
  highRes,
}) => {
  const videoPlaceholder = `https://image.mux.com/${muxPlaybackId}/thumbnail.jpg?&time=0`
  if (customData) {
    var isNotAutoplay = customData.autoplay === "false"
  }
  const playerRef = useRef(true)
  const [ref, inView] = useInView({
    threshold: 0.2,
  })
  useEffect(() => {
    const video = playerRef.current
    if (inView && !isNotAutoplay) {
      video.play()
    } else {
      video.pause()
    }
  }, [inView])

  return (
    <Box
      ref={ref}
      sx={{
        width: "100%",
        height: minHeight,
        "mux-player": isNotAutoplay
          ? {}
          : {
              "--controls": "none",
              "--media-object-fit": "cover",
              "--media-object-position": "center",
            },
        ".videoMob": {
          position: "absolute",
          inset: "0",
          minWidth: "100vw",
          minHeight: "100vh",
          overflow: "hidden",
          objectFit: "cover",
        },
      }}
    >
      <MuxPlayer
        style={{
          height: "100%",
          maxWidth: "100%",
          aspectRatio: aspectRatio ? aspectRatio : null,
        }}
        id={muxPlaybackId}
        playbackId={muxPlaybackId}
        streamType="on-demand"
        playsInline
        preload="auto"
        maxResolution={highRes ? "2160p" : "1080p"}
        muted={!isNotAutoplay}
        loop={!isNotAutoplay}
        ref={playerRef}
        poster={videoPlaceholder}
      />
    </Box>
  )
}

export default Video
