// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { location } = req.query;
  const API_KEY = process.env.WEATHER_API_KEY;

  if (!location) {
    return res.status(400).json({ error: 'No location provided' })
  }
  try {
    const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=no`
    )
    res.status(200).json(response.data);
  } catch (error: any) {
    res.status(500).json({ error: error.response?.data?.error?.message || 'Internal Server Error' });
  }
}