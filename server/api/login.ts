const ENDPOINT = "https://github.com/login/oauth/access_token";
//const config = useRuntimeConfig()
const data = {
  client_id: process.env.GITHUB_CLIENT_ID,
  client_secret: process.env.GITHUB_CLIENT_SECRET,
};

export default async (event) => {
  const query = getQuery(event);
  data.code = query.code;

  const res = await $fetch(ENDPOINT, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
    },
  });

  return res;
};
