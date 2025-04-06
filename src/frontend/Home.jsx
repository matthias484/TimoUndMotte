import { Title, Text, Button, Stack, Paper } from '@mantine/core';

export default function Home() {
    return (
        <Paper shadow="md" radius="md" p="xl" withBorder>
            <Stack spacing="md" align="center">
                <Title order={1} color="blue">Willkommen bei Timo & Motte 🧑‍💻🐭</Title>
                <Text size="lg" align="center">
                    Zwei Freunde. Eine Webseite. Und jede Menge Quatsch mit Code. 😎
                </Text>
                <Text align="center">
                    Hier probieren wir alles aus, was uns Spaß macht – ob Tools, Games, AI oder einfach Unsinn.
                </Text>
                <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
                    Zeig mir mehr!
                </Button>
            </Stack>
        </Paper>
    );
}
