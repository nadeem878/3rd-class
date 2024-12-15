import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Navigate from "../components/Navigate";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Navigate />
    </>
  );
}

export default MyApp;
