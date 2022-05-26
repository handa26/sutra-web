import Navbar from "../components/navbar/navbar.component";
import Footer from "../components/footer/footer.component";

import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
