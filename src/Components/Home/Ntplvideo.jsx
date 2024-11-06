import React from 'react';
import './Ntplvideo.css';
import { Typewriter } from 'react-simple-typewriter';

const Ntplvideo = () => {
  return (
    <div className='hero2'>
      <div className='hero_video'>
        <video src="./assets/ntpl_home_video.mp4" autoPlay muted loop></video>
        <div className='video_text'>
  <h1 className="white-text">
  <Typewriter
  words={['Your Partner in Success!']}
  loop={false}
  cursor
  typeSpeed={100}
  deleteSpeed={50}
  delaySpeed={1000}
/>

  </h1>
</div>

        <div className='video_para' style={{color:'white'}}>
        <p>Experience unparalleled comfort and style with our exceptional services. We are dedicated to transforming your vision into reality, ensuring every detail is meticulously crafted to meet your needs.</p>
        </div>
      </div>
    </div>
  );
};

export default Ntplvideo;
