import styles from "../styles/About.module.css";
import Layout from "../components/layout";

export default function About(props) {


    return (
        <Layout key="about">
            <div className={styles.main}>
                About me page
            </div>
        </Layout>
    );
}