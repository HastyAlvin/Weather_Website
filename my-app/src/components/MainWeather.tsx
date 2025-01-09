import { Box, Typography, Grid } from "@mui/material";

export default function MainWeather() {
  return (
    <Box>
      <Box
        sx={{
          padding: "20px",
          backgroundColor: "#f5f5f5",
          marginBottom: "20px",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: "space-between",
            alignItems: "center ",
            marginBottom: "2px",
          }}
        >
          <Grid item xs={6}>
            <Typography variant="h6">Today's Weather</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography align="right" sx={{ color: "#888" }}>
              Thu, Jan 9
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{borderTop: "1px solid #ccc", padding: "20px"}}>
          <Typography>Considerable cloudiness Hi: 19°</Typography>
          <Typography>Tonight: Overcast Lo: 14°</Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #ccc",
          paddingBottom: "20px",
        }}
      >
        <Typography variant="h6">Current Weather</Typography>
        <Typography sx={{ color: "#888" }}>3:09 PM</Typography>
      </Box>

      {/* Content */}
      <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
        {/* Left Column */}
        <Box>
          <Typography variant="h3" sx={{ color: "#333" }}>
            19°C
          </Typography>
          <Typography>Partly sunny</Typography>
        </Box>

        {/* Right Column */}
        <Box>
          <Typography sx={{ padding: "20px 0" }}>RealFeel Shade™: 18°</Typography>
          <Typography sx={{ borderTop: "1px solid #ccc", padding: "20px 0" }}>
            Wind: NNE 17 km/h
          </Typography>
          <Typography sx={{ borderTop: "1px solid #ccc", padding: "20px 0" }}>
            Wind Gusts: 32 km/h
          </Typography>
          <Typography
            sx={{ borderTop: "1px solid #ccc", padding: "20px 0", color: "red" }}
          >
            Air Quality: Unhealthy
          </Typography>
        </Box>
      </Box>

      <Box sx={{ padding: "20px", backgroundColor: "#f5f5f5" }}>
        <Typography variant="h6">Looking Ahead</Typography>
        <Typography>Cool Saturday night</Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
        <Box display={"flex"}></Box>
        <Box display={"flex"}></Box>
      </Box>
    </Box>
  );
}
