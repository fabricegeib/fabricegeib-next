import Image from "next/image";
import footerStyles from "../styles/Footer.module.scss";

export default function Footer({ children }) {
  // return <div className={styles.container}>{children}</div>

  return (
    <footer className={footerStyles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by
        <span className={footerStyles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  );
}
