import axios from "axios";
import { GetServerSidePropsContext } from "next";
import { redirect } from "next/navigation";
const useFetchServer = (context: GetServerSidePropsContext) => {
  return axios.create({
    baseURL: "http://localhost:3000/api",
  });
};

export default useFetchServer;
