import { localStorageKeys } from "./Constants/constants";

type Headers = {
  "Content-Type": string;
  Authorization?: string;
};

const BACKEND_URL = "https://zaiem-blog-app.herokuapp.com/graphql";
// const LOCAL_BACKEND_URL = "http://localhost:4000/graphql";

async function fetchGraphQL(text: any, variables: any) {
  const URL = BACKEND_URL;
  const token = localStorage.getItem(localStorageKeys.token) || null;

  const headers: Headers = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(URL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  return await response.json();
}

export default fetchGraphQL;
