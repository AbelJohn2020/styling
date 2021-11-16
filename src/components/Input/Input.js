import React from 'react';
import { GoSearch } from "react-icons/go";
import { InputStyles, InputText } from './InputStyles';

const Input = () => {
    return (
        <InputStyles>
            <GoSearch />
            <InputText type="search" placeholder="search" /> 
        </InputStyles>
    )
}

export default Input;
