import styles from "../styles/Contact.module.css";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "../components/layout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCopy } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import ReactTooltip from 'react-tooltip';
import React, { useState } from "react";

export default function Contact(props) {
    const email1 = "black.hair";
    const email2 = "@gmail.com";
    const [one, setOne] = useState(true);

    const getDelay = () => {
        return Math.ceil(Math.random()*4);
    }

    const grow = {
        hover: {
            transition: {
                when: "beforeChildren",
                duration: 1,
                ease: "easeInOut"
            },
            scale: 2,
            borderRadius: "50%",
            rotate: 360,
            padding: "3rem",
            backgroundColor: "#ecc19c",
            transitionEnd: {
                //nothing for now
            }
        },
        shake: {
            transition: {
                duration: 0.25,
                repeatType: "mirror",
                repeat: Infinity,
                repeatDelay: getDelay()
            },
            rotate: [0, -8, 12, 0, -10, 6, 0],
        }
    }

    const move = {
        hover: {
            transition: {
                duration: 1
            },
            y: "50px",
            color: "#26495c"
        }
    }

    const fadeIn = {
        hover: {
            transition: {
                duration: 2.5
            },
            opacity: 1,
            display: "inline-block"
        },
        grow: {
            transition: {
                duration: 0.5,
            },
            scale: 1.2,
        }
    }


    //<div data-tip="Email copied!" ref={ref => emailRef = ref} className={styles.copy} onClick={() => navigator.clipboard.writeText(email)}><FontAwesomeIcon icon={faCopy} color="white" /></div>
    //<ReactTooltip effect="solid" type="light" border textColor="black" backgroundColor="white" event="click" afterShow={(e)=>hideTooltip(e)} />
    return (
        <Layout key="contact">
            <main className={styles.main}>
                <motion.div
                    whileHover="hover"
                    animate="shake"
                    variants={grow}
                    className={styles.contactCont}
                >
                    <motion.a
                        href={`mailto:${email1+email2}`}
                        className={styles.contactTitle}
                        variants={fadeIn}
                    >
                        <span className={styles.email1}>{email1}</span><span className={styles.email2}>{email2}</span>
                    </motion.a>

                    <motion.div
                        variants={move}
                        className={styles.icon}
                    >
                        <FontAwesomeIcon icon={faEnvelope} size="3x" />
                    </motion.div>

                </motion.div>

                <motion.div
                    whileHover="hover"
                    animate="shake"
                    variants={grow}
                    className={styles.contactCont}
                >
                    <motion.a
                        href="https://linkedin.com"
                        target="_blank"
                        className={styles.contactTitle}
                        variants={fadeIn}
                        
                    >
                        <div className={styles.brand}>Linkedin</div>
                    </motion.a>

                    <motion.div
                        variants={move}
                        className={styles.icon}
                    >
                        <FontAwesomeIcon icon={faLinkedin} size="3x" />
                    </motion.div>

                </motion.div>
            </main>
        </Layout>
    );
}

/*

<motion.div
            initial={{ left: '200%' }}
            animate={{ left: '0' }}
            transition={{ duration: 0.5, type:'tween', ease: "easeOut" }}
            className={styles.main}>
            <div className={styles.card}>
                <div className={styles.contact}>
                    <span>blackhair95@gmail.com</span>
                </div>
                <div className={styles.contact}>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">Linkedin</a>
                </div>
            </div>
        </motion.div>

*/