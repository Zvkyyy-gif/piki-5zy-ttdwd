export default async function handler(req, res) {
  
res.setHeader("Access-Control-Allow-Origin", "*");
res.setHeader("Access-Control-Allow-Methods", "GET");
  
  if (req.method !== "GET") {
    return res.status(405).json({
      success: false,
      message: "Method Not Allowed"
    });
  }

  try {

    const { url } = req.query;

    if (!url) {
      return res.status(400).json({
        success: false,
        message: "URL TikTok kosong."
      });
    }

    const API_URL =
      "https://api.azbry.com/api/download/tiktok?url=" +
      encodeURIComponent(url);

    const response = await fetch(API_URL);

    const data = await response.json();

    return res.status(200).json(data);

  } catch (err) {

    return res.status(500).json({
      success: false,
      message: "Server Error",
      error: err.message
    });

  }

}
