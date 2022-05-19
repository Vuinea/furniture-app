import Head from "next/head";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Oasis furniture is a place to buy high quality furniture"
        />
        <meta name='author' content="Vinodh Gnanakkan" />
      </Head>
      <MantineProvider
        theme={{
          colorScheme: "dark",
          colors: {
            dark: [
              "#f8fafc",
              "#f1f5f9",
              "#e2e8f0",
              "#cbd5e1",
              "#94a3b8",
              "#64748b",
              "#475569",
              "#334155",
              "#1e293b",
              "#0f172a",
            ],
          },
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}

export default MyApp;
