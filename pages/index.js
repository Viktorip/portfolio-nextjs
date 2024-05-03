import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
import Layout from '../components/layout';

export default function Home() {
  const [width, setWidth] = useState(0);
  useEffect(()=>{
    setWidth(window.innerWidth);
  }, []);

  return (
    <Layout id="home">
      <main className={styles.main}>
        <AnimatePresence>
          <div className={styles.leftside} key="left">
            <div className={styles.introcont}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2.5 }}
                key="1"
                className={styles.intro}>
                Hello
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2.5, delay: 2 }}
                key="2"
                className={styles.intro2}>
                , I&apos;m Viktori
              </motion.div>

            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2.5, delay: 4 }}
              key="3"
              className={styles.intronext}>
              Full Stack Developer
            </motion.div>
            <motion.div
              initial={{ opacity: 0, zIndex: -1 }}
              animate={{ opacity: 1, zIndex: 1 }}
              transition={{ duration: 2.5, delay: 7.5 }}
              key="4"
              className={styles.buttonCont}>
              <Link href="/contact" passHref><div>Hire Me!</div></Link>
              <Link href="/about" passHref><div>About Me</div></Link>
            </motion.div>
          </div>

          <div className={styles.rightside} key="right">
            <motion.div
              initial={{ top: "-50%", left: "10%" }}
              animate={{ top: width < 1000 ? "20%" : "40%" }}
              transition={{ duration: 1.5, delay: 5.5 }}
              key="5"
              className={styles.notme}>
              <Image src="/images/notme.png" width={'153'} height={'45'} priority alt="Not me" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 5.5 }}
              key="6"
              className={styles.guy}>
              <Image src="/images/random_guy_716.jpg" width={'716'} height={'1156'} priority alt="Not me" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 7 }}
              key="7"
              className={styles.guybar}>
              <Image src="/images/random_guy_bar_716.jpg" width={'716'} height={'1156'} priority alt="Not me censored" />
            </motion.div>
          </div>
        </AnimatePresence>
      </main>
    </Layout>
  )
}