import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layout'
import ServicesCard from './ServicesCard'
import Title  from './Title'
import design from '../images/design.svg'
function Services() {
    return (
        <InnerLayout>
            <ServiceStyled>
                <Title title={ 'Servicios' } span={ 'servicios' } />
                <div className="service">
                    <ServicesCard
                        image={ design }
                        title={ 'Diseño web' }
                        paragrap={ 'Diseño y Desarrollo de Sitios Web para cualquier público.' }
                    />
                </div>
            </ServiceStyled>
        </InnerLayout>
    )
}


const ServiceStyled = styled.section`

    .service{
        margin-top: 3rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;

        @media screen and (max-width: 1000px){
            flex-direction: column;
        }

        @media screen and (max-width: 950px){
            grid-template-columns: repeat(2, 1fr);
        }

        @media screen and (max-width: 750px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Services
