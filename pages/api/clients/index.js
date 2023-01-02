// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import clients from "../../../data/clients.json";

export default function handler(req, res) {
  res.status(200).json(clients);
}
