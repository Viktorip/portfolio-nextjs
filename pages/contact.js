import styles from "../styles/Contact.module.css";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "../components/layout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCopy } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import React, { useState } from "react";
import Link from 'next/link';

export default function Contact(props) {
    const email1 = "viktori.patalainen";
    const email2 = "@gmail.com";

    const [tap, setTap] = useState({1: false, 2: false, 3: false});

    const handleTap = (event, id) => {
        if (event.pointerType == 'touch') {
            setTap({...tap, [id]: !tap[id]});
        }
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
            backgroundColor: "rgb(226, 225, 243)",
            transitionEnd: {
                //nothing for now
            }
        },
        shake: {
            transition: {
                duration: 0.25,
                repeatType: "mirror",
                repeat: Infinity,
                repeatDelay: 4
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
            color: "rgb(52, 52, 212)"
        },
        shake: {
            transition: {
                duration: 0.5
            },
            y: 0,
            color: "#fff"
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
        },
    }


    //<div data-tip="Email copied!" ref={ref => emailRef = ref} className={styles.copy} onClick={() => navigator.clipboard.writeText(email)}><FontAwesomeIcon icon={faCopy} color="white" /></div>
    //<ReactTooltip effect="solid" type="light" border textColor="black" backgroundColor="white" event="click" afterShow={(e)=>hideTooltip(e)} />
    return (
        <Layout key="contact">
            <AnimatePresence>
                <main className={styles.main}>
                    <div className={styles.iconCont}>
                        <motion.div
                            whileHover="hover"
                            onTap={(e)=>handleTap(e, 1)}
                            animate={tap[1] ? "hover" : "shake"}
                            variants={grow}
                            className={styles.contactCont}
                        >
                            <motion.div
                                onTap={()=>window.open(`mailto:${email1 + email2}`)}
                                className={styles.contactTitle}
                                variants={fadeIn}
                            >
                                <span className={styles.email1}>{email1}</span><span className={styles.email2}>{email2}</span>
                            </motion.div>

                            <motion.div
                                variants={move}
                                className={styles.icon}
                            >
                                <FontAwesomeIcon icon={faEnvelope} size="3x" />
                            </motion.div>

                        </motion.div>
                        <motion.div
                            whileHover="hover"
                            onTap={(e)=>handleTap(e, 2)}
                            animate={tap[2] ? "hover" : "shake"}
                            variants={grow}
                            className={styles.contactCont}
                        >
                            <motion.div
                                onTap={()=>window.open("https://www.linkedin.com/in/viktori-patalainen/", "_blank")}
                                className={styles.contactTitle}
                                variants={fadeIn}
                            >
                                <div className={styles.brand}>Linkedin</div>
                            </motion.div>

                            <motion.div
                                variants={move}
                                className={styles.icon}
                            >
                                <FontAwesomeIcon icon={faLinkedin} size="3x" />
                            </motion.div>

                        </motion.div>
                        <motion.div
                            whileHover="hover"
                            onTap={(e)=>handleTap(e, 3)}
                            animate={tap[3] ? "hover" : "shake"}
                            variants={grow}
                            className={styles.contactCont}
                        >
                            <motion.div
                                onTap={()=>window.open("https://github.com/Viktorip/Viktorip", "_blank")}
                                className={styles.contactTitle}
                                variants={fadeIn}
                            >
                                <div className={styles.brand}>Github</div>
                            </motion.div>

                            <motion.div
                                variants={move}
                                className={styles.icon}
                            >
                                <FontAwesomeIcon icon={faGithub} size="3x" />
                            </motion.div>

                        </motion.div>
                    </div>
                    <div className={styles.moreInfo}>
                        <Link href="/about" passHref>
                            <div className={styles.tellmore}>
                                Tell me more about yourself first
                            </div>
                        </Link>
                    </div>
                </main>
            </AnimatePresence>
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