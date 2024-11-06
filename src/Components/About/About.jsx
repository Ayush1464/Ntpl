import React from 'react'
import "./About.css"
const About = () => {
  return (
    <div className="about">
  <video 
    src="./assets/ntpl_about_video.mp4" 
    autoPlay 
    muted 
    loop 
    playsInline
    style={{ width: '100%' }}
  >
    Your browser does not support the video tag.
  </video>
</div>

  
  )
}

export default About