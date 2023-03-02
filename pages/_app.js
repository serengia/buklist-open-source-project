import { Provider } from "react-redux";
import LayoutGeneral from "../components/layout/LayoutGeneral";
import store from "../redux/store";
import "../styles/globals.scss";

export default function App({ Component, pageProps }) {
  const getLayout =
    Component.getLayout ?? ((page) => <LayoutGeneral>{page}</LayoutGeneral>);
  return (
    <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
  );
}
