import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  console.log("aq");

  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="/home/matheus/Projects/brainny/welcomeWeek/front/admin/styles/globals.css"
        />
      </Head>
      <body style={{ fontFamily: "'Poppins', sans-serif;" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
