import styles from '../styles/Project.module.css'
import Image from 'next/image'
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
        
      </div>
    )
  }
