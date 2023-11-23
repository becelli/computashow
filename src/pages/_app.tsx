import "~/styles/globals.css";

import type { AppProps } from "next/app";
import { Roboto_Mono } from "next/font/google";
import Head from "next/head";

const monospace = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin-ext"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${monospace.variable} font-mono`}>
      <Head>
        <title>ComputaShow</title>
        <meta name="description" content="ComputaShow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
