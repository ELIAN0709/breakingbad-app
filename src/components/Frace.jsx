import React from 'react'
import styled from '@emotion/styled';


const ContenedorFrace = styled.div`
    padding: 3rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width: 800px;
    
    @media(min-width: 992px) {
        margin-top: 10rem;
    }

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        
/*
        &::before{
            content: open-quote;
            font-size: 6rem;
            color: black;
            position: absolute;
            left: 1rem;
            top: -2rem;
        }

        &::after{
            content: close-quote;
            font-size: 6rem;
            color: black;
            right: -1rem;
            top: 12rem;
        }*/
    }

    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        font-weight: bold;
        text-align: right;
        color: #666;
        margin: 2rem;

    }
`;

const Frace = ({ frace }) => {
    return ( 
        <ContenedorFrace>
        <h1>"{frace.quote}"</h1>
        <p>- {frace.author}</p>
        </ContenedorFrace>
     );
}
 
export default Frace;