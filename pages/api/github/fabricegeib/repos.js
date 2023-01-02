// pages/api/github/fabricegeib/repos
export async function getGithubRepos() {
  const response = await fetch(`https://api.github.com/users/fabricegeib/repos`);
  const data = await response.json();
  return data;
}

export default async function handler(req, res) {
  const data = await getGithubRepos();
  res.status(200).json(data);
}
