import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

const BASE_URL = "https://bakery-nest-be-production.up.railway.app";

// Provide the server-side API with the request handlers.
const createServerMock = () => {
  const server = setupServer(
    http.get("/user", () => {
      return HttpResponse.json({
        id: "15d42a4d-1948-4de4-ba78-b8a893feaf45",
        firstName: "John",
      });
    })
  );

  // Start the interception.
  server.listen();
};

export default createServerMock;
