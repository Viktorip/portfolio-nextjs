import styles from "../styles/About.module.css";
import Layout from "../components/layout";
import Image from 'next/image';
import { motion } from "framer-motion";
import Link from 'next/link';
import { useState } from "react";

export default function About(props) {

    const [tap, setTap] = useState(false);

    const original = {
        breath: {
            scale: 1.05,
            transition: {
                duration: 3,
                repeatType: "mirror",
                repeat: Infinity,
                //repeatDelay: 0.5
            }
        },
        start: {
            scale: 1
        },
        show: {
            opacity: 1
        },
        hide: {
            opacity: 0
        }
    }

    return (
        <Layout id="about">
            <div className={styles.main}>

                    <div className={styles.meCont}>
                        <motion.div
                            initial="start"
                            animate="breath"
                            variants={original}
                            key="1"
                            className={styles.start}>
                            <Image src="/images/face_black_bg_info.jpg" width={'400'} height={'516'} priority alt="Real me" />
                        </motion.div>
                        <motion.div
                            initial="hide"
                            whileHover="show"
                            onTap={(e)=>(e.pointerType == 'touch' ? setTap(true) : null)}
                            animate={tap ? "show" : "hide"}
                            transition={{ duration: 1}}
                            variants={original}
                            key="2"
                            className={styles.end}>
                            <Image src="/images/face_black_bg_text.jpg" width={'400'} height={'516'} priority alt="Still real me" />
                        </motion.div>
                    </div>

                <div className={styles.infoCont}>
                    <div className={styles.title}>Viktori Patalainen</div>
                    <div className={styles.moreinfo}>
                        <p>Viktori is from Espoo and he is a Bachelor of Engineering. Viktori is an observer at first but when you get to know him you will find out that he is a witty, helpful, progressive and warm person. Viktori enjoys working both on the front-end and back-end of web development whether it be re-designing the UI of a digital signing service or creating an authentication system that validates data. Viktori&apos;s main languages are JavaScript (jQuery, React) and Perl and he is open to learning new languages and techniques.</p>
                    </div>
                    <Link href="/contact" passHref>
                        <div className={styles.contact}>I&apos;ve heard enough, you&apos;re hired!</div>
                    </Link>
                </div>
            </div>
        </Layout>
    );
}