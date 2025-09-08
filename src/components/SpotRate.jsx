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
        marginTop: "20px",
        width: isGold ? "100%" : "100%",
      }}
    >
      {/* Header Badge - Half out, half in */}
      <Box
        sx={{
          position: "absolute",
          top: "-20px",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#d5b61d",
          borderRadius: "20px",
          padding: isGold ? "22px 24px" : "18px 20px", // Smaller padding for silver
          zIndex: 2,
          height: isGold ? "35px" : "30px", // Smaller height for silver
          display: "flex",
          alignItems: "center",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Typography
          sx={{
            fontSize: isGold ? "28px" : "16px", // Smaller font for silver
            fontWeight: "700",
            letterSpacing: "0.5px",
            color: "#013b24",
            lineHeight: 1,
          }}
        >
          {metal.toUpperCase()} SPOT
        </Typography>
      </Box>

      {/* Main Card */}
      <Box
        sx={{
          background: "#013831",
          borderRadius: "32px",
          padding: "0",
          color: "white",
          position: "relative",
          overflow: "hidden",
          minHeight: isGold ? "180px" : "140px", // Smaller height for silver
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
          width: "100%",
        }}
      >
        {/* Main Content Container */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: isGold ? "50px 32px 32px 32px" : "35px 16px 20px 16px", // Slightly reduced padding for silver
            height: "100%",
          }}
        >
          {/* BID Section */}
          <Box sx={{
            display: "flex", flexDirection: "column", justifyContent: "center"
          }} className="flex justify-center text-center">
            <Typography
              sx={{
                fontSize: isGold ? "18px" : "16px", // Smaller font for silver
                fontWeight: "700",
                marginBottom: "16px",
                color: "white",
                letterSpacing: "1px",
                width: "max-content",
              }}
            >
              BID
            </Typography>
            <Typography
              sx={{
                fontSize: isGold ? "35px" : "22px", // Smaller font for silver
                fontWeight: "700",
                color: getTextColor(data.bidChanged),
                lineHeight: 1,
                width: "max-content",
              }}
            >
              {data.bid}
            </Typography>
          </Box>

          {/* Vertical Divider 1 */}
          <Box
            sx={{
              width: "2px",
              height: isGold ? "80px" : "60px", // Smaller divider for silver
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              margin: isGold ? "0px 16px" : "0px 12px", // Slightly reduced margin for silver
            }}
          />

          {/* ASK Section */}
          <Box sx={{
            textAlign: "center",
          }}>
            <Typography
              sx={{
                fontSize: isGold ? "18px" : "16px", // Smaller font for silver
                fontWeight: "700",
                marginBottom: "16px",
                color: "white",
                letterSpacing: "1px",
                width: "max-content",
              }}
            >
              ASK
            </Typography>
            <Typography
              sx={{
                fontSize: isGold ? "35px" : "22px", // Smaller font for silver
                fontWeight: "700",
                color: getTextColor(data.bidChanged),
                lineHeight: 1,
                width: "max-content",
              }}
            >
              {data.ask}
            </Typography>
          </Box>

          {/* Vertical Divider 2 */}
          <Box
            sx={{
              width: "2px",
              height: isGold ? "80px" : "60px", // Smaller divider for silver
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              margin: isGold ? "0 16px" : "0 12px", // Slightly reduced margin for silver
            }}
          />

          {/* TODAY Section */}
          <Box sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                fontSize: isGold ? "18px" : "16px", // Smaller font for silver
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
                  fontSize: isGold ? "14px" : "12px", // Smaller font for silver
                  fontWeight: "600",
                  color: "white",
                }}
              >
                L : {data.low}
              </Typography>
              <Typography
                sx={{
                  fontSize: isGold ? "14px" : "12px", // Smaller font for silver
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
          flexDirection: { xs: "column", md: "row" }, // Stack on mobile, side by side on larger screens
          justifyContent: "center",
          alignItems: "flex-start", // Align to top
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Gold Card */}
        <Box sx={{ flex: "1 1 400px", minWidth: "400px" }}>
          {renderSpotCard("gold", goldData, true)}
        </Box>

        {/* Silver Card */}
        <Box sx={{ flex: "0 0 300px", minWidth: "250px" }}> {/* Fixed width for silver */}
          {renderSpotCard("silver", silverData, false)}
        </Box>
      </Box>
    </Box>
  );
};

export default SpotRate;