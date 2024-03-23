
// notionApi.js

const NOTION_API_KEY = 'secret_cqvLNy1oJA7hy1A4yv3nx5u7yEROhpW3gmcQfeUab72';
const DATABASE_ID = '7a276b34a7914843a66ef1cec7cebecc';

const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors());
app.use(express.json()); // Parse incoming JSON requests

app.get('/fetchData', async (req, res) => {
  try {
    const url = `https://api.notion.com/v1/databases/${DATABASE_ID}/query`;
    const response = await axios.post(url, {}, {
      headers: {
        'Authorization': `Bearer ${NOTION_API_KEY}`,
        'Notion-Version': '2021-05-13',
      },
    });
    res.json(response.data.results);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
