import Head from "next/head";
import Image from "next/image";
import Link from 'next/link'
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				{/* <h1 className={styles.title}>
					Hello
				</h1> */}
				<div className="">
					<p>Hello</p>
					<p>
						I'm Fabrice Geib, a French web integrator and front end developer
					</p>

					{/* <p>I love to experiment interactivity</p>

          <p>
            My work consists of a healthy mix of useful interface libraries,
            pointless animations and minimalist games.
          </p>

          <p>
            Most of my projects are released open source so you can freely
            modify or improve on them.
          </p> */}
				</div>

				<div className="">
					<h2>I worked for</h2>
					<div className={styles.grid}>
						<a
							className={styles.card}
							class="projects-link"
							href="https://www.fff.fr/?home"
							rel="noreferrer"
							target="_blank"
						>
							Fédération Française de Football
						</a>

						<a
							className={styles.card}
							class="projects-link"
							href="https://mariannecanarelli.com/"
							rel="noreferrer"
							target="_blank"
						>
							Marianne Canarelli
						</a>

						<a
							className={styles.card}
							class="projects-link"
							href="https://www.lequipe.fr/"
							rel="noreferrer"
							target="_blank"
						>
							L'Équipe
						</a>

						<a
							className={styles.card}
							class="projects-link"
							href="https://helmi.im/"
							rel="noreferrer"
							target="_blank"
						>
							{" "}
							Helmi Domínguez Vanha-aho
						</a>

						<a
							className={styles.card}
							class="projects-link"
							href="https://lespetitspullsdabeth.fr/"
							rel="noreferrer"
							target="_blank"
						>
							{" "}
							Les petits pulls d'Abeth
						</a>

						<a
							className={styles.card}
							class="projects-link"
							href="https://diplomatie-studio.fr/"
							rel="noreferrer"
							target="_blank"
						>
							{" "}
							Diplomatie studio
						</a>

						<a
							className={styles.card}
							class="projects-link"
							href="https://hanneleart.com/"
							rel="noreferrer"
							target="_blank"
						>
							{" "}
							Hannele Wanha-aho
						</a>

						<a
							className={styles.card}
							class="projects-link"
							href="https://florianbrennemann.com/"
							rel="noreferrer"
							target="_blank"
						>
							{" "}
							Florian Brennemann
						</a>

						<a
							className={styles.card}
							class="projects-link"
							href="https://www.societegenerale.fr/"
							rel="noreferrer"
							target="_blank"
						>
							{" "}
							Société Générale
						</a>

						<a
							className={styles.card}
							class="projects-link"
							href="https://www.lediamantaire-paris.fr/"
							rel="noreferrer"
							target="_blank"
						>
							{" "}
							Le Diamantaire
						</a>

						<a
							className={styles.card}
							class="projects-link"
							href="https://lagiraudiereblaisongohier.com/"
							rel="noreferrer"
							target="_blank"
						>
							{" "}
							Château de la Giraudière
						</a>

						<a
							className={styles.card}
							class="projects-link"
							href="https://www.sublimdesign.com/"
							rel="noreferrer"
							target="_blank"
						>
							{" "}
							SublimDesign
						</a>
					</div>
				</div>

				<div className="">
					<h2>Github</h2>
				</div>

				<h2>I listen</h2>

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

				<div className={styles.social}>
					<h2>Social</h2>
					<div className={styles.social}>
						<a href="https://instagram.com/fabricegeib" className="">
							instagram
						</a>
						<a href="https://pinterest.com/fabricegeib" className="">
							pinterest
						</a>
					</div>
				</div>

				<p className={styles.description}>
					Get started by editing{" "}
					<code className={styles.code}>pages/index.js</code>
				</p>

				<div className={styles.grid}>
					<Link href="/api/hello"><a className={styles.card}>
						<h2>Api - Hello &rarr;</h2>
						<p>Api pages on your Next.js site.</p>
					</a></Link>

					<Link href="/api/hello"><a className={styles.card}>
						<h2>Api - Hello &rarr;</h2>
						<p>Api pages on your Next.js site.</p>
					</a></Link>

					<Link href="/api/hello"><a className={styles.card}>
						<h2>Api - Hello &rarr;</h2>
						<p>Api pages on your Next.js site.</p>
					</a></Link>

					<Link href="/api/hello"><a className={styles.card}>
						<h2>Api - Hello &rarr;</h2>
						<p>Api pages on your Next.js site.</p>
					</a></Link>

					<Link href="/api/hello"><a className={styles.card}>
						<h2>Api - Hello &rarr;</h2>
						<p>Api pages on your Next.js site.</p>
					</a></Link>

					<Link href="/api/hello">
						<a className={styles.card}>
							<h2>Api - Hello &rarr;</h2>
							<p>Api pages on your Next.js site.</p>
						</a>
					</Link>

					<Link href="/api/hello"><a className={styles.card}>
						<h2>Api - Hello &rarr;</h2>
						<p>Api pages on your Next.js site.</p>
					</a></Link>

					<Link href="/api/hello"><a className={styles.card}>
						<h2>Api - Hello &rarr;</h2>
						<p>Api pages on your Next.js site.</p>
					</a></Link>

				</div>
			</main >

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{" "}
					<span className={styles.logo}>
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
			</footer>
		</div >
	);
}
