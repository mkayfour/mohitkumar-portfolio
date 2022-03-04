import type { NextPage } from "next";
import Image from "next/image";

import { SocialIcon } from "react-social-icons";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
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
