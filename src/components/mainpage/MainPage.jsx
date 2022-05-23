import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Grid } from '@mui/material';

export default function MasonryImageList() {
  return (
    <Box sx={{ width: 1400, height: 800, overflowY: 'scroll' }}>
      <Grid 
      px={{ xs: 3, sm: 10 }}
       >
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
  );
}

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
