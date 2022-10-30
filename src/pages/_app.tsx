import "~/css/global.scss";

import type { NextComponentType, NextPageContext } from "next";
import type { AppProps } from "next/app";
import * as React from "react";

import { useAppStore } from "~/context/use-app-store";
import { gaTrackingId, isDev } from "~/lib/constants";
import { GAScripts, useAppGA } from "~/lib/ga";

export type Page<P = Record<string, unknown>> = NextComponentType<
  NextPageContext,
  Record<string, unknown>,
  P
> & { getLayout?: GetLayoutFn<P> };

export type GetLayoutFn<P = Record<string, unknown>> = (
  props: Omit<AppProps<P>, "pageProps"> & { pageProps: P }
) => React.ReactNode;

const App = ({ Component, pageProps, ...rest }: AppProps) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  if (gaTrackingId) useAppGA();

  React.useEffect(() => {
    const maxWaitTime = 1500; // tweak this as needed.

    const timeout = window.setTimeout(() => {
      onReady();
    }, maxWaitTime);

    function onReady() {
      window.clearTimeout(timeout);
      useAppStore.setState({ fontsLoaded: true });
      document.documentElement.classList.add("fonts-loaded");
    }

    try {
      document.fonts.ready
        .then(() => {
          onReady();
        })
        .catch((error: unknown) => {
          console.error(error);
          onReady();
        });
    } catch (error) {
      console.error(error);
      onReady();
    }
  }, []);

  const getLayout: GetLayoutFn =
    (Component as any).getLayout ||
    (({ Component, pageProps }) => <Component {...pageProps} />);

  return (
    <>
      {gaTrackingId && <GAScripts />}
      {getLayout({ Component, pageProps, ...rest })}
    </>
  );
};

export default App;
