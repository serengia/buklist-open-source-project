import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import "react-toastify/dist/ReactToastify.css";
import LayoutGeneral from "../components/layout/LayoutGeneral";
import store from "../redux/store";
import "../styles/globals.scss";

export default function App({ Component, pageProps }) {
  const getLayout =
    Component.getLayout ?? ((page) => <LayoutGeneral>{page}</LayoutGeneral>);
  return (
    <SessionProvider>
      <Provider store={store}>
        {getLayout(<Component {...pageProps} />)}
      </Provider>
    </SessionProvider>
  );
}
