// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse<any>
) {
  const result = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  res.status(200).json(result.data);
}
