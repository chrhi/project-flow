import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import cheerio from 'cheerio'; // You need to install this library: npm install cheerio

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { url } = req.query;

    if (!url) {
      return res.status(400).json({ error: 'URL parameter is missing' });
    }


 

  try {
    const response = await axios.get(url as string);
    const html = response.data;

    const $ = cheerio.load(html);

    // Extract the title, description, and image URL using cheerio
    const title = $('title').text();
    const description = $('meta[name="description"]').attr('content');
    const imageUrl = $('meta[property="og:image"]').attr('content');

    // Return the data in the format required by the editor tool
    res.status(200).json({
      success: 1,
      meta: {
        title,
        description,
        image: {
          url: imageUrl,
        },
      },
    });
  } catch (error) {
    console.error('Error fetching metadata:', error);
    return res.status(500).json({ error: 'Failed to fetch metadata' });
  }
}
