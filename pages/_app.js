import '../styles/globals.css';
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; 

import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence
      initial={false}
      onExitComplete={() => console.log("exit complete")}
      mode="wait"
      //key="topanimate"
    >
      <Component {...pageProps} key={`${router.route}uniquekey`} />
    </AnimatePresence>
  );
}

export default MyApp
