import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getGithubRepos } from "./api/github/fabricegeib/repos";
import { useState } from "react";
import Header from "../components/header";
import Clients from "./clients";
import Footer from "../components/footer";
import homeStyles from "../styles/Home.module.scss";

export const getServerSideProps = async () => {
  const repos = await getGithubRepos();

  if (!repos) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      repos,
      // will be passed to the page component as props
    },
  };
};

export default function Home({ repos }) {
  console.log("Repos :", repos);
  const clients = useState([]);

  // const fetchTodos = async () => {
  //   const response = await fetch("/api/todos");
  //   const data = await response.json();
  //   settodos(data);
  // };

  return (
    // <div className={homeStyles.container}>
    <div className="container">
      <Head>
        <title>Fabrice Geib</title>
        <meta name="description" content="I am Fabrice Geib, web developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={homeStyles.main}>
        <div className="about">
          <h1 className={homeStyles.title}>Hello</h1>
          <p>I&apos;m Fabrice Geib, a French web integrator and front end developer</p>

          <p>I love to experiment interactivity</p>

          <p>
            My work consists of a healthy mix of useful interface libraries, pointless animations and minimalist games.
          </p>

          <p>Most of my projects are released open source so you can freely modify or improve on them.</p>
        </div>

        <div className="clients">
          <h2>I worked for</h2>
          <Clients />
        </div>

        <div className="api">
          <h2>API</h2>
          <div className="cards">
            <div className="card">
              <p>clients</p>
              <Link href="api/clients" alt="lien">
                lien
              </Link>
            </div>
            <div className="card">
              <p>clients/[clientid]</p>
              <Link href="api/clients/1" alt="lien">
                lien
              </Link>
            </div>
            <div className="card">
              <p>github/repos</p>
              <Link href="api/github/fabricegeib/repos" alt="lien">
                lien
              </Link>
            </div>
            <div className="card">
              <p>hello</p>
              <Link href="api/hello" alt="lien">
                lien
              </Link>
            </div>
          </div>
        </div>

        <div className="pages">
          <h2>Pages</h2>
          <div className="cards">
            <div className="card">
              <p>index</p>
              <Link href="/" alt="lien">
                lien
              </Link>
            </div>
            <div className="card">
              <p>shows</p>
              <Link href="shows" alt="lien">
                lien
              </Link>
            </div>
          </div>
        </div>

        <div className="github">
          <h2>Github</h2>
          <h3>Repos ({repos.length})</h3>
          <div className="cards repos">
            {repos.map((repo) => (
              <>
                <div className="card" key={repo.id} data-id={repo.id} data-language={repo.language}>
                  <h3>{repo.name}</h3>
                  <p>{repo.description}</p>
                  <p>{repo.pushed_at}</p>
                  <a href={repo.html_url} alt="lien">
                    lien
                  </a>
                </div>
              </>
            ))}
          </div>
        </div>

        <div className="xxx">
          <h2>I listen</h2>
        </div>

        <div className="xxx">
          <h2>I watch</h2>
          <Link href="/shows">Shows</Link>
        </div>

        <div className="xxx">
          <h2>Q&A</h2>

          <p>
            Where are you based?
            <br />
            What are you working on?
            <br />
            Where have you worked?
            <br />
            Are you available for hire ?
          </p>
        </div>

        <div className={homeStyles.social}>
          <h2>Social</h2>
          <div className={homeStyles.social}>
            <a href="https://instagram.com/fabricegeib" className="">
              instagram
            </a>
            <a href="https://pinterest.com/fabricegeib" className="">
              pinterest
            </a>
          </div>
        </div>

        <p className={homeStyles.description}>
          Get started by editing
          <code className={homeStyles.code}>pages/index.js</code>
        </p>

        <div className={homeStyles.grid}>
          <Link className={homeStyles.card} href="/api/hello">
            <h2>Api - Hello →</h2>
            <p>Api pages on your Next.js site.</p>
          </Link>

          <Link className={homeStyles.card} href="/api/hello">
            <h2>Api - Hello →</h2>
            <p>Api pages on your Next.js site.</p>
          </Link>

          <Link className={homeStyles.card} href="/api/hello">
            <h2>Api - Hello →</h2>
            <p>Api pages on your Next.js site.</p>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
