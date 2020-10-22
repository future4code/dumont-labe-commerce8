import React from 'react';
import styled from 'styled-components'

//Estilização

const Aba = styled.div`
 border: 1px solid black;
 padding-left: 0.2em;
 margin-block-start: 0.83em;
 margin-left: 79%;
 margin-right: 0.60em;
 padding-bottom: 39em;
 background-color: red;
`

const Textos = styled.div`
 display: flex;
 flex-direction: column;
 background-color: green;
`
const Titulo = styled.h2`
 font-size: 25px;
 margin: 5px 0px;
 background-color:yellow;
`
const Para = styled.p`
 background-color: blue;

`

export function Carrinho() {
  return (
    <Aba>
        <Textos>
         <Titulo>Carrinho:</Titulo>
         <Para>Total: R$ 0.00</Para>
        </Textos> 
    </Aba>
  );
}

