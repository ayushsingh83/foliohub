const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN

export const githubFetch = (url) => {
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
    }
  })
  .then(res => {
    if (!res.ok) throw new Error(`HTTP error: ${res.status}`)
    return res.json()
  })
}