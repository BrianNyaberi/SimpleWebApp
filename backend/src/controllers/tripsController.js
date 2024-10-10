const axios = require('axios');

const getAllTrips = async (req, res) => {
  try {
    const response = await axios.get('https://rapidtechinsights.github.io/hr-assignment/recent.json');
    let filteredTrips = response.data.trips;
    const { keyword, includeCanceled, distance, time } = req.query;

    // 1. Filter by status
    // Ensure includeCanceled is treated as a boolean
    const isIncludeCanceled = includeCanceled === 'true' || includeCanceled === true;

    // Filter by status: Exclude canceled trips when includeCanceled is false
    if (!isIncludeCanceled) {
      filteredTrips = filteredTrips.filter(trip => trip.status !== 'CANCELED');
    } 

    // 2. Filter by keyword (case-insensitive search against multiple fields)
    if (keyword) {
      const lowercasedKeyword = keyword.toLowerCase();

      filteredTrips = filteredTrips.filter(trip => 
        (trip.pickup_location && trip.pickup_location.toLowerCase().includes(lowercasedKeyword)) ||
        (trip.dropoff_location && trip.dropoff_location.toLowerCase().includes(lowercasedKeyword)) ||
        (trip.type && trip.type.toLowerCase().includes(lowercasedKeyword)) ||
        (trip.driver_name && trip.driver_name.toLowerCase().includes(lowercasedKeyword)) ||
        (trip.car_make && trip.car_make.toLowerCase().includes(lowercasedKeyword)) ||
        (trip.car_model && trip.car_model.toLowerCase().includes(lowercasedKeyword)) ||
        (trip.car_number && trip.car_number.toLowerCase().includes(lowercasedKeyword))
      );
    }

    // 3. Filter by distance
    if (distance && distance !== 'any') {
      filteredTrips = filteredTrips.filter(trip => {
        switch (distance) {
          case 'under3':
            return trip.distance < 3;
          case '3to8':
            return trip.distance >= 3 && trip.distance < 8;
          case '8to15':
            return trip.distance >= 8 && trip.distance < 15;
          case 'over15':
            return trip.distance >= 15;
          default:
            return true;
        }
      });
    }

    // 4. Filter by time
    if (time && time !== 'any') {
      filteredTrips = filteredTrips.filter(trip => {
        switch (time) {
          case 'under5':
            return trip.duration < 5;
          case '5to10':
            return trip.duration >= 5 && trip.duration < 10;
          case '10to20':
            return trip.duration >= 10 && trip.duration < 20;
          case 'over20':
            return trip.duration >= 20;
          default:
            return true;
        }
      });
    }

    console.log(includeCanceled);
    res.json(filteredTrips);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

module.exports = {
  getAllTrips
};
