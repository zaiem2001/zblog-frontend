type Headers = {
  "Content-Type": string;
  Authorization?: string;
};

async function fetchGraphQL(text: any, variables: any) {
  const URL = "http://localhost:4000/graphql";
  const token = localStorage.getItem("zblog-token") || null;

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
