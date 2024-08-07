import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import Limitbreakthrough35 from '../components/Limitbreakthrough35';
import LimitbreakthroughC35 from '../components/LimitbreakthroughC35';

export default function Calculator() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Limit Breakthrough Calculator! One Punchman</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main>
          <h1 className={styles.title}>
            Welcome to OPM2.0 Limit Breakthrough Calc 35!
          </h1>
          <Limitbreakthrough35></Limitbreakthrough35>
          <LimitbreakthroughC35></LimitbreakthroughC35>
          <button><Link href="/">Back</Link></button>
        </main>
  
        <footer>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <Image src="/vercel.svg" width="50" height="50" alt="Vercel" className={styles.logo} />
          </a>
          <span id="about">Made by Freddy Beasley</span>
          <br></br>
          <Link id="disclaimer" href="/disclaim">Disclaimer</Link>
        </footer>
        <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: white;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        footer #about{
          margin-left: 2.5rem;
          font-weight: bold;
        }
        footer #disclaimer{
          margin-left: .5rem;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
    )
}