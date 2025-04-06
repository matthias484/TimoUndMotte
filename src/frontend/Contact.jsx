import { Title, Text, TextInput, Textarea, Button, Stack, Paper } from '@mantine/core';

export default function Contact() {
    return (
        <Paper shadow="sm" radius="md" p="xl" withBorder>
            <Title order={2} mb="sm">Schreib uns eine Nachricht! 💌</Title>
            <Text size="sm" mb="md">Wir freuen uns über Feedback, Fragen oder einfach ein freundliches "Hey!" 😄</Text>
            <Stack>
                <TextInput label="Dein Name" placeholder="MausiCoder420" />
                <TextInput label="Deine E-Mail" placeholder="du@internet.de" />
                <Textarea label="Was liegt dir auf dem Herzen?" placeholder="Z. B. 'Macht weiter so!'" minRows={4} />
                <Button color="violet">Absenden 🚀</Button>
            </Stack>
        </Paper>
    );
}
