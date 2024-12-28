import fs from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export async function getStaticProps() {
  const dataDir = path.join(process.cwd(), "data");
  const files = fs.readdirSync(dataDir);

  const apps = files.map((file) => {
    const filePath = path.join(dataDir, file);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileContents);
  });

  return { props: { apps } };
}

const HomePage = ({ apps }) => (
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
      <div id="grid">
        {apps.map((app) => (
          <Link key={app.slug} legacyBehavior href={`/apps/${app.slug}`}>
            <div className="card">
              <div>
                <Image src={app.logo} alt={`${app.name} logo`} width={1024} height={1024} />
                <div>{app.name}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </>
);

export default HomePage;
