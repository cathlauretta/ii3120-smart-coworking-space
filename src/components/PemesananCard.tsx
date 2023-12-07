import React from 'react';
import { Box, Text, Image, Flex, Button, Stack, useColorModeValue } from '@chakra-ui/react';
import { useReducer } from 'react';

interface Props {
    property1: "variant-2" | "default"
    foodListFnBCardIcon: JSX.Element
    foodListInputGroupIcon: JSX.Element
    override: JSX.Element
}

