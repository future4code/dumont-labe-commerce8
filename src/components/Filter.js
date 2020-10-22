import React from 'react';
import styled from 'styled-components';

//Estilização
const Filtro = styled.div`
 border: 1px solid black;
 padding-left: 0.5em;
 padding-right: 8em;
 padding-bottom: 39em;
 margin-block-start: 0.83em;
 margin-left: 0.60em;
 margin-right: 70%;
`

export function Filter (){ 

    return(

    <Filtro>
        <h1>Filtros:</h1>
        <p>Valor mínimo:</p>
        <input type="number" id="quantity" name="quantity" min="0"></input>
        <p>Valor máximo:</p>
        <input type="number" id="quantity" name="quantity" min="0"></input>
        <p>Buscar produto:</p>
        <input type="text" id="text" name="text"></input>
    </Filtro>
    );
}
