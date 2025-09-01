import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import USA from "../assets/flags/usa.jpg";
import UK from "../assets/flags/uk.jpg";
import SINGAPORE from "../assets/flags/singapore.png";
import INDIA from "../assets/flags/india.jpg";

const TimeDisplay = () => {
  const [times, setTimes] = useState({});

  const timeZones = {
    USA: { timeZone: "America/New_York", flag: USA },
    UK: { timeZone: "Europe/London", flag: UK },
    Singapore: { timeZone: "Asia/Singapore", flag: SINGAPORE },
    India: { timeZone: "Asia/Kolkata", flag: INDIA },
  };

  // Function to format time in HH:MM AM/PM
  const formatTime = (timezone) => {
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: timezone,
    };
    return new Intl.DateTimeFormat("en-US", options).format(new Date());
  };

  useEffect(() => {
    const updateTime = () => {
      const updatedTimes = {};
      for (const [region, { timeZone }] of Object.entries(timeZones)) {
        updatedTimes[region] = formatTime(timeZone);
      }
      setTimes(updatedTimes);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="p-1">
      <Grid
        container
        spacing={2} // Adjust spacing
        className="justify-center items-center"
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)", // Create a 2x2 grid
          gap: "16px", // Add gap between items
        }}
      >
        {Object.entries(timeZones).map(([region, { flag }]) => (
          <Grid item key={region} sx={{ display: "flex", justifyContent: "center" }}>
            <Card
              sx={{
                backgroundColor: "transparent",
              }}
            >
              <CardContent
                className="flex flex-col items-center p-0"
                sx={{
                  padding: "5px !important",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  border: "2px solid #D2AD36",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(to right, rgba(178, 129, 44, 1) 0, rgba(244, 222, 98, 1) 28%, rgba(244, 226, 139, 1) 51%, rgba(244, 222, 98, 1) 71%, rgba(178, 129, 44, 1) 100%);",
                  width: "6vw",
                }}
              >
                <img
                  src={flag}
                  alt={`${region} Flag`}
                  className="w-16 h-10 rounded-lg"
                />
                <Typography
                  variant="h6"
                  sx={{
                    color: "black",
                    fontWeight: "600",
                    fontSize: "1.1vw"
                  }}
                >
                  {times[region] || "--:--"}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default TimeDisplay;
