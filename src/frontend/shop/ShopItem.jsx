import React from 'react'
import { Card, Image, Text, Badge, Button, Group, Grid, Rating } from '@mantine/core';

export const ShopItem = () => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Shop Item</Text>
        <Badge color="pink">On Sale</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <Rating defaultValue={0} />

      <Grid>
        <Grid.Col span={6}>
            <Button color="blue" fullWidth mt="md" radius="md">
                Add to cart
            </Button>
        </Grid.Col>
        <Grid.Col span={6}>
            <Button color="gray" fullWidth mt="md" radius="md" >
                View details
            </Button>
        </Grid.Col>
        </Grid>
      
    </Card>
  );
}