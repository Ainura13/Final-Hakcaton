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
    {
      img: 'https://www.ikea.com/ext/ingkadam/m/c9c678a45218d9f/original/PH157380-crop006.jpg?f=xxl',
      title: 'Chandelier',
    },
    {
      img: 'https://www.ikea.com/ext/ingkadam/m/5be0eece3e7154e1/original/PH161210-crop001.jpg?f=xxl',
      title: 'Lights',
    },
    {
      img: 'https://www.ikea.com/ext/ingkadam/m/bb942922916f10e/original/PH165570-crop002.jpg?f=xxl',
      title: 'Plant',
    },
    {
      img: 'https://www.ikea.com/ext/ingkadam/m/7b3c81dcf49029ed/original/PH158690-crop001.jpg?f=xxl',
      title: 'Bath',
    },
    {
      img: 'https://www.ikea.com/ext/ingkadam/m/25ac2fb362f565e2/original/PH160423-crop001.jpg?f=xxl',
      title: 'Mirror',
    },
  ];
  return (
    <>
      <Box>
        <Grid
          sx={{
            // display: 'flex',
            flexDirection: 'row',
            alignItems: 'space-around',
            flexWrap: { xs: 'wrap', sm: 'wrap' },
            backgroundColor: 'rgb(238,238,238)',
            width: '30vw auto',
          }}
        >
          <Grid item md={4}>
            <Splide
              options={{ rewind: true, gap: '1rem' }}
              aria-label="My Favorite Images"
            >
              <SplideSlide>
                <Container
                  sx={{
                    bgcolor: 'white',
                    borderRadius: '5%',
                    display: 'flex',
                  }}
                >
                  <img
                    src="https://www.ikea.com/ext/ingkadam/m/f95b5fd1e2b3b4/original/PH157405-crop002.jpg?f=xxl"
                    alt="Image 1"
                    style={{
                      maxWidth: '30%',
                      paddingTop: '1rem',
                    }}
                  />
                  <Typography
                    variant="h4"
                    align="center"
                    color="textPrimary"
                    // gutterBottom
                  >
                    Storied Styling and Authentic Spaces Bespoke styling
                    services, design inspiration and curated goods from
                    Cassandra LaValle
                  </Typography>
                </Container>
              </SplideSlide>

              <SplideSlide>
                <Container
                  sx={{ bgcolor: 'white', borderRadius: '5%', display: 'flex' }}
                >
                  <img
                    src="https://www.ikea.com/ext/ingkadam/m/60c10e5d0cbb38bb/original/PH157836-crop004.jpg?f=xxl"
                    alt="Image 2"
                    style={{
                      maxWidth: '30%',
                      paddingTop: '1rem',
                    }}
                  />
                  <Typography
                    variant="h4"
                    align="center"
                    color="textPrimary"
                    // gutterBottom
                  >
                    In homes and public spaces alike, she enhances and completes
                    the environments she works in by bringing in vintage finds,
                    original artwork, and meaningful accents and layers that not
                    only reflect the owners’ personality, but create a warm and
                    welcoming space for all.
                  </Typography>
                </Container>
              </SplideSlide>

              <SplideSlide>
                <Container
                  sx={{ bgcolor: 'white', borderRadius: '5%', display: 'flex' }}
                >
                  <img
                    src="https://www.ikea.com/ext/ingkadam/m/2518ca5862da7907/original/PH176567.jpg?f=xxl"
                    alt="Image 3"
                    style={{
                      maxWidth: '30%',
                      paddingTop: '1rem',
                    }}
                  />
                  <Typography
                    variant="h4"
                    align="center"
                    color="textPrimary"
                    // gutterBottom
                  >
                    Something visceral happens when we enter a space that we
                    truly connect with. Whether it’s a home or a hotel, natural
                    or built, our environments have the power to support and
                    transport us. I believe in creating spaces grounded in
                    authenticity, and value the process of self-discovery that
                    comes with building them. I’m here to help you create a
                    place for yourself that is inspiring, livable, and
                    authentically you.
                  </Typography>
                </Container>
              </SplideSlide>
              <SplideSlide>
                <Container
                  sx={{ bgcolor: 'white', borderRadius: '5%', display: 'flex' }}
                >
                  <img
                    src="https://www.ikea.com/ext/ingkadam/m/66233fac36591a37/original/PH159924-crop001.jpg?f=xxl"
                    alt="Image 4"
                    style={{
                      maxWidth: '30%',
                      paddingTop: '1rem',
                    }}
                  />
                  <Typography
                    variant="h4"
                    align="center"
                    color="textPrimary"
                    // gutterBottom
                  >
                    With a strong eye for details, Cassandra has always found
                    her strength as a designer to be telling a story through
                    curated vignettes, finishing touches, and styled moments.
                  </Typography>
                </Container>
              </SplideSlide>
              <SplideSlide>
                <Container
                  sx={{ bgcolor: 'white', borderRadius: '5%', display: 'flex' }}
                >
                  <img
                    src="https://www.ikea.com/ext/ingkadam/m/6dc2f6f5c3e8d48d/original/PH156888-crop001.jpg?f=xxl"
                    alt="Image 5"
                    style={{
                      maxWidth: '30%',
                      paddingTop: '1rem',
                    }}
                  />
                  <Typography
                    variant="h4"
                    align="center"
                    color="textPrimary"
                    // gutterBottom
                  >
                    One of my absolute favorite things about summer is how long
                    the evenings last. That golden hour light right as the sun
                    begins to set, the air finally cools off, and friends gather
                    for dinner in the backyard... what could be better?
                  </Typography>
                </Container>
              </SplideSlide>
              <SplideSlide>
                <Container
                  sx={{ bgcolor: 'white', borderRadius: '5%', display: 'flex' }}
                >
                  <img
                    src="https://www.ikea.com/ext/ingkadam/m/48b4920fdbbf14a1/original/PH156264-crop001.jpg?f=xxl"
                    alt="Image 6"
                    style={{
                      maxWidth: '30%',
                      paddingTop: '1rem',
                    }}
                  />
                  <Typography
                    variant="h4"
                    align="center"
                    color="textPrimary"
                    // gutterBottom
                  >
                    For nearly 20 years Cassandra LaValle has spent her career
                    crafting personal environments and experiences through
                    events, interiors, and merchandising. In 2020, Cassandra
                    decided to shift the focus of her offerings to her single
                    favorite passion: Styling.
                  </Typography>
                </Container>
              </SplideSlide>
            </Splide>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ width: '100%', height: '30%', overflowY: 'scroll' }}>
        <Grid px={{ xs: 3, sm: 10 }}>
          <ImageList
            sx={{ width: '100%', height: '30%' }}
            variant="woven"
            cols={3}
            gap={8}
          >
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=161&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
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
