import React from 'react';
import styled from 'styled-components';

// Estilização
const CardContainer = styled.section`
  display: flex;
  border: 1px dashed orange;
  flex-direction: column;
  padding: 4px;
  max-height: 100%;
  max-width: 100%;
  height: 430px;
  width: auto;
  overflow: hidden;
  text-align: center;


img {
max-height: 100%;
max-width: 100%;
height: 430px;
width: auto;
overflow: hidden;
object-fit: contain;
}

`
const CardInfo = styled.div`
  flex-direction: column;
  padding: 16px;


p {
 margin: 4px 0;
}
`
const AddToCardButton = styled.button`
align-self: center;
margin-top: 4px;
padding: 4px 31px;
color: white;
background-color: black;
`

export class ProductCard extends React.Component {
    render() {
        const product = this.props.product
        return <CardContainer>
            <img src={product.photo} />
            <CardInfo>
                <p>{product.name}</p>
                <p>R${product.price},00</p>
                <AddToCardButton
                    onClick={() => this.props.onAddProductToCart(product.id)}>
                    Adicionar ao carrinho
                </AddToCardButton>
            </CardInfo>
        </CardContainer >

    }
}