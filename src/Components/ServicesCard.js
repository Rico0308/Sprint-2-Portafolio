import React from 'react'
import styled from 'styled-components'

function ServicesCard({ image, title, paragrap }) {
    return (
        <ServiceCardStyled>
            <div className="container">
                <img src={ image } alt="Web Design" />
                <h4>{ title }</h4>
                <p>{ paragrap }</p>
            </div>
        </ServiceCardStyled>
    )
}

const ServiceCardStyled = styled.div`
    background-color: var(--background-dark-grey);
    border-top: 5px solid var(--border-color);
    border-right: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    border-left: 1px solid var(--border-color);
    transition: all .4s ease-in-out;

    &:hover{
        border-top: 5px solid var(--primary-color);
        transform: translateY(3px);
    }

    .container{
        padding: 1.2rem;

        h4{
            color: var(--white-color);
            font-size: 1.6rem;
            padding: 1rem 0;
            position: relative;

            &::after{
                content: "";
                width: 3rem;
                background-color: var(--border-color);
                height: 3px;
                position: absolute;
                left: 0;
                bottom: 0;
                border-radius: 10px;
            }
        }

        p{
            padding: .5rem 0;
        }

    }

`;

export default ServicesCard
