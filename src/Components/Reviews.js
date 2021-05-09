import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layout'
import ReviewItem from './ReviewItem'
import Title from './Title'

function Reviews() {
    return (
        <ReviewStyled>
            <Title title={ 'Opiniones' } span={ 'Opiniones' } />
            <InnerLayout>
                <div className="reviews">
                    <ReviewItem
                        text = {'Muy a gusto con la página web creada la cual incluye portal de compras.'}
                    />
                    <ReviewItem
                        text = {'Excelente servicio al consultar los precios según los requerimientos suministrados.'}
                    />
                </div>
            </InnerLayout>
        </ReviewStyled>
    )
}

const ReviewStyled = styled.section`

    .reviews{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
        width: 100%;

        @media screen and (max-width: 750px){
            grid-template-columns: repeat(1, 1fr);
        }

    }

`;

export default Reviews
