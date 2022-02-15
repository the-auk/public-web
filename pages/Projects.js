import styles from '../styles/Project.module.css'
import Head from 'next/head'
import Image from 'next/image'
import React, {useState } from "react";

export default function Projects() {
  const[showSection, setshowSection] = useState("mixit")

    return (
      <div className={styles.wrapper}>
        <div className={styles.projectleft}>
          <div className={styles.headingWrapper}>
          <div className={styles.projectheading}>
          <button onClick={()=> setshowSection("mixit")}>MixIt</button></div>
          <div className={styles.projectheading}>
          <button onClick={()=> setshowSection("calend")}>Calendar_App</button></div>
          <div className={styles.projectheading}>
          <button onClick={()=> setshowSection("antispot")}>Anti_Spotify</button></div>
          <div className={styles.projectheading}>
          <button onClick={()=> setshowSection("budget")}>Monthly_Budget_App</button></div>
          <div className={styles.projectheading}>
          <button onClick={()=> setshowSection("piggame")}>Pig_Game</button></div>
          <div className={styles.projectheading}>
          <button onClick={()=> setshowSection("meals")}>theAUk_Meals</button></div>
          </div>
        </div>
        <div className={styles.projectright}>
          <div className={styles.imgwrapper}>
          <div className={styles.projectimage}>
          {showSection=="mixit" && <Image className={styles.projectimg}
          src="/MIXIT.webp" alt="MixIt Android Application" 
          layout='fill' placeholder='blur' loading="eager" />}
          </div>
          <div className={styles.projectimage}>
          {showSection=="calend" && <Image className={styles.projectimg}
          src="/calen.webp" alt="Java Calendar Application" 
          layout='fill' placeholder='blur' loading="eager" />}
          </div>
          <div className={styles.projectimage}>
          {showSection=="antispot" && <Image className={styles.projectimg}
          src="/anti.webp" alt="Anti-Spotify Web Application" 
          layout='fill' placeholder='blur' loading="eager" />}
          </div>
          <div className={styles.projectimage}>
          {showSection=="budget" && <Image className={styles.projectimg}
          src="/JSC.webp" alt="Monthly Budget Web Application" 
          layout='fill' placeholder='blur' loading="eager" />}
          </div>
          <div className={styles.projectimage}>
          {showSection=="piggame" && <Image className={styles.projectimg}
          src="/DOM.webp" alt="Pig Game Web Application" 
          layout='fill' placeholder='blur' loading="eager" />}
          </div>
          <div className={styles.projectimage}>
          {showSection=="meals" && <Image className={styles.projectimg}
          src="meals.webp" alt="Food Ordering App built on React" 
          layout='fill' placeholder='blur' loading="eager" />}
          </div>
          </div>
        </div>

        <Head>
          <title>Tanmay Ivar Siwach</title>
          <link rel="icon" href="/TA.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>
      </div>
    )
  }
