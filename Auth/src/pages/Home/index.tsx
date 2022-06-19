import React from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth"

import { Container, Title } from './styles';

type signOff = {
  signout?: any;
}

const Home: React.FC = () => {
  const { signout }: signOff = useAuth();
  const navigate = useNavigate();
  return (
    <Container>
      <Title>Home</Title>
      <Button Text="Exit" onClick={() => [signout(), navigate("/")]} />
    </Container>
  )
}

export default Home;