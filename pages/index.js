import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import ContactPage from './ContactPage';

import MainPage from './MainPage';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Resume</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        {/* <HomePage /> */}
        {/* <MyHobbies /> */}
        {/* <ContactPage /> */}
        <MainPage />
      </main>
    </div>
  );
}
