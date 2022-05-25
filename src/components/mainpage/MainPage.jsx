import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Container, Grid, Typography } from '@mui/material';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';

export default function MainPage() {
  const itemData = [
    {
      img: 'https://www.ikea.com/ext/ingkadam/m/3d982d972636b093/original/PH157148-crop001.jpg?f=xl',
      title: 'Bed',
    },
    {
      img: 'https://www.ikea.com/ext/ingkadam/m/77409e55a0cd0cf9/original/PH167327-crop001.jpg?f=xl',
      title: 'Books',
    },
    {
      img: 'https://www.ikea.com/ext/ingkadam/m/614c909907fbcb46/original/PH177144.jpg?f=xl',
      title: 'Blinds',
    },

    {
      img: 'https://www.ikea.com/ext/ingkadam/m/2c9f859068ca6fe2/original/PH168692-crop001.jpg?f=xl',
      title: 'Doors',
    },
    {
      img: 'https://www.ikea.com/ext/ingkadam/m/25aaad7bd230cbfc/original/PH159966-crop001.jpg?f=xl',
      title: 'Coffee',
    },

    {
      img: 'https://www.ikea.com/ext/ingkadam/m/470ddfffe268dc2f/original/PH164719-crop003.jpg?f=xl',
      title: 'Candle',
    },
    {
      img: 'https://www.ikea.com/ext/ingkadam/m/19fe4e550f176e55/original/PH166219-crop001.jpg?f=xl',
      title: 'Coffee table',
    },
  ];
  return (
    <>
      <Box>
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'space-around',
            flexWrap: 'wrap',
            backgroundColor: 'rgb(238,238,238)',
            width: '50vh auto',
          }}
        >
          <Grid item md={4}>
            <Splide
              options={{ rewind: true, gap: '1rem' }}
              aria-label="My Favorite Images"
            >
              <SplideSlide>
                <Container sx={{ bgcolor: 'white', borderRadius: '5%' }}>
                  <img
                    src="https://images.pexels.com/photos/5793655/pexels-photo-5793655.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Image 1"
                    style={{
                      maxWidth: '100%',
                    }}
                  />
                </Container>
              </SplideSlide>

              <SplideSlide>
                <Container sx={{ bgcolor: 'white', borderRadius: '5%' }}>
                  <img
                    src="https://images.pexels.com/photos/1841143/pexels-photo-1841143.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Image 2"
                    style={{
                      maxWidth: '100%',
                      paddingTop: '20px',
                      margin: '20px auto',
                    }}
                  />
                </Container>
              </SplideSlide>

              <SplideSlide>
                <Container sx={{ bgcolor: 'white', borderRadius: '5%' }}>
                  <img
                    src="https://images.pexels.com/photos/2207894/pexels-photo-2207894.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Image 3"
                    style={{
                      maxWidth: '100%',
                      paddingTop: '20px',
                      margin: '20px auto',
                    }}
                  />
                </Container>
              </SplideSlide>
              <SplideSlide>
                <Container sx={{ bgcolor: 'white', borderRadius: '5%' }}>
                  <img
                    src="https://images.pexels.com/photos/1008692/pexels-photo-1008692.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Image 4"
                    style={{
                      maxWidth: '100%',
                      paddingTop: '20px',
                      margin: '20px auto',
                    }}
                  />
                </Container>
              </SplideSlide>
              <SplideSlide>
                <Container sx={{ bgcolor: 'white', borderRadius: '5%' }}>
                  <img
                    src="https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Image 5"
                    style={{
                      maxWidth: '100%',
                      paddingTop: '20px',
                      margin: '20px auto',
                    }}
                  />
                </Container>
              </SplideSlide>
              <SplideSlide>
                <Container sx={{ bgcolor: 'white', borderRadius: '5%' }}>
                  <img
                    src="https://images.pexels.com/photos/3747439/pexels-photo-3747439.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Image 6"
                    style={{
                      maxWidth: '100%',
                      paddingTop: '20px',
                      margin: '20px auto',
                    }}
                  />
                </Container>
              </SplideSlide>
            </Splide>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ width: 1400, height: 600, overflowY: 'scroll' }}>
        <Grid px={{ xs: 3, sm: 10 }}>
          <ImageList variant="masonry" cols={2} gap={8}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
      </Box>
    </>
  );
}
