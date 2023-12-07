"use client";
import React, { useState } from "react";
import {
    InputGroup,
    Input,
    InputRightElement,
    InputLeftElement,
    IconButton,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash, FaAsterisk } from "react-icons/fa";

interface Params {
    getPass: (item: string) => void;
}

export const Password = ({ getPass }: Params) => {
    const [show, setShow] = useState(false);
    const [icon, setIcon] = useState(<FaEye />);
    const handleClick = () => {
        setShow(!show);
        show ? setIcon(<FaEye />) : setIcon(<FaEyeSlash />);
    };

    return (
        <InputGroup size="md">
            <InputLeftElement color="gray.400" pointerEvents="none">
                <FaAsterisk />
            </InputLeftElement>
            <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Password"
                onChange={(event) => {
                    getPass(event.target.value);
                }}
            />
            <InputRightElement>
                <IconButton
                    aria-label="Show Password"
                    h="1.75rem"
                    size="sm"
                    onClick={handleClick}
                    icon={icon}
                    variant="flushed"
                    color="gray.400"
                />
            </InputRightElement>
        </InputGroup>
    );
};
