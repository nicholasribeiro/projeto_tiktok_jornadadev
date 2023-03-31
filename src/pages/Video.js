import React, { useRef, useState } from 'react'
import "./Video.css"
import VideoFooter from './components/footer/VideoFooter'
import video from '../media/brecker2.mp4'

function Video() {

    const videoRef = useRef(null)
    const [play, setPlay] = useState(false)

    function handleStart(){
        if(!play){
            videoRef.current.play()
            setPlay(true)
        } else {
            videoRef.current.pause()
            setPlay(false)
        }
        
    }

  return (
    <div className='video'>
        
        <video 
            className='video__player'
            ref={videoRef}
            onClick={handleStart}
            loop
            src={video}
        ></video>
        {/* Side bar */}
        <VideoFooter />
    </div>
  )
}

export default Video