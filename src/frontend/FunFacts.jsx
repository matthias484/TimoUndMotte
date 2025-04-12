import { useState } from 'react';
import { Card, Text, Title, Button, Stack } from '@mantine/core';
import { motion, AnimatePresence } from 'framer-motion';
import { DonutChart } from '@mantine/charts';
import facts from '../data/funfacts.json';

const chartData = [
    { name: 'Timo Energie 🔋', value: 40 },
    { name: 'Motte Magie ✨', value: 60 }
];

export default function FunFacts() {
    const [fact, setFact] = useState(facts[0]);
    const [key, setKey] = useState(0);

    const neuerFact = () => {
        let next;
        do {
            next = facts[Math.floor(Math.random() * facts.length)];
        } while (next === fact);
        setFact(next);
        setKey((k) => k + 1);
    };

    return (
        <Stack spacing="xl" align="center">
            <Title order={1} ta="center">🧠 Fun Fact Zone</Title>
            <AnimatePresence mode="wait">
                <motion.div
                    key={key}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                >
                    <Card padding="lg" shadow="md" radius="lg" withBorder>
                        <Text size="lg" ta="center">{fact}</Text>
                    </Card>
                </motion.div>
            </AnimatePresence>
            <Button onClick={neuerFact} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
                🔁 Noch ein Fun Fact!
            </Button>

            <DonutChart data={chartData} size={240} thickness={40} withTooltip tooltipDataSource="segment" />
        </Stack>
    );
}
