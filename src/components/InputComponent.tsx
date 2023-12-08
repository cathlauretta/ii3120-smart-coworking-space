import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

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

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


import * as React from 'react';


export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputSearch = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
InputSearch.displayName = 'Input';

export { InputSearch };