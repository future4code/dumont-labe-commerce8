import React from 'react';
import { Filters } from './components/Filters/Filters';
import { Products } from './components/Products/Products';
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart';
import styled from 'styled-components';

import camiseta1 from './components/IMG/camiseta1.jpg';
import camiseta2 from './components/IMG/camiseta2.jpg';
import camiseta3 from './components/IMG/camiseta3.jpg';
import camiseta4 from './components/IMG/camiseta4.jpg';
import camiseta5 from './components/IMG/camiseta5.jpg';
import camiseta6 from './components/IMG/camiseta6.jpg';
import camiseta7 from './components/IMG/camiseta7.jpg';
import camiseta8 from './components/IMG/camiseta8.jpg';
import camiseta9 from './components/IMG/camiseta9.jpg';

const AppContainer = styled.div`
display: grid;
grid-template-columns: 1fr 3fr 1fr;
padding: 16px;
gap: 8px;
`;

const products = [
    {
        id: 1,
        name: 'Camiseta Marte',
        price: 53,
        photo: camiseta1,
    },

    {
        id: 2,
        name: 'Camiseta Vênus',
        price: 49,
        photo: camiseta2,
    },

    {
        id: 3,
        name: 'Camiseta Urano',
        price: 60,
        photo: camiseta3,
    },

    {
        id: 4,
        name: 'Camiseta Saturno',
        price: 60,
        photo: camiseta4,
    },

    {
        id: 5,
        name: 'Camiseta Netuno',
        price: 50,
        photo: camiseta5,
    },

    {
        id: 6,
        name: 'Camiseta Júpter',
        price: 49,
        photo: camiseta6,
    },

    {
        id: 7,
        name: 'Camiseta Mercúrio',
        price: 39,
        photo: camiseta7,
    },

    {
        id: 8,
        name: 'Camiseta Terra',
        price: 80,
        photo: camiseta8,
    },

    {
        id: 9,
        name: 'Camiseta Espaço',
        price: 89,
        photo: camiseta9,
    },
]

class App extends React.Component {
    state = {
        minFilter: 1,
        maxFilter: 100000,
        nameFilter: '',
        productsInCart: [],
        productsList: products,
        sort: "crescente",
    };

     onChangeMinFilter = (event) => {
        this.setState({ minFilter: event.target.value })
    };

    onChangeMaxFilter = (event) => {
        this.setState({ maxFilter: event.target.value })
    };

    onChangeNameFilter = (event) => {
        this.setState({ nameFilter: event.target.value })
    };

    onAddProductToCart = (productId) => {
        const productInCart = this.state.productsInCart.find(product => productId === product.id)

        if (productInCart) {
            const newProductsInCart = this.state.productsInCart.map(product => {
                if (productId === product.id) {
                    return {
                        ...product,
                        quantity: product.quantity + 1
                    }
                }
                return products
            })

            this.setState({ productsInCart: newProductsInCart })
        } else {
            const productToAdd = products.find(product => productId === product.id)

            const newProductsInCart = [...this.state.productsInCart, { ...productToAdd, quantity: 1 }]

            this.setState({ productsInCart: newProductsInCart })
        }
    };

    onRemoveProductFromCart = (productId) => {
        const newProductsInCart = this.state.productsInCart
        .map((product) => {
            if (productId === product.id) {
                return {
                    ...product,
                    quantity: product.quantity - 1,
                };
            }
            return product;
        })
        .filter((product) => product.quantity > 0);

        this.setState({productsInCart: newProductsInCart});
    };

/*     onChangeShoppingCart = (event) => {
        ShoppingCart = this.children.ShoppingCartContainer
        if(ShoppingCart.props.styled === 'display: none') {
            ShoppingCart.props.styled = 'display: block'
        } else {
            ShoppingCart.props.styled = 'display: none'
        };
    } */

    render() {

        return (
            <AppContainer>
                <Filters
                    minFilter={this.state.minFilter}
                    maxFilter={this.state.maxFilter}
                    nameFilter={this.state.nameFilter}
                    onChangeMinFilter={this.onChangeMinFilter}
                    onChangeMaxFilter={this.onChangeMaxFilter}
                    onChangeNameFilter={this.onChangeNameFilter}
                />
                <Products
                    products={this.state.productsList}
                    minFilter={this.state.minFilter}
                    maxFilter={this.state.maxFilter}
                    nameFilter={this.state.nameFilter}
                    onAddProductToCart={this.onAddProductToCart}
                    sort={this.state.sort}
/*                     onChangeShoppingCart={this.onChangeShoppingCart} */
                />
                <ShoppingCart
                    productsInCart={this.state.productsInCart}
                    onRemoveProductFromCart={this.onRemoveProductFromCart}
                />
{/*                 <button onClick={this.ShoppingCartContainer}>PR</button> */}
            </AppContainer>
        );
    }
}
export default App;