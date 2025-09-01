import React from "react";
import { Box, Typography } from "@mui/material";
import { useSpotRate } from "../context/SpotRateContext";

const SpotRate = () => {
  const { goldData, silverData } = useSpotRate();

  const getTextColor = (change) => {
    if (change === "up") {
      return "green"; 
    } else if (change === "down") {
      return "red"; 
    }
    return "white"; 
  };

  const renderSpotCard = (metal, data, isGold = true) => (
    <Box
      sx={{
        position: "relative",
        marginTop: "20px", // Add space at the top for the half-out header
      }}
    >
      {/* Header Badge - Half out, half in */}
      <Box
        sx={{
          position: "absolute",
          top: "-20px", 
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#000000",
          borderRadius: "20px",
          padding: "22px 24px",
          zIndex: 2,
          height: "35px",
          display: "flex",
          alignItems: "center",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Typography
          sx={{
            fontSize: metal === 'gold' ? "28px" : "22px",
            fontWeight: "700",
            letterSpacing: "0.5px",
            color: "white",
            lineHeight: 1,
          }}
        >
          {metal.toUpperCase()} SPOT
        </Typography>
      </Box>

      {/* Main Card */}
      <Box
        sx={{
          background: "#172432",
          borderRadius: "32px",
          padding: "0",
          color: "white",
          position: "relative",
          overflow: "hidden",
          minHeight: "180px",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
        }}
      >
        {/* Main Content Container */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: metal === 'silver' ? "50px 2px 32px 2px" : "50px 32px 32px 32px",
            height: "100%",
          }}
        >
          {/* BID Section */}
          <Box sx={{ textAlign: "center", flex: 1 }}>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "700",
                marginBottom: "16px",
                color: "white",
                letterSpacing: "1px",
              }}
            >
              BID
            </Typography>
            <Typography
              sx={{
                fontSize: metal === 'silver' ? "22px" : "28px",
                fontWeight: "700",
                color: getTextColor(data.bidChanged),
                lineHeight: 1,
              }}
            >
              {data.bid}
            </Typography>
          </Box>

          {/* Vertical Divider 1 */}
          <Box
            sx={{
              width: "2px",
              height: "80px",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              margin: "0 16px",
            }}
          />

          {/* ASK Section */}
          <Box sx={{ textAlign: "center", flex: 1 }}>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "700",
                marginBottom: "16px",
                color: "white",
                letterSpacing: "1px",
              }}
            >
              ASK
            </Typography>
            <Typography
              sx={{
                fontSize: metal === 'silver' ? "22px" : "28px",
                fontWeight: "700",
                color: getTextColor(data.bidChanged),
                lineHeight: 1,
              }}
            >
              {data.ask}
            </Typography>
          </Box>

          {/* Vertical Divider 2 */}
          <Box
            sx={{
              width: "2px",
              height: "80px",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              margin: "0 16px",
            }}
          />

          {/* TODAY Section */}
          <Box sx={{ textAlign: "center", flex: 1 }}>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "700",
                marginBottom: "16px",
                color: "white",
                letterSpacing: "1px",
              }}
            >
              TODAY
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "white",
                }}
              >
                L : {data.low}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "white",
                }}
              >
                H : {data.high}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        maxWidth: "100%",
        padding: "20px 0px",
        backgroundColor: "transparent",
      }}
    >
      {/* Cards Container */}
      <Box
        sx={{
          display: "flex",
          gap: "24px",
          flexDirection: { xs: "row", lg: "row" },
          justifyContent: "center",
          alignItems: "stretch",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Gold Card */}
        <Box sx={{ flex: 1, minWidth: "400px" }}>
          {renderSpotCard("gold", goldData, true)}
        </Box>

        {/* Silver Card */}
        <Box sx={{ flex: 1, minWidth: "200px" }}>
          {renderSpotCard("silver", silverData, false)}
        </Box>
      </Box>
    </Box>
  );
};

export default SpotRate;