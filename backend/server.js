const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(cors());

// Fetch appointment types
app.get(
  "/api/practitioners/:practitionerId/appointment-types",
  async (req, res) => {
    const { practitionerId } = req.params;

    try {
      const response = await axios.get(
        `https://api.uk2.cliniko.com/v1/practitioners/${practitionerId}/appointment_types`,
        {
          headers: {
            Authorization: `Basic ${Buffer.from(
              process.env.CLINIKO_API_KEY + ":"
            ).toString("base64")}`,
            Accept: "application/json",
          },
        }
      );

      res.json(response.data);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to fetch appointment types" });
    }
  }
);

app.get(
  "/api/businesses/:businessId/practitioners/:practitionerId/appointment_types/:appointmentTypeId/available-times",
  async (req, res) => {
    const { businessId, practitionerId, appointmentTypeId } = req.params;
    const fromDate = new Date(); // today
    let allTimes = [];
    let page = 1;
    let keepFetching = true;

    try {
      while (keepFetching) {
        const toDate = new Date(fromDate);
        toDate.setDate(fromDate.getDate() + 6); // max 7-day window
        const resCliniko = await axios.get(
          `https://api.uk2.cliniko.com/v1/businesses/${businessId}/practitioners/${practitionerId}/appointment_types/${appointmentTypeId}/available_times`,
          {
            params: {
              from: fromDate.toISOString().split("T")[0],
              to: toDate.toISOString().split("T")[0],
              page,
              per_page: 100,
            },
            headers: {
              Authorization: `Basic ${Buffer.from(
                process.env.CLINIKO_API_KEY + ":"
              ).toString("base64")}`,
              Accept: "application/json",
            },
          }
        );

        allTimes = allTimes.concat(resCliniko.data.available_times);

        // Stop if no more entries
        if (resCliniko.data.available_times.length < 100) {
          keepFetching = false;
        } else {
          page += 1;
          fromDate.setDate(fromDate.getDate() + 7); // next week
        }
      }

      res.json({ available_times: allTimes });
    } catch (err) {
      console.error(err.response?.data || err.message);
      res.status(500).json({ error: "Failed to fetch available times" });
    }
  }
);

app.listen(4000, () => console.log("Backend running on port 4000"));
