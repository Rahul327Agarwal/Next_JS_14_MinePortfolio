export const getLatestRepos = async (data, token) => {
  try {
    const username = data.githubUsername;
    const url = `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`;
    const payload = {
      headers: {
        Authorization: `token ${token}`,
      },
    };
    if (token) {
      const res = await fetch(url, payload);
      let repos = res.data.items;
      let latestSixRepos = repos.splice(0, 6);
      return latestSixRepos;
    } else {
      const res = await fetch(url);
      const parsedData = await res.json();
      let repos = parsedData?.items;
      let latestSixRepos = repos.splice(0, 6);
      return latestSixRepos;
    }
  } catch (err) {
    console.log(err);
  }
};
