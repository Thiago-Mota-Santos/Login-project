import React from 'react';

import { InputContainer } from './styles';

 interface Props{
  type: string;
  placeholder: string;
  value?: number | string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input : React.FC<Props> = ({ type, placeholder, value, onChange }) => {
  return (
    <InputContainer
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
    
  );
};


export default Input;