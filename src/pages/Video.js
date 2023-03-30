import React, { useRef, useState } from 'react'
import "./Video.css"

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
            src=""
        >
            
        </video>
    </div>
  )
}

export default Video