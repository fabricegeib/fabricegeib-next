// pages/api/wordpress
export async function getWordpress() {
  const response = await fetch(`https://366.fabricegeib.com/wp-json/wp/v2/posts`);
  const data = await response.json();
  return data;
}

export default async function handler(req, res) {
  const data = await getWordpress();
  res.status(200).json(data);
}
