import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  console.log("aq");

  return (
    <Html lang="pt_BR">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <meta charSet="UTF-8" />

        <title>Next-college-app</title>

        <meta name="description" content="Next-College-APP" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          rel="stylesheet"
          href="/home/matheus/Projects/brainny/welcomeWeek/front/admin/styles/globals.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body style={{ fontFamily: "'Poppins', sans-serif;" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
