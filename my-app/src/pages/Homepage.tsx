import { Grid, Container } from "@mui/material";
import Header from "../components/Header";
import MainWeather from "../components/MainWeather";
import TopStories from "../components/TopStories";

export default function Homepage() {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ marginTop: "20px" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <MainWeather />
          </Grid>
          <Grid item xs={12} md={4}>
            <TopStories />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
