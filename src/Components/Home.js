import * as React from "react";
import AppBar from "@mui/material/AppBar";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import Box from "@mui/material/Box";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import EquipmentCard from "./EquipmentCard";
import axios from "axios";



const theme = createTheme();

export default function Home() {
    axios.defaults.baseURL = 'http://localhost:9000';
    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

  const [equipments, setEquipments] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:9000/equipments")
      .then(function (response) {
        // handle success
        console.log(response);
        setEquipments(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Equipment Manager
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Equipment Manager
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {equipments.map((e) => (
              <EquipmentCard title={e.title} description={e.description} quantity={e.quantity} key={e.id} />
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
