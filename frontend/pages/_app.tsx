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
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter();

  if (
    router.pathname === "/shop/checkout" ||
    router.pathname === "/admin/login" ||
    router.pathname === "/admin/dashboard" ||
    router.pathname === "/admin/products" ||
    router.pathname === "/admin/product/add"
  )
    return (
      <SessionProvider session={session}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ChakraProvider>
              <TitleProvider>
                <ConfigProvider theme={theme}>
                  <Component {...pageProps} />
                  <Analytics />
                </ConfigProvider>
              </TitleProvider>
            </ChakraProvider>
          </PersistGate>
        </Provider>
      </SessionProvider>
    );

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ChakraProvider>
            <TitleProvider>
              <Layout>
                <ConfigProvider theme={theme}>
                  <AntApp>
                    <Component {...pageProps} />
                  </AntApp>
                </ConfigProvider>
              </Layout>
            </TitleProvider>
          </ChakraProvider>
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
}
