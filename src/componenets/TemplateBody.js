import React from 'react'
import "./TemplateBody.css"
import {HashLink as Link} from "react-router-hash-link"

function TemplateBody() {
    return (
<div className="bodyy">
  <div id="wrap">
  <div id="bar">
    <nav>
      <ul>
        <li><Link smooth className="smoothscroll oda" id="one" to="#1">01</Link></li>
        <li><Link smooth className="smoothscroll date" id="two" to="#2">02</Link></li>
        <li><Link smooth className="smoothscroll toyotomi" id="three" to="#3">03</Link></li>
        <li><Link smooth className="smoothscroll uesugi" id="four" to="#4">04</Link></li>
      </ul>
    </nav>
  </div>
  
  {/* <!-- FIRST --> */}
  <div id="1">
    <div className="contentContainer">
      <div className="content">
        <h1 className="header"><span className="first">Video-Encoding</span><br/>
          <span className="second">Summary</span></h1>
        <p className="copy">Video-Encoding created with <b>REACTJS</b> and <b>NODEJS</b> designed for encoding any video file to mp4 and then store locally. Has Feature like hover to play video, adding thumbnail, play original video and also has a progressbar for tracking the process of video-encoding.
        <div className="buttons"><a target="_blank" href="https://github.com/Parteeksachdeva/Video-Encoding" className="button">Github</a>
        <a href="https://www.youtube.com/watch?v=NzBuOXzZtvo" target="_blank" className="button">Demo</a>
        <a href="https://60996e1f7e301b00d660878e--nifty-payne-74d5bd.netlify.app/" target="_blank" className="button">Live Demo</a>
        </div></p>
      </div>
    </div>
    <div className="imageContainer">
      <div className="image odaImg"> </div>
    </div>
  </div>
  
  {/* <!-- SECOND--> */}
  <div id="2">
    <div className="contentContainer">
      <div className="content">
        <h1 className="header"><span className="first">NETFLIX-CLONE</span> <br/>
          Summary</h1>
        <p className="copy">Netflix clone created with <b>React JS</b>. Used <b>TMDB API</b> for movies data and <b>Youtube API</b> for showcasing the Netflix trailer only if available on Youtube
        <div className="buttons"><a target="_blank" href="https://github.com/Parteeksachdeva/Netflix-clone" className="button">Github</a>
        
        <a href="https://netflix-clone-puce-three.vercel.app/" target="_blank" className="button">Live Demo</a>
        </div></p>
      </div>
    </div>
    <div className="imageContainer">
      <div className="image dateImg"> </div>
    </div>
  </div>
  
  {/* <!-- THIRD --> */}
  <div id="3">
    <div className="contentContainer">
      <div className="content">
        <h1 className="header"><span className="first">Path-Finding-Visualizer</span> <br/>
        Summary</h1>
        <p className="copy">Path-finding-visualizer is built in <b>REACTJs</b> with the help of <b>A* algorithm</b>.Used to find the shortest path between two nodes.

        <div className="buttons"><a href="https://github.com/Parteeksachdeva/pathfinder" target="_blank" className="button">Github</a>
        <a href="https://pathfinders.vercel.app/" target="_blank" className="button">Live Demo</a>
        </div></p>
      </div>
    </div>
    <div className="imageContainer">
      <div className="image toyotomiImg"> </div>
    </div>
  </div>
  
  {/* <!-- FOURTH --> */}
  <div id="4">
    <div className="contentContainer">
      <div className="content">
        <h1 className="header"><span className="first">JEWELLERY MANAGEMENT SYSTEM </span> <br/>
        Summary</h1>
        <p className="copy">It is a Desktop Application built in <b>Java</b> that is designed to rescue the management of records in a jeweler's store using MYSQL Database.User also gets the authority to signin with username and password and also proper billing with printed invoice.
        <div className="buttons"><a href="https://github.com/Jevels-sm/jewell-shop" target="_blank" className="button">Github</a>
        </div></p>
      </div>
    </div>
    <div className="imageContainer">
      <div className="image uesugiImg"> </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default TemplateBody
