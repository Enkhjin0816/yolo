import React, { useState } from "react";
import { Container, Queue, Button, Text, Stack, Padding, Input } from '../components';
import {useNavigate} from 'react-router-dom'

const Login = () => {
    let navigate = useNavigate();
    const [form, setForm] = useState({email: '', password: ''});
    const handleChange = (e) => {
        setForm({...form, [e.target.id]: [e.target.value]})
    }

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
                        <Text size="lg" type="header">Нэвтрэх</Text>

                        <Stack horizantal='start' gap={'10px'}>
                            <Text size="sm">{'Цахим хаяг'}</Text>
                            <Input onChange={handleChange} value={form.email} id={'email'} type="small" placeholder={'name@mail.domain'} />
                        </Stack>

                        <Stack horizantal='start' gap={'10px'}>
                            <Text size="sm">{'Нууц үг'}</Text>
                            <Input onChange={handleChange} value={form.password} id={'password'} type="small" placeholder={'••••••••••'} />
                        </Stack>
                            <Button long>
                                <Padding size={[10, 26]}>
                                    Нэвтрэх
                                </Padding>
                            </Button>
                            <Button onClick={() => {navigate("/signup")}} link type="link">
                                <Padding size={[10, 26]}>
                                    Шинэ хэрэглэгч бол энд дарна уу?
                                </Padding>
                            </Button>
                    </Stack>
                </Padding>
            </Stack>
        </Container>
    )
}

export default Login;