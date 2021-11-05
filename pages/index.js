import Head from "next/head";
import Image from "next/image";
import profilePic from "../public/me.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Timothy Warrington</title>
        <meta name="description" content="My amazing personal website!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Image
          alt="very accurate anime rendition of myself"
          height={200}
          src={profilePic}
          width={200}
        />
        <h1>Timothy Warrington</h1>
        <ul>
          <li>
            <a
              href="https://github.com/tjrawrin"
              target="_blank"
              rel="nofollow noreferrer noopener"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://gitlab.com/tjrawrin"
              target="_blank"
              rel="nofollow noreferrer noopener"
            >
              GitLab
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/timothywarrington"
              target="_blank"
              rel="nofollow noreferrer noopener"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </main>
    </>
  );
}
