import "~/styles/globals.css";

import type { AppProps } from "next/app";
import { Roboto_Mono } from "next/font/google";

const monospace = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin-ext"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${monospace.variable} font-mono`}>
      <Component {...pageProps} />
    </div>
  );
}
