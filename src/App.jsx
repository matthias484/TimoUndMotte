// src/App.jsx
import { Routes, Route, NavLink } from 'react-router-dom';
import { Container, Group, MantineProvider } from '@mantine/core';
import Home from './frontend/Home.jsx';
import About from './frontend/About.jsx';
import Contact from './frontend/Contact.jsx';

export default function App() {
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <header style={{ padding: '1rem 0', borderBottom: '1px solid #eee' }}>
                <Container size="md" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Group spacing="md">
                        <NavLink
                            to="/"
                            style={({ isActive }) => ({
                                textDecoration: 'none',
                                color: isActive ? '#1c7ed6' : '#495057',
                                fontWeight: isActive ? 'bold' : 'normal',
                            })}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            style={({ isActive }) => ({
                                textDecoration: 'none',
                                color: isActive ? '#1c7ed6' : '#495057',
                                fontWeight: isActive ? 'bold' : 'normal',
                            })}
                        >
                            Über uns
                        </NavLink>
                        <NavLink
                            to="/contact"
                            style={({ isActive }) => ({
                                textDecoration: 'none',
                                color: isActive ? '#1c7ed6' : '#495057',
                                fontWeight: isActive ? 'bold' : 'normal',
                            })}
                        >
                            Kontakt
                        </NavLink>
                    </Group>
                </Container>
            </header>

            <main>
                <Container size="md" style={{ paddingTop: '2rem' }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Container>
            </main>
        </MantineProvider>
    );
}
