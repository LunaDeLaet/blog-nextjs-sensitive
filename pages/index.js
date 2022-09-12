import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sensitive Blog | Home</title>
        <meta
          name='keywords'
          content='blog'
        />
      </Head>
      <div>
        <h1 className={styles.title}>Home</h1>
        <p className={styles.text}>Home</p>
        <Link
          href='/posts'
          className={styles.btn}>
          See All Blog Posts
        </Link>
      </div>
    </>
  )
}
