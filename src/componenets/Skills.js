import React ,{useState}from 'react'
import "./Skills.css"
import { FaCss3Alt,FaReact,FaGithubAlt,FaJava,FaBootstrap,FaStar,FaStarHalfAlt,FaRegStar} from 'react-icons/fa';
import {SiJavascript,SiCodechef,SiMysql,SiMongodb} from "react-icons/si"
import {DiNodejs} from "react-icons/di"

function Skills() {
    const [github,setGithub] = useState(false);
    return (
        <div className="skills">
            <ul>
                <li className="skills__1 card">  
                <div className="card__front">{<FaCss3Alt className="skills__icon" size={50}/>}</div>
                <div className="card__back">
                    <div className="back__stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                    </div>
                    <div className="back__line"></div>
                    <p>CSS</p></div></li>
                <li className="skills__2 card"> <div className="card__front">{<SiJavascript className="skills__icon" size={40}/>}</div>
                <div className="card__back">
                    <div className="back__stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                    </div>
                    <div className="back__line"></div>
                    <p>Javascript</p></div></li>
                <li className="skills__3 card"> <div className="card__front">{<FaReact className="skills__icon" size={50}/>}</div>
                <div className="card__back">
                    <div className="back__stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                    </div>
                    <div className="back__line"></div>
                    <p>React</p></div></li>


                <li className="skills__4 skills__github" onMouseEnter={()=>{setGithub(true)}} onMouseLeave={()=>{setGithub(false)}}> <div className="card__front">{<FaGithubAlt className={`skills__icon-git ${github && "skills__github-icon"}`} size={50}/>}</div></li>


                <li className="skills__5 card"> <div className="card__front">{<DiNodejs className="skills__icon" size={60}/>}</div>
                <div className="card__back">
                    <div className="back__stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaRegStar />
                    </div>
                    <div className="back__line"></div>
                    <p>Node Js</p></div></li>
                <li className="skills__6 card"> <div className="card__front">{<SiCodechef className="skills__icon" size={60}/>}</div>
                <div className="card__back">
                    <div className="back__stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaRegStar />
                    </div>
                    <div className="back__line"></div>
                    <p>Codechef</p></div></li>
                <li className="skills__7 card"> <div className="card__front">{<SiMysql className="skills__icon" size={60}/>}</div>
                <div className="card__back">
                    <div className="back__stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                    </div>
                    <div className="back__line"></div>
                    <p>MySQl</p></div></li>
                <li className="skills__8 card"> <div className="card__front">{<SiMongodb className="skills__icon" size={60}/>}</div>
                <div className="card__back">
                    <div className="back__stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaRegStar />
                    </div>
                    <div className="back__line"></div>
                    <p>Mongodb</p></div></li>
                <li className="skills__9 card"> <div className="card__front">{<FaJava className="skills__icon" size={60}/>}</div><div className="card__back">
                    <div className="back__stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaRegStar />
                    </div>
                    <div className="back__line"></div>
                    <p>Java</p></div></li>
                <li className="skills__10 card"> <div className="card__front">{<FaBootstrap className="skills__icon" size={60}/>}</div><div className="card__back">
                    <div className="back__stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaRegStar />
                    </div>
                    <div className="back__line"></div>
                    <p>Bootstrap</p></div></li>
               
            </ul>
        </div>
    )
}

export default Skills
