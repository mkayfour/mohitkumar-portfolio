import type { NextPage } from "next";
import Head from "next/head";

import Image from "next/image";

import { SocialIcon } from "react-social-icons";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const MY_SEO = {
    title: "Mohit Kumar Srivastava",
    description: "Full Stack Developer working with React JS and Node JS",
    openGraph: {
      type: "website",
      url: "https://www.mkayfour.in/",
      title: "Mohit Kumar Srivastava",
      description: "Full Stack Developer working with React JS and Node JS",
      image: "images/main.png",
    },
  };

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <Head>
          <title key="title">{MY_SEO.title}</title>
          <meta
            key="description"
            name="description"
            content={MY_SEO.description}
          />
          <meta key="og:type" name="og:type" content={MY_SEO.openGraph.type} />
          <meta
            key="og:title"
            name="og:title"
            content={MY_SEO.openGraph.title}
          />
          <meta
            key="og:description"
            name="og:description"
            content={MY_SEO.openGraph.description}
          />
          <meta key="og:url" name="og:url" content={MY_SEO.openGraph.url} />
          <meta
            key="og:image"
            name="og:image"
            content={MY_SEO.openGraph.image}
          />
        </Head>

        <h1>Mohit Kumar Srivastava</h1>
        <Image
          src="/images/main.png"
          alt="user"
          height={300}
          width={300}
          className={styles.AppLogo}
        ></Image>
        <p>Oops.. This website is still under construction.</p>
        <p>You can still contact me here.</p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            paddingBottom: "50px",
          }}
        >
          <SocialIcon
            url="https://www.linkedin.com/in/mohit-kumar-125403ab/"
            style={{ marginRight: "10px" }}
          />
          <SocialIcon
            url="https://www.facebook.com/clickwatson/"
            style={{ marginRight: "10px" }}
          />
          <SocialIcon
            url="https://www.instagram.com/mkayfour/"
            style={{ marginRight: "10px" }}
          />
          <SocialIcon
            url="https://github.com/mkayfour"
            // fgColor="white"
            bgColor="white"
            style={{ marginRight: "10px", color: "white" }}
          />
        </div>
      </header>
    </div>
  );
};

export default Home;
