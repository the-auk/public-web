import React, { useEffect, useState } from "react";
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Project from './Projects.js'
import About from './About.js'
import Coding from './Coding.js'
export default function Home() {
  const[showSection, setshowSection] = useState("about")

  // const[showAbout, setshowAbout] = useState(true)
  // const[showProject, setshowProject] = useState(false)
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <div className={styles.navbar}>
        <a href='#'>TheAUk</a>
        <img className={styles.ta} src="/TA.png" />
      </div>
      <div className={styles.horizontalLine}></div>
      <div className={styles.navbarright}>
        <div className={styles.navanchor}><a href="http://github.com/the-auk">Github</a>&emsp;</div>
        <div className={styles.navanchor}><a href="http://linkedin.com/in/tanmaysiwach">LinkedIn</a>&emsp;</div>
        <div className={styles.navanchor}><a href="/Siwach-Resume.pdf">Resume</a></div>
      </div>
      <div className={styles.verticalLine}></div>
        <div className={styles.first}> 
        <div className={styles.firstleft}>
            <div className={styles.ivar}><p><span className={styles.slideleft}>T</span> a n m a y &ensp; <span className={styles.slideleft}>S</span> i w a c h</p></div>
        </div>      
        <div className={styles.tealbox}></div>
        </div>
        <div className={styles.secondnav}>
        {/* <button onClick={()=> setshowAbout(true) && setshowProject(false)}>What I'm Upto</button>
        <button onClick={()=> {setshowProject(true); setshowAbout(false);} }>Projects</button> */}
        <button className={styles.secnavbtn} onClick={()=> setshowSection("about")}>What I'm Upto</button>
        <button className={styles.secnavbtn} onClick={()=> setshowSection("project")}>Projects</button>
        <button className={styles.secnavbtn} onClick={()=> setshowSection("coding")}>Coding Experience</button>
        </div>
        
        </div>
      <div className={styles.wrapper2}> 
      {showSection=="about" && <About />}
      {showSection=="project" && <Project />}
      {showSection=="coding" && <Coding />}
      {/* {showAbout && <About />} */}
      {/* {showProject && <Project />} */}
        </div>
      <Head>
        <title>Tanmay Siwach</title>
        <link rel="icon" href="/TA.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      
    </div>
  )
}
