import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

interface Params {
    placeholder: string;
    type: string;
    icons: JSX.Element;
    getValue: (item: string) => void;
}

export const BasicInput = ({ placeholder, type, icons, getValue }: Params) => {
    return (
        <InputGroup>
            <InputLeftElement color="gray.400" pointerEvents="none">
                {icons}
            </InputLeftElement>
            <Input
                type={type}
                placeholder={placeholder}
                onChange={(event) => {
                    getValue(event.target.value);
                }}
            />
        </InputGroup>
    );
};
