import { useState } from 'react';
import { Textarea, Button, Card, Title, Text, Stack } from '@mantine/core';
import { motion } from 'framer-motion';

export default function Gaestebuch() {
    const [eintrag, setEintrag] = useState('');
    const [eintraege, setEintraege] = useState([]);

    const absenden = () => {
        if (eintrag.trim() !== '') {
            setEintraege([...eintraege, eintrag]);
            setEintrag('');
        }
    };

    return (
        <Stack spacing="lg">
            <Title order={2}>📝 Gästebuch</Title>
            <Textarea
                placeholder="Hinterlass uns eine Nachricht..."
                value={eintrag}
                onChange={(e) => setEintrag(e.currentTarget.value)}
                autosize
                minRows={3}
            />
            <Button onClick={absenden} color="teal">Abschicken</Button>

            {eintraege.map((e, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                >
                    <Card shadow="sm" padding="md" radius="md" withBorder>
                        <Text>{e}</Text>
                    </Card>
                </motion.div>
            ))}
        </Stack>
    );
}
