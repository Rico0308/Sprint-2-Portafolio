import React from 'react'
import styled from 'styled-components'
import { MainLayout, InnerLayout } from '../styles/Layout'
import Title from './Title'
import ProgressBar from './ProgressBar'

function Skills() {
    return (
        <SkillsStyled>
            <Title title={ 'Mis Habilidades' } span={ 'Mis Habilidades' }></Title>
            <InnerLayout>
                <div className="skills">
                    <ProgressBar
                        title={'HTML5'}
                        width={'65%'}
                        text={'65%'}
                    />
                    <ProgressBar
                        title={'CSS'}
                        width={'50%'}
                        text={'50%'}
                    />
                    <ProgressBar
                        title={'JAVASCRIPT'}
                        width={'45%'}
                        text={'45%'}
                    />
                    <ProgressBar
                        title={'PHP'}
                        width={'70%'}
                        text={'70%'}
                    />
                    <ProgressBar
                        title={'LARAVEL'}
                        width={'55%'}
                        text={'55%'}
                    />
                    <ProgressBar
                        title={'SQL'}
                        width={'70%'}
                        text={'70%'}
                    />
                    <ProgressBar
                        title={'REACT JS'}
                        width={'30%'}
                        text={'30%'}
                    />
                    <ProgressBar
                        title={'BOOTSTRAP'}
                        width={'55%'}
                        text={'55%'}
                    />
                </div>
            </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`

    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;

        @media screen and (max-width: 850px){
            grid-template-columns: repeat(1, 1fr);
        }

    }
`;

export default Skills
