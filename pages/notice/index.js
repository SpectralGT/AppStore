import Head from "next/head";
import Link from "next/link";

const HomePage = () => (
  <>
    <Head>
      <meta name="google-site-verification" content="kRbwjumXat52-e3mUB7tt-faI1jx9mY0x1EMOPC5egE" />
      <title>Apps by Atharv</title>
      <html lang="en"></html>
      <meta charSet="UTF-8" />
      <meta name="description" content="Apps coded by Atharv Singh" />
      <meta name="keywords" content="Apps, Atharv, Singh, RiceCure, ProjectK, SilentAbyss" />
      <meta name="author" content="Atharv Singh" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <div id="content">
      <h1>
        My Play Store account is currently down, but you can find all my apps and games at this{" "}
        <Link href={"https://apps.atharvsingh.co.in"}>link</Link>
      </h1>
    </div>
  </>
);

export default HomePage;
