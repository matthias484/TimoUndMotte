import { useState } from 'react';
import { Button, Title, Text, Stack, Card } from '@mantine/core';

export default function Bored() {
    const [idee, setIdee] = useState('');

    const holen = async () => {
        const res = await fetch('https://www.boredapi.com/api/activity/');
        const json = await res.json();
        setIdee(json.activity);
    };

    return (
        <Stack align="center" spacing="lg">
            <Title order={2}>🧠 Timo & Motte Ideen-Generator</Title>
            <Button onClick={holen} variant="light">💡 Gib mir eine Idee!</Button>
            {idee && (
                <Card shadow="md" padding="lg" radius="lg" withBorder>
                    <Text ta="center" size="lg">{idee}</Text>
                </Card>
            )}
        </Stack>
    );
}
