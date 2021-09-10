import styles from '../styles/About.module.css'
import Head from 'next/head'

export default function About() {
    return (
    <div className={styles.wrapper}>
        <div className={styles.aboutwrap}>
        <div className={styles.textarea}>
                <h1>Working as a web developer at JPT Group INC.</h1>
                <h1>Building stuff with ReactJS and Python.</h1>
                <h1>Watching animes and reading mangas or looking at Cars.</h1>
                <h1>Building a Café Racer.</h1>
            </div>
        
        </div>

        <Head>
          <title>Tanmay Siwach</title>
          <link rel="icon" href="/TA.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>
    </div>
    )
  }
  
