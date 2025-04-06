import { Title, Text, Grid, Paper } from '@mantine/core';

export default function About() {
    return (
        <Paper shadow="sm" p="xl" radius="md" withBorder>
            <Title order={2} mb="md">Wer sind Timo & Motte? 🤔</Title>
            <Grid>
                <Grid.Col span={6}>
                    <Text>
                        <strong>Timo</strong> – liebt Kaffee, dunkle Themes und das ständige Refactoring von Code, der eigentlich schon funktioniert.
                    </Text>
                </Grid.Col>
                <Grid.Col span={6}>
                    <Text>
                        <strong>Motte</strong> – bevorzugt bunte Buttons, schnelle Prototypen und hat immer eine Idee mehr als Zeit.
                    </Text>
                </Grid.Col>
            </Grid>
            <Text mt="lg">
                Zusammen bauen wir kleine Web-Experimente – just for fun. Manchmal nützlich, manchmal einfach nur... 🤷‍♂️
            </Text>
        </Paper>
    );
}
