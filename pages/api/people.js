// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    count: 3,
    next: "/api/people/?page=2",
    previous: null,
    results: [
      {
        name: "Charly",
      },
      {
        name: "Pierre",
      },
      {
        name: "Sam",
        height: "155",
        mass: "50",
        hair_color: "n/a",
        skin_color: "fair",
        eye_color: "brown",
        birth_year: "112BBY",
        gender: "female",
        homeworld: "https://next-fabricegeib.vercel.app/api/planets/1/",
        films: [
          "https://next-fabricegeib.vercel.app/api/films/1/",
          "https://next-fabricegeib.vercel.app/api/films/2/",
          "https://next-fabricegeib.vercel.app/api/films/3/",
          "https://next-fabricegeib.vercel.app/api/films/6/",
        ],
        species: ["https://next-fabricegeib.vercel.app/api/species/2/"],
        vehicles: [],
        starships: [],
        created: "20022-09-04T19:01:23.357000Z",
        edited: "2022-09-04T19:16:42.309000Z",
        url: "https://next-fabricegeib.vercel.app/api/people/2/",
      },
    ],
  });
}
