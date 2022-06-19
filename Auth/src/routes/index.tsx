import React from 'react';
import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/Home'
import Signin from '../pages/Signin'
import Signout from '../pages/Signout'
import useAuth from '../hooks/useAuth'

interface Props{
    Item?: any
    
}

type signed = {
  signed?: any;
}

const Private: React.FC<Props> = ({ Item }) =>{
    const { signed }:signed = useAuth();
    
  
    return signed > false ? <Item/> : <Signin/>
};

const routes: React.FC = () => {
  return (
    <BrowserRouter>
        <Fragment>
          <Routes>
            <Route path ="/home" element={<Private Item={Home}/>}/>
            <Route path ="/" element={<Signin/>}/>
            <Route path ="/signout" element={<Signout/>}/>
            <Route path ="*" element={<Signin/>}/>
          </Routes>
        </Fragment>
    </BrowserRouter>
  )
}

export default routes;