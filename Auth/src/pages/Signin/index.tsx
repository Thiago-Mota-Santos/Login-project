import React, {useState} from "react";
import ButtonBox from "../../components/Button";
import Input from "../../components/Input";
import { Link, useNavigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import { Container, WrapperContent, Title, LabelError, LabelSignup, Strong  } from './styles';


const Signin: React.FC = () => {

const { signin } = useAuth();
 const navigate = useNavigate();

 const [email, setEmail] = useState<string>(" ");
 const [password, setPassword] = useState<string>(" ");
 const [error, setError] = useState<string>(" ");



 const handleLogin: React.MouseEventHandler<HTMLButtonElement> | undefined () => {
  if(!email || !password){
    setError("fill all fields")
    return;
  }

  const res = signin(email, password);

  if(res){
    setError(res);
    return;
  }
  navigate("/home");
};

  return (
   <Container>
    <Title>Login System</Title>
    <WrapperContent>
      
        <Input
         type="email"
         placeholder="Your Email" 
         value={email} 
         onChange={(e)=>[setEmail(e.target.value),setError("")]}
          />
        <Input 
        type="password" 
        placeholder="Your Password" 
        value = {password}
        onChange={(e)=> [setPassword(e.target.value), setError("")]}
        />
      <LabelError>{error}</LabelError>
      <ButtonBox Text="Enter" onClick={handleLogin} />
      <LabelSignup>
        Don't have a account?
        <Strong>
          <Link to ="/signup">&nbsp; Register</Link>
        </Strong>
      </LabelSignup>
    </WrapperContent>
   </Container>
  );
}

export default Signin;