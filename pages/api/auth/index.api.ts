import { NextApiResponse, NextApiRequest } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!req?.cookies["session-token"]) {
    return res.redirect("/auth/login");
  }
  return await res.status(200).json(req.body);
}
