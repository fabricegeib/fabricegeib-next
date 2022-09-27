// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    title: "next-fabricegeib - api",
    owner: "Fabrice Geib",
    pages: [
      { people: "/api/people/" },
      { planets: "/api/planets/" },
      { films: "/api/films/" },
      { species: "/api/species/" },
      { vehicles: "/api/vehicles/" },
      { starships: "/api/starships/" },
    ],
  });
}
