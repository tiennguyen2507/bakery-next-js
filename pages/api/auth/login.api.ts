import { NextApiResponse, NextApiRequest } from "next";
import { serialize } from "cookie";

const dataLogin = {
  email: "tiennguyen2507@gmail.com",
  password: "1234",
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password }: typeof dataLogin = req.body;

  if (email !== dataLogin.email) {
    return await res
      .status(404)
      .json({ type: "email", massage: "Email does not exist" });
  }

  if (password !== dataLogin.password) {
    return await res
      .status(404)
      .json({ type: "password", message: "Password is incorrect" });
  }

  const cookie = serialize("session-token", "3123124124124124", { path: "/" });

  res.setHeader("set-cookie", cookie);
  await res.status(200).json("login-success!");
}
