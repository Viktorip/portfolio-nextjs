import Head from "next/head";
import { motion, AnimatePresence } from 'framer-motion';
import styles from './layout.module.css';


export default function Layout({children}) {

    const variants = {
        hidden: { left: "200%" },
        enter: { left: 0 },
        exit: { left: "-200%" },
    }


    return (

        <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5, type: 'tween', ease: "easeOut" }}
            className={styles.main}
        >
            {children}
        </motion.div>

    );
}