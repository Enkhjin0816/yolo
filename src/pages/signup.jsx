import React from "react";
import { Container, Queue, Button, Text, Stack, Padding, Input } from '../components';
import {useNavigate} from 'react-router-dom'
import { Label } from "../components/label";

const SignUp = () => {
    let navigate = useNavigate();
    return (
        <Container>
            <Stack height="100%">
                <Padding size={[50, 100]}>
                    <Queue horizantal="end" gap="30px">
                        <Text type="header" size="lg">
                            Хэрхэн ажилладаж вэ?
                        </Text>
                    </Queue>
                </Padding>
                <Padding size={[100, 0, 0, 0]}>
                    <Stack horizantal="center" gap="30px">
                        <Text size="xl" type="header">Boginoo</Text>
                        <Text size="lg" type="header">Бүртгүүлэх</Text>
                        <Label text={'Цахим хаяг'} placeholder={'name@mail.domain'}/>
                        <Label text={'Нууц үг'} placeholder={'••••••••••'}/>
                        <Label text={'Нууц үг давтах'} placeholder={'••••••••••'}/>
                            <Button>
                                <Padding size={[10, 26]}>
                                    Бүртгүүлэх
                                </Padding>
                            </Button>
                            <Button onClick={() => {navigate("/login")}} link type="link">
                                <Padding size={[10, 26]}>
                                    Аль хэдийн бүртгэлтэй юу?
                                </Padding>
                            </Button>
                    </Stack>
                </Padding>
            </Stack>
        </Container>
    )
}

export default SignUp;