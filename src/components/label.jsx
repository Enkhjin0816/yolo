import styled from "styled-components";
import { Input, Stack, Text } from ".";

const Label = ({text, placeholder, id, value, onchange}) => {
    return <Stack horizantal='start' gap={'10px'}>
        <Text size="sm">{text ? text : "text"}</Text>
        <Input onChange={onchange} value={value} id={id} type="small" placeholder={placeholder ? placeholder : ""} />
    </Stack>
}

export {Label}