import Layout from "../components/layout"
import Head from "next/head";

const BETASERIES_API = 'https://api.betaseries.com/episodes/list?key=fc5857dab976&access_token=f0358fbe5638';
const BETASERIES_API_SEASONS_IMG = 'https://api.betaseries.com/pictures/shows?key=fc5857dab976&access_token=f0358fbe5638&width=600&height=900&id='
// https://api.betaseries.com/shows/pictures?key=fc5857dab976&access_token=f0358fbe5638&id=14763
// 14763 13 Reasons Why
// 14752 Abstract: The Art of Design
// https://img.betaseries.com/L4erAJOa6R8BdJn9ZVqXSbreI3o=/250x250/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2F9fdeb4c114490b39ecabf7799bd04d67.jpg

export async function getServerSideProps() {
	const res = await fetch(`${BETASERIES_API}`)
	const data = await res.json();
	return {
		props: {
			data
		}
	}
}

const ShowCard = ({ data }) => {
	console.log('unseen episode', data.unseen);
	return (
		<>
			<img src={BETASERIES_API_SEASONS_IMG + data.id} alt="" />

			<div className="show-info">
				<h3>{data.title}</h3>
				{/* ({data.id}) */}

				<article>
					{/* <p>
                    La taille de l'array unseen est de {data.unseen && data.unseen.length}
                </p> */}

					{/* <p>
                    Il reste au moins {data.unseen && data.unseen.length} épisodes à voir
                </p> */}

					{/* <div className="show-unseen">
                    <ul>
                        {data.unseen.map((episode) => {
                            return (
                                <>
                                    <li><h4>{episode.title} <span>({episode.code})</span></h4></li>
                                    <li>{episode.description}</li>
                                </>
                            );
                        })}
                    </ul>
                </div> */}

					<div className="show-unseen">
						<p>Épisode à voir :
							<a href={data.unseen.[0].platform_links.[0] && data.unseen.[0].platform_links.[0].link}>
								<h4>{data.unseen.[0].title} <span>({data.unseen.[0].code})</span></h4>
							</a>
						</p>

						<ul>


							{/* <li className="show-info-description">{data.unseen.[0].description}</li> */}

						</ul>
					</div>
				</article>
			</div>
		</>
	);
};

const BetaSeries = ({ data }) => {
	console.log('shows', data);

	// console.log('unseenLuky', data.unseen);

	// console.log('unseenFab', data.shows.[0].unseen);
	return (
		<Layout>
			<Head>
				<title>Shows</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h1>Shows :</h1>
			<div className="shows">
				{data.shows.map((show, index) => {
					return (
						<div key={show.id} className="show">
							{/* <div className="show_info">
                                <h3>{shows.title}</h3>
                                <h3>{shows.id}</h3>
                                <img src="{BETASERIES_API}{shows.id}" />
                            </div> */}


							<ShowCard data={show} />

							{/* <div className="unseens">
                                {data.shows.slice(0, 10).map((show) => {
                                    // Ici on recup le show qui contiens un array d'episode "unseen"
                                    // On itère sur l'array unseen
                                    return show.unseen.map((toSee) => {
                                        // On récupère un objet qui contiens plein d'attributs
                                        // Genre: 
                                        //
                                        //     date: "2018-02-02"
                                        //     description: "Ayant appris l'identité de son enveloppe, Kovacs exige d'Ortega qu'elle lui dise tout. Poe livre un indice qui fait avancer l'affaire Bancroft de façon significative."
                                        //     episode: 5
                                        //     global: 5
                                        //     id: 971313
                                        //
                                        // console.log(toSee)
                                        return <span>{toSee.title}</span>;
                                    });
                                })}
                            </div> */}

						</div>
					)
				})}
			</div>
		</Layout>
	);
};

export default BetaSeries;