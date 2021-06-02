import React from 'react'
import "./AboutMe.css"
import image from "../images/chai.jpg"


function AboutMe() {
    return (
        <div className="aboutMe">
           <div className="aboutMe__header"> <h1>A whole page just about me!</h1></div>
            <div className="aboutMe__body">
                <div className="body__img">
                   
                    {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/A_Cartoon_Man_Sleeping_At_Work.svg/1200px-A_Cartoon_Man_Sleeping_At_Work.svg.png"/> */}
                     <img src="https://freesvg.org/img/publicdomainq-business-man-strong.png" alt="boyPicture"/>
                </div>
                <div className="body__content">
                    <h1>Me talking about myself</h1>
                    <hr/>
                    <br/>
                    <p className="content__first">A self-taught Full stack and Software developer from Haryana, who loves to build and design websites. Currently, pursuing my B.TECH from Chandigarh Group of Colleges, Landran, Mohali.  </p>
                    <br/>
                    <p className="content__second">My superpower is my quest for knowledge, which has eventually lead me to achieve perseverance, mental tenacity and dedication in my life.</p>
                    <br/>
                    <div className="content__links">
                        <div className="links__first"><a target="__black" href="https://docs.google.com/document/d/1__-5kKmshvW3e77NIYOXXKaMMfHJKDRIwngpMo4XkX4/edit?usp=sharing">Resume</a></div>
                        <div className="links__second"><a target="__black" href="https://github.com/Parteeksachdeva">Github</a></div>
                        <div className="links__third"><a href="/contact">E-Mail Me</a></div>
                        <div className="links__fourth"><a target="__black" href="https://www.linkedin.com/in/parteek-sachdeva">Linkedin</a></div>
                    </div>
                </div>
                <div className="body__right"><p>CREA</p><img src={image} alt="CREATIVITY" /><p>VITY</p></div>
            </div>

        </div>
    )
}

export default AboutMe
