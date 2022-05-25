import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper } from '@mui/material';
import img1 from '../images/img2.jpg';
import Video from '../assets/video.mp4';

function Copyright() {
  return <></>;
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function AboutUs() {
  return (
    <Box
      sx={{
        background: '#F5F3EE;',
        flexWrap: { xs: 'wrap', sm: 'wrap' },
        width: '100%',
      }}
    >
      <ThemeProvider theme={theme}>
        <main>
          {/* Hero unit */}

          <Box
            sx={{
              background: '#F5F3EE;',
              display: 'flex',
              flexWrap: { xs: 'wrap', sm: 'nowrap' },
            }}
          >
            <Box sx={{ margin: 'auto' }}>
              <img src={img1} alt="" width="100%" />
            </Box>
            <Box sx={{ margin: 'auto' }}>
              <Typography
                sx={{
                  fontSize: { xs: '20px', sm: '2vw' },
                  color: '#A9B088',
                  fontWeight: '500',
                  textAlign: 'center',
                }}
              >
                About us
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '20px', sm: '1,5vw' },
                  color: '#A9B088',
                  textAlign: 'center',
                }}
              >
                One brand, many companies, and many, many people – that’s us in
                a nutshell. Spread all over the world, we have a passion for
                home furnishing and an inspiring shared vision: to create a
                better everyday life for the many people. This, together with
                our straightforward business idea, shared values, and a culture
                based on the spirit of togetherness, guides us in everything we
                do.
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 8,
              pb: 6,
            }}
          >
            <Paper sx={{ maxWidth: '100%', m: 6, boxShadow: 0 }}>
              <Container
                maxWidth="xl"
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                }}
                spacing={5}
              >
                <Grid container>
                  <Grid item sm={12} md={6} sx={{ margin: 'auto' }}>
                    <Typography
                      component="h1"
                      variant="h3"
                      align="center"
                      color="text.primary"
                      gutterBottom
                      mr={5}
                    >
                      467 Stores in 63 markets
                      <Typography
                        variant="h5"
                        color="text.secondary"
                        paragraph
                        sx={{ margin: 'auto', verticalAlign: 'middle' }}
                      >
                        The first Store opened in 1958 in Älmhult, Sweden.
                      </Typography>
                      <Typography
                        variant="h5"
                        color="text.secondary"
                        paragraph
                        sx={{ margin: 'auto', verticalAlign: 'middle' }}
                      >
                        The latest Store to open is Nice St. Isidore, France.
                      </Typography>
                      <Typography
                        variant="h5"
                        color="text.secondary"
                        paragraph
                        sx={{ margin: 'auto', verticalAlign: 'middle' }}
                      >
                        Germany has the most Stores in the world
                      </Typography>
                      <Typography
                        variant="h5"
                        color="text.secondary"
                        paragraph
                        sx={{ margin: 'auto', verticalAlign: 'middle' }}
                      >
                        The biggest Store is Pasay City, Philippines.
                      </Typography>
                    </Typography>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <CardMedia
                      component="img"
                      sx={{ width: '100%' }}
                      image="https://gbl-sc9u2-prd-cdn.azureedge.net/-/media/aboutikea/images/about-us/world-map_2400.jpg?rev=4d14992a79224801b027d47222052181"
                      alt="Minimalist"
                    />
                  </Grid>
                </Grid>
                <Stack
                  sx={{ pt: 8 }}
                  spacing={6}
                  justifyContent="center"
                ></Stack>
              </Container>
            </Paper>
          </Box>

          <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 8,
              pb: 6,
            }}
          >
            <Paper sx={{ maxWidth: '100%', m: 6, boxShadow: 0 }}>
              <Container
                maxWidth="xl"
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                }}
                spacing={5}
              >
                <Grid
                  container
                  maxWidth="xl"
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                  }}
                  spacing={1}
                >
                  <div className="fff">
                    <video autoPlay loop muted>
                      <source src={Video} type="video/mp4" />
                    </video>
                  </div>
                </Grid>

                <Stack
                  sx={{ pt: 8 }}
                  spacing={6}
                  justifyContent="center"
                ></Stack>
              </Container>
            </Paper>
          </Box>
          {/* End hero unit */}

          <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}></Grid>
              ))}
            </Grid>
          </Container>
        </main>
        {/* Footer */}
      </ThemeProvider>
    </Box>
  );
}
