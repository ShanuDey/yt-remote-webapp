import yts from 'yt-search';

export default async function handler(req, res) {
  const searchResult = await yts(req.query.searchKeyword);
  const videos = searchResult.videos.slice(0, 3);
  res.status(200).json(videos);
}
