import React from 'react';

import { Button } from './styles';

interface Props{
    Text: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    Type: string;
}

const ButtonBox : React.FC<Props> = ({ Text, Type="button", onClick }) => {
    return (
      <Button
        type="button"
        onClick={onClick}>
        {Text}
     </Button>
      
    );
  };

export default ButtonBox;