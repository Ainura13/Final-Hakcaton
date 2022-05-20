import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function MasonryImageList() {
  return (
    <Box sx={{ width: 1400, height: 800, overflowY: 'scroll' }}>
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
    </Box>
  );
}

const itemData = [
  {
    img: 'https://demo.xpeedstudio.com/marketov2/home2/wp-content/uploads/sites/2/2018/04/laptop_features_1.jpg',
    title: 'Bed',
  },
  {
    img: 'https://demo.xpeedstudio.com/marketov2/home2/wp-content/uploads/sites/2/2013/06/Zhndu-Mobile-1.png',
    title: 'Books',
  },
  {
    img: 'https://demo.xpeedstudio.com/marketov2/home2/wp-content/uploads/sites/2/2013/06/Bluetooth-Smart-Projector-300x300.jpg',
    title: 'led',
  },
  {
    img: 'https://demo.xpeedstudio.com/marketov2/home2/wp-content/uploads/sites/2/2013/06/laptop2-scaled-e1594811938278.jpg',
    title: 'Laptop',
  },
  {
    img: 'https://demo.xpeedstudio.com/marketov2/home2/wp-content/uploads/sites/2/2013/06/26-300x300.png',
    title: 'Blinds',
  },

  {
    img: 'https://demo.xpeedstudio.com/marketov2/home2/wp-content/uploads/sites/2/2013/06/DEEP-BASS-Headphones-Earphones-3-5mm-AUX-Foldable-Portable-Adjustable-Gaming-Headset-For-Phones-MP3-MP4-2-300x300.jpg',
    title: 'Doors',
  },
  {
    img: 'https://demo.xpeedstudio.com/marketov2/home2/wp-content/uploads/sites/2/2018/05/Ximax-Chair.png',
    title: 'Coffee',
  },

  {
    img: 'https://demo.xpeedstudio.com/marketov2/home2/wp-content/uploads/sites/2/2018/05/45-300x300.png',
    title: 'Candle',
  },
  {
    img: 'https://demo.xpeedstudio.com/marketov2/home2/wp-content/uploads/sites/2/2018/07/banner-campaign-31.png',
    title: 'Coffee table',
  },
];
