const express = require('express');
const { getAllTrips } = require('../controllers/tripsController');

const router = express.Router();

// Route to get all trips
router.get('/', getAllTrips);


module.exports = router;
