import React from 'react'
import styled from 'styled-components'
import ImageSection from '../Components/ImageSection'
import Reviews from '../Components/Reviews'
import Services from '../Components/Services'
import Title from '../Components/Title'
import {MainLayout} from '../styles/Layout'

function About() {
    return (
        <MainLayout>
            <AboutStyled>
                <Title title={'Acerca de Mi'} span={'Acerca de Mi'}></Title>
                <ImageSection />
                <Services />
                <Reviews />
            </AboutStyled>
        </MainLayout>
    )
}

const AboutStyled = styled.section`
    /* @media screen and (max-width: 1000px){
        transform: translateX(-100%);
        z-index: 20;
    } */
`;

export default About
