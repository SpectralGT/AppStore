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
      <meta
        name="google-site-verification"
        content="kRbwjumXat52-e3mUB7tt-faI1jx9mY0x1EMOPC5egE"
      />
    </Head>
    <div id="content">
      <div id="grid">
        {apps.map((app) => (
          <Link key={app.slug} legacyBehavior href={`/apps/${app.slug}`}>
            <div className="card">
              <div>
                <Image
                  src={app.logo}
                  alt={`${app.name} logo`}
                  width={1024}
                  height={1024}
                />
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
