import { useState } from 'react';
import { Card, Text, Title, Button, Stack, Center } from '@mantine/core';
import { motion } from 'framer-motion';

const sprueche = [
    'Du bist stärker als deine Zweifel! 💪',
    'Timo & Motte stehen hinter dir! 🛡️',
    'Heute kämpfst du – morgen gewinnst du! ⚔️',
    'Fehler sind Trainingspartner, keine Gegner!',
];

export default function Kampf() {
    const [spruch, setSpruch] = useState(sprueche[0]);

    const wechseln = () => {
        let neu;
        do {
            neu = sprueche[Math.floor(Math.random() * sprueche.length)];
        } while (neu === spruch);
        setSpruch(neu);
    };

    return (
        <Center style={{ minHeight: '70vh' }}>
            <Stack align="center" spacing="lg">
                <Title order={1} c="red">🥊 AUF IN DEN KAMPF!</Title>
                <motion.div
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 2, -2, 0] }}
                    transition={{ duration: 0.8 }}
                >
                    <Card padding="xl" shadow="lg" radius="lg" withBorder>
                        <Text size="lg" ta="center" fw={500}>{spruch}</Text>
                    </Card>
                </motion.div>
                <Button color="red" onClick={wechseln}>
                    Neuer Powerspruch 💥
                </Button>
            </Stack>
        </Center>
    );
}
