import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import services from './services.json'


export default function CarouselRatio() {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 5,
        py: 5,
        px:4,
        overflow: 'auto',
        width: "100%",
        scrollSnapType: 'x mandatory',
        '& > *': {
          scrollSnapAlign: 'center',
        },
        '::-webkit-scrollbar': { display: 'none' },
      }}
    >
      {services.map((item) => (
        <Card orientation="vertical" size="md" key={item.title} variant="outlined">
          <AspectRatio ratio="1">
            <img
              src={`${item.img}?h=100&fit=crop&auto=format`}
              alt={item.title}
            />
          </AspectRatio>
            <Typography level="body-sm">{item.info}</Typography>
            <Typography level="title-md">{item.text}</Typography>
          
          
        </Card>
      ))}
    </Box>
  );
}
