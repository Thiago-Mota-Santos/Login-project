import React, {useState} from "react";
import ButtonBox from "../../components/Button";
import Input from "../../components/Input";
import { Link, useNavigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import { Container, WrapperContent, Title, LabelError, LabelSignup, Strong  } from './styles';

type signed = {
  signup?: any;
}


const Signout: React.FC = () => {

const { signup }: signed = useAuth();
const navigate = useNavigate();
 
const [email, setEmail] = useState<string>("");
const [emailConfing, setEmailConfing] = useState<string>("");
const [password, setPassword] = useState<string>("");
const [error, setError] = useState<string>("");

 
 
 
  const handleClick: React.MouseEventHandler<HTMLButtonElement> | undefined = () => {
   if(!email || !emailConfing|| !password ){
     setError("fill all fields");
     return;
   }else if (email!==emailConfing){
    setError("Emails aren't equals")
    return;
   }
 
   const res = signup(email, password);
 
   if(res){
     setError(res);
     return;
   }
   alert("user registered successfully");
   navigate("/");
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
         type="email" 
         placeholder="Confirm Your Ermail" 
         value = {emailConfing}
         onChange={(e)=> [setEmailConfing(e.target.value), setError("")]}
         />
         <Input 
         type="password" 
         placeholder="Your Password" 
         value = {password}
         onChange={(e)=> [setPassword(e.target.value), setError("")]}
         />
       <LabelError>{error}</LabelError>
       <ButtonBox Text="Sign up" onClick={handleClick} />
       <LabelSignup>
         Don't have a account?
         <Strong>
           <Link to ="/signup">&nbsp;Enter</Link>
         </Strong>
       </LabelSignup>
     </WrapperContent>
    </Container>
   );
 }

export default Signout;