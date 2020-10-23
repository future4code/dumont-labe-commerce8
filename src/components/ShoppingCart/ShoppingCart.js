import React from 'react';
import styled from 'styled-components'
import { ShoppingCardItem } from "./ShoppingCartItem";

//Estilização

const Aba = styled.div`
 border: 1px solid black;
 padding-left: 0.50em;
 margin-block-start: 0.90em;
 padding-right: 0.70em;
 padding-left: 1em;
 padding-bottom: 39em;
`
const Titulo = styled.h2`
 font-size: 25px;
 margin: 5px 0px;

`

export class ShoppingCart extends React.Component{
  render(){
    return (
      <Aba>
           <Titulo>Carrinho:</Titulo>
           <ShoppingCardItem/>
           <ShoppingCardItem/>
           <ShoppingCardItem/>
           <p>Total: R$ 0.00</p>
           
      </Aba>
    );
  }
  
}

