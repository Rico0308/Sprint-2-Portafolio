import React from 'react'
import styled from 'styled-components'

function Button({ filter, button }) {
    return (
        <ButtonContStyled>
            {
                button.map((btn, i) => {
                    return <ButtonStyled key={ i } onClick={() => filter(btn)}>
                        { btn }
                    </ButtonStyled>
                })
            }
        </ButtonContStyled>
    )
}

const ButtonContStyled = styled.div`
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 70%;
    margin: 1rem auto;
`;

const ButtonStyled = styled.button`
    outline: none;
    border: none;
    background-color: var(--background-light-color-2);
    padding: .5rem 1.4rem;
    font-size: inherit;
    color: var(--white-color);
    cursor: pointer;
    transition: all .4s ease-in-out;
    margin-bottom: .6rem;


    &:active, &:focus{
        background-color: red;
    }

    &:not(:last-child){
        margin-right: 1rem;
    }

    &:hover{
        background-color: var(--primary-color);
    }
`;

export default Button
