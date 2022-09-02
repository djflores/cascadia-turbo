import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Button } from 'react-ui';
import { Hello } from 'react-ui/Hello';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Button />
        </div>
    );
};

export default Home;
