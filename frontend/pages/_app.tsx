import Layout from "../components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { TitleProvider } from "@/context/titleContext";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { store, persistor } from "../store";
import { PersistGate } from "redux-persist/integration/react";
import { SessionProvider } from "next-auth/react";
import { ConfigProvider, App as AntApp } from "antd";
import { Analytics } from "@vercel/analytics/react";

const theme = {
  token: {
    colorPrimary: "#000000",
  },
  components: {
    App: {
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    },
  },
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter();

  const noLayoutPaths = [
    "/shop/checkout",
    "/admin/login",
    "/admin/dashboard",
    "/admin/products",
    "/admin/product/add",
  ];
  
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ChakraProvider>
            <TitleProvider>
              {noLayoutPaths.includes(router.pathname) ? (
                <ConfigProvider theme={theme}>
                  <AntApp>
                    <Component {...pageProps} />
                    <Analytics />
                  </AntApp>
                </ConfigProvider>
              ) : (
                <Layout>
                  <ConfigProvider theme={theme}>
                    <AntApp>
                      <Component {...pageProps} />
                      <Analytics />
                    </AntApp>
                  </ConfigProvider>
                </Layout>
              )}
            </TitleProvider>
          </ChakraProvider>
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
}
