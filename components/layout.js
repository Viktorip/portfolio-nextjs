import { motion } from 'framer-motion';
import styles from './layout.module.css';


export default function Layout({children, id}) {

    const variants = {
        hidden: { left: "200%" },
        enter: { left: "0%" },
        exit: { left: "-200%" },
    }

    return (

        <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 1, type: 'tween', ease: "easeOut" }}
            className={styles.main}
            key={id}
        >
            {children}
        </motion.div>
        
    );
}