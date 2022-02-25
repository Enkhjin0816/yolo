import React from "react";
import {Container, Queue, Button, Text, Stack, Padding, Input} from '../components';
import {useNavigate} from 'react-router-dom'

const Home = () => {
    let navigate = useNavigate();
    return (
        <Container>
            <Stack height="100%">
                <Padding size={[50, 100]}>
                    <Queue horizantal="end" gap="30px">
                        <Text type="header" size="lg">
                            Хэрхэн ажилладаж вэ?
                        </Text>
                        <Button onClick={() => {navigate("/login")}}>
                            <Padding size={[10, 45]}>Нэвтрэх</Padding>
                        </Button>
                    </Queue>
                </Padding>
                <Padding size={[200, 0, 0, 0]}>
                    <Stack horizantal="center" gap="30px">
                        <Text size="xl" type="header">Boginoo</Text>
                        <Queue horizantal="center" gap="20px">
                            <Input placeholder="https://www.web-huudas.mn" />
                            <Button>
                                <Padding size={[10, 26]}>
                                    Богиносгох
                                </Padding>
                            </Button>
                        </Queue>
                    </Stack>
                </Padding>
                <Padding size={[450, 0, 0, 0]}>
                    <Stack horizantal="center">
                        <Text>
                            Made with ♥️ by Nest Academy
                        </Text>
                        <Text type="secondary">
                            ©boginoo.io 2020
                        </Text>
                    </Stack>
                </Padding>
            </Stack>
        </Container>
    )
}

export default Home;