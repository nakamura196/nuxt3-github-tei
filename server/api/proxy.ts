export default async (event) => {
    const body = await readBody(event)
    const path = body.path
    const accessToken = body.access_token
    const url = path.replace("/github-api/", "https://api.github.com/")
    const headers = {
        'Accept': 'application/vnd.github.v3+json'
    }
    if (accessToken) {
        headers["Authorization"] = `token ${accessToken}`
    }
    const res = await $fetch(url, {
        method: "GET",
        headers
      });
      return res
};
