// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import clients from "../../../data/clients.json";

export default function handler(req, res) {
  const { clientid } = req.query;
  const client = clients.find((client) => client.id === parseInt(clientid));
  res.status(200).json(client);
}
