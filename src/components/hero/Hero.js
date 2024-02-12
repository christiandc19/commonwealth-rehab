import React from 'react'
import { Link } from 'react-router-dom';
import { Link as LinkRoll } from 'react-scroll'
import Zoom from 'react-reveal/Zoom';
import './Hero.css'

import BgVideo from '../../assets/hero_video.mp4'


const Hero = () => {
    return (
<>        

        <div className='hero'>
            <video src={BgVideo} autoPlay muted loop playsInline className='video-bg' />



            <div className="hero-container">



            <div className="content">
                        <Zoom duration={1000}>
                        <h1>COMMONWEALTH <span> REHAB</span></h1>
                        </Zoom>
                        <Zoom duration={3000}>
                        <h2> "Empowering wellness, reclaiming lives: your partner in mental health and substance abuse recovery."</h2>
                        </Zoom>
                        <br />
                        <div className='hero-btns'>

                        <div className='hero-btn'>
                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to="/contact">
                        <button>CALL US</button>
                        </Link>
                        </LinkRoll>
                        </div>

                        <div className='hero-btn hero-btn2'>
                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to="/treatment">
                        <button>LEARN MORE</button>
                        </Link>
                        </LinkRoll>
                        </div>


                        </div>

                </div>





            </div>
        </div>


</>

    )
}

export default Hero