import fs from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

// getStaticProps fetches data based on the slug parameter
export async function getStaticProps({ params }) {
  const dataDir = path.join(process.cwd(), "data");
  const files = fs.readdirSync(dataDir);

  const apps = files.map((file) => {
    const filePath = path.join(dataDir, file);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileContents);
  });

  const { slug } = params;
  const app = apps.filter((item) => item.slug == slug)[0]; // Get the first match (assuming slugs are unique)

  // Return the app data as props
  return { props: { app } };
}

// getStaticPaths defines which paths should be pre-rendered at build time
export async function getStaticPaths() {
  const dataDir = path.join(process.cwd(), "data");
  const files = fs.readdirSync(dataDir);

  const apps = files.map((file) => {
    const filePath = path.join(dataDir, file);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileContents);
  });

  // Generate paths for all available slugs
  const paths = apps.map((app) => ({
    params: { slug: app.slug },
  }));

  // Return the paths and set fallback to false (or true if you want to handle missing paths dynamically)
  return {
    paths,
    fallback: false, // false means other slugs will show a 404
  };
}

const AppDetail = ({ app }) => (
  <>
    <Head>
      <title>{app.name}</title>
      <html lang="en"></html>
      <meta charset="UTF-8" />
      <meta name="description" content={app.description} />
      <meta name="keywords" content={app.name} />
      <meta name="author" content="Atharv Singh" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <div id="info">
      <div id="icon-name">
        <Image src={app.logo} alt={`${app.name} logo`} width={1024} height={1024} />
        <div id="name-download">
          <h1>{app.name}</h1>
          <a href={app.apk} download>
            Download
          </a>
        </div>
      </div>
      <p id="desc">{app.description}</p>
      <div id="screanshots">
        {app.screenshots.map((screenshot, index) => (
          <Image
            key={index}
            src={screenshot}
            alt={`Screenshot ${index + 1} of ${app.name}`}
            width={1024}
            height={1024}
            className="screanshot"
          />
        ))}
      </div>
    </div>
  </>
);

export default AppDetail;
