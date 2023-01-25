import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import Head from 'next/head';

export default function Disclaim(){
    return (
        <div className={styles.container}>
            <Head>
                <title>Gacha simulator Disclaimer</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <p className={styles.disclaim}>I do not own any graphics that is used by this app, all of its graphics rights belong to its respective owners</p>
            <button><Link href="/">Back</Link></button>
        </div>
    )
}

