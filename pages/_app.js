import '../styles/globals.css';
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence
      exitBeforeEnter
      initial={false}
      onExitComplete={() => console.log("exit complete")}
      key="topanimate"
    >
      <Component {...pageProps} key={`${router.route}uniquekey`} />
    </AnimatePresence>
  );
}

export default MyApp
