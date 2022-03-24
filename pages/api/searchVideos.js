import yts from 'yt-search';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
    const searchResult = await yts(req.body.searchKeyword);
    const videos = searchResult.videos.slice(0, 8);
    res.status(200).json(videos);
  } else {
    // Handle any other HTTP method
    res.status(200).json({ error: 'something went wrong' });
  }
}
