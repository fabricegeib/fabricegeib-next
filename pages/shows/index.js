// import Layout from "../components/layout";
// import Head from "next/head";
import Link from "next/link";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Image from "next/image";

const BETASERIES_API = "https://api.betaseries.com/episodes/list?key=fc5857dab976&access_token=f0358fbe5638";
const BETASERIES_API_SEASONS_IMG =
  "https://api.betaseries.com/pictures/shows?key=fc5857dab976&access_token=f0358fbe5638&width=600&height=900&id=";
// const BETASERIES_API_SEASONS_IMG =
// "https://api.betaseries.com/pictures/shows?key=fc5857dab976&access_token=f0358fbe5638&width=300&height=450&id=";
// https://api.betaseries.com/shows/pictures?key=fc5857dab976&access_token=f0358fbe5638&id=14763
// https://img.betaseries.com/L4erAJOa6R8BdJn9ZVqXSbreI3o=/250x250/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2F9fdeb4c114490b39ecabf7799bd04d67.jpg

export async function getServerSideProps() {
  const res = await fetch(`${BETASERIES_API}`);
  const data = await res.json();
  console.log;
  return {
    props: {
      data,
    },
  };
}

const ShowCard = ({ data }) => {
  // console.log("ShowCard unseen episode", data.unseen);
  return (
    <div className="show" key={data.id}>
      <Image
        className="img"
        src={BETASERIES_API_SEASONS_IMG + data.id}
        alt={"Cover of " + data.title}
        width="300"
        height="450"
      />

      <div className="show-info">
        <h3>{data.title}</h3>

        <p className="">Episode restants : {data.remaining}</p>

        <p>Prochain épisodes :</p>

        <a href={data.unseen[0].platform_links[0] && data.unseen[0].platform_links[0].link}>
          {data.unseen[0].title} <span>({data.unseen[0].code})</span>
        </a>

        {/* <a href={data.unseen[0].platform_links[0] && data.unseen[0].platform_links[0].link}>
            {data.unseen[0].title} <span>({data.unseen[0].code})</span>
          </a> */}

        {data.unseen[0].platform_links.map((platform) => {
          <p>{platform.platform}x</p>;
        })}

        {/* <ul><li className="show-info-description">{data.unseen.[0].description}</li></ul> */}

        {/* <h3>({data.unseen.[0].title})</h3> */}

        {/* <p>La taille de l'array unseen est de {data.unseen && data.unseen.length}</p> */}

        {/* <p>Il reste au moins {data.unseen && data.unseen.length} épisodes à voir</p> */}

        {/* <Link
          href=""
          // href="/show/[name]"
          // as={`/show/${show.id}`}
          key={show.id}
          className="show"
        ></Link> */}
      </div>

      {/* <article>
        <div className="show-unseen">
            <ul>
              {data.unseen.map((episode) => {
                return (
                  <>
                    <li>
                      <h4>
                        {episode.title} <span>({episode.code})</span>
                      </h4>
                    </li>
                    <li>{episode.description}</li>
                  </>
                );
              })}
            </ul>
          </div>
      </article> */}
    </div>
  );
};

const BetaSeries = ({ data }) => {
  console.log("shows", data);

  // console.log('unseenLuky', data.unseen);

  // console.log('unseenFab', data.shows.[0].unseen);
  return (
    <div className="container">
      {/* <Head>
                <title>Shows</title>
                <link rel="icon" href="/favicon.ico" />
            </Head> */}
      <Header />

      <main className="main">
        <h1>Shows ({data.total})</h1>

        <div className="shows">
          {data.shows.map((show, index) => {
            return <ShowCard data={show} key={index} />;
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BetaSeries;

{
  /* <div className="show_info">
  <h3>{show.title}</h3>
  <h3>{show.id}</h3>
  <img src="{BETASERIES_API_SEASONS_IMG}{show.id}" />
</div> */
}

{
  /* <div className="unseens">
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
  </div> */
}
