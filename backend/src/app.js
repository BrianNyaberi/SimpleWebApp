const express = require('express');
const cors = require('cors');
const tripRoutes = require('./routes/tripRoutes');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

// Use the trip routes
app.use('/api/trips', tripRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

