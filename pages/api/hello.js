// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    title: "hello api",
    owner: "Fabrice Geib",
    results: [
      {
        name: "Charly",
      },
      {
        name: "Pierre",
      },
      {
        name: "Sam",
        films: [
          "https://next-fabricegeib.vercel.app/api/films/1/",
          "https://next-fabricegeib.vercel.app/api/films/2/",
          "https://next-fabricegeib.vercel.app/api/films/3/",
          "https://next-fabricegeib.vercel.app/api/films/6/",
        ],
      },
    ],
  });
}
