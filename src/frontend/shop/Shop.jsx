import React from 'react'
import { ShopItem } from './ShopItem.jsx'
import { Grid } from '@mantine/core'
import { Pin } from './Pin.jsx';

export const Shop = () => {
  return (
    <Grid>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
        <Pin />
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
        <ShopItem />
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
        <ShopItem />
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
        <ShopItem />
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
        <ShopItem />
      </Grid.Col>
    </Grid>
  );
}