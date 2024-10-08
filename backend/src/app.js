const express = require('express');
// const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

// Route to fetch trip data
// app.get('/api/trips', async (req, res) => {
//   try {
//     const response = await axios.get('https://rapidtechinsights.github.io/hr-assignment/recent.json');
//     res.json(response.data);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching trip data' });
//   }
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
