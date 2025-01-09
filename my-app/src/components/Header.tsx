import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Tab,
  Tabs,
  Box,
  InputBase,
  Grid,
  Container,
  MenuItem,
  Select,
  SelectChangeEvent,
  FormControl,
  InputLabel,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import LightModeIcon from "@mui/icons-material/LightMode";
import React, { useState } from "react";
export default function Header() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#333", borderRadius: "10px  10px  0 0" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "100%",
            margin: "0 12px",
          }}
        >
          {/* left header */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            <Box sx={{display:'flex' , justifyItems:'center',alignItems:'center'}}>
              <LightModeIcon sx={{ padding: "10px" }} />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                AccuWeather
              </Typography>
            </Box>

            <Typography variant="h6" sx={{}}>
              Hanoi Hanoi 19°C
            </Typography>
            <CloudQueueIcon />
          </Box>

          {/* right header */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#fff",
              justifyContent: "center",
              gap: "10px",
              paddingX: "10px",
            }}
          >
            <SearchIcon sx={{ marginRight: "10px", color: "#333" }} />
            <InputBase
              placeholder="Address, City or Zip Code"
              sx={{ color: "#333" }}
            />
            <Typography sx={{ color: "#333" }}>Location</Typography>
          </Box>
        </Box>
      </AppBar>
      <Container>
        <Tabs
          value={0}
          textColor="inherit"
          indicatorColor="secondary"
          sx={{ justifyContent: "center" }}
        >
          <Tab label="Today" />
          <Tab label="Hourly" />
          <Tab label="Daily" />
          <Tab label="Radar" />
          <Tab label="Minutecast" />
          <Tab label="Monthly" />
          <Tab label="Air Quality" />
          <Tab label="Health & Activities" />
        </Tabs>
      </Container>
    </>
  );
}
