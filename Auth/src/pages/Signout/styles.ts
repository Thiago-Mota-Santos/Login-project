import styled from "styled-components";


export const Container = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;

`;



export const WrapperContent = styled.div`
 gap: 15px;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 width: 100%;
 box-shadow: 0 1px 2px #0003;
 background-color: #fff;
 max-width: 350px;
 padding: 20px;
 border-radius: 5px;

`;
export const Title = styled.div`
  font-size: 17px;
  font-weight: bold;
  color: #676767;


`;


export const LabelSignup = styled.label`
   font-size: 16px;
   color: #676767;

`;

export const LabelError = styled.div`
  font-size: 15px;
  color: red;

`;

export const Strong = styled.strong`
  cursor: pointer;

  a{
    text-decoration: none;
    color: #676767;
  }
`;




