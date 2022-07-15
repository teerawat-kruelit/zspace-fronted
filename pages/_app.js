import { wrapper } from "../store";
import Modal from "../components/Modal";
import "../styles/globals.scss";

function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Modal className={"modal"} />
    </>
  );
}

export default wrapper.withRedux(App);
