import React from 'react';
import styled from 'styled-components'

//Estilização

const ItemCard = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 gap: 34px;

 p1{
    margin: 0;
    font-size: 15px;
 }
 p{
     font-size: 15px;
 }
`
   
export class ShoppingCardItem extends React.Component{
    render(){
        return (
        <ItemCard>
        <p1>1x</p1>
        <p>Produtos</p>
        <button>Remover</button>
        </ItemCard>
        );
    }
}