import styles from '../styles/globals.scss';
import utils from '../styles/Utils.module.scss';
import { Analytics } from '@vercel/analytics/react';

export default function App({Component, pageProps}){
    return (
    <>
        <Component {...pageProps}></Component>
        <Analytics/>
    </>
    )
}