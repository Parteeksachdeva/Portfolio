import React from 'react'
import "./Home.css"
import Typewriter from 'typewriter-effect';
import image from "../images/AvatarMaker.png"
import image2 from "../images/AvatarMaker2.png"

function Home() {
    return (
        <div className="body">
            {/* <div className="body__background">
                <p>Don't</p>
                <p>Hover</p>
                <p>My Avatar</p>
            </div> */}
            <div className="body__hi"><h1>Hi</h1><h1 className="red">! </h1> <h1> My Name is</h1></div>
            <br/>
            <div className="body__name">
                <h1>Parteek</h1> 
                <h1 className="red">Sachdeva</h1>
                </div>
                <div className="body__type">
                    <p>And I'm a</p>
                <Typewriter
                options={{
                    strings: ['Software Developer', 'Web Developer'],
                    autoStart: true,
                    loop: true,
                }}
            />
                </div>
            
            <img src={image} 
            onMouseOver={e=>{e.currentTarget.src=image2}}
            onMouseOut={e=>{e.currentTarget.src=image}}
            alt="my avatar" />
        </div>
    )
}

export default Home
