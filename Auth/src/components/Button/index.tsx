import React from 'react';

import { Button } from './styles';

interface Props{
    Text: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    Type?: "button" | "submit" | "reset";
}

const ButtonBox : React.FC<Props> = ({ Text, onClick, Type="button" }) => {
    return (
      <Button
        type={Type}
        onClick={onClick}>
        {Text}
     </Button>
      
    );
  };

export default ButtonBox;