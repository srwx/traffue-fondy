import React, { useEffect, useRef } from 'react'

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    fetch(
      'https://2cf9-2405-9800-b640-8523-1c9d-264b-aaf5-9b16.ngrok-free.app/result/vdo',
      {
        method: 'GET',
        headers: new Headers({
          'ngrok-skip-browser-warning': '69420',
        }),
      }
    )
      .then((response) => response.blob())
      .then((blob) => {
        const videoUrl = URL.createObjectURL(blob)

        if (!videoRef.current) return

        videoRef.current.src = videoUrl

        // Autoplay the video
        videoRef.current.play()
      })
      .catch((error) => {
        console.error('Error fetching video:', error)
      })
  }, [])

  return (
    <div className="w-full h-[244px]">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
      ></video>
    </div>
  )
}

export default VideoPlayer
