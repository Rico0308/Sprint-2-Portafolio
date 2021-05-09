import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layout'
import SmallTitle from './SmallTitle'
import Title from './Title'
import BriefCaseIcon from '@material-ui/icons/BusinessCenter'
import SchoolIcon from '@material-ui/icons/School'
import ResumeItem from './ResumeItem'

function Resume() {
    const briefcae = <BriefCaseIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <div className="small-title">
                <Title title={ 'Resume' } span={ 'Resume' }></Title>
            </div>
            <InnerLayout>
                <SmallTitle
                    icon={ briefcae }
                    title={ 'Experiencia de Trabajo' }
                />
                <div className="resume-content">
                    <ResumeItem
                        year={ '2019' }
                        title={ 'Modulos Conteo Votos' }
                        subTitle={ 'Elecciones Alcaldía Arauca' }
                        text={ 'Desarrollo de módulos para llevar el conteo de uno de los candidatos para la Alcaldía de Arauca para el año 2019. Desarrollado en PHP sin Framework, empleando el patrón MVC.' }
                    />
                </div>
                <SmallTitle
                    icon={ school }
                    title={ 'Estudios Realizados' }
                />
                <div className="resume-content">
                    <ResumeItem
                        year={ '2016 - 2020' }
                        title={ 'Ingeniería de Sistemas' }
                        subTitle={ 'Universidad Cooperativa de Colombia - Sede Arauca' }
                        text={ 'Carrera Universitaria en Ingeniería de Sistemas en la Ciudad de Arauca. Durante la cual se abordaron diferentes campos de la Ingeniería que aporten al desarrollo de las actividades.' }
                    />
                    <ResumeItem
                        year={ 'Abril 2019' }
                        title={ 'Curso Redes y Seguridad' }
                        subTitle={ 'SENA' }
                        text={ 'Curso de Formación en Redes y Seguridad con una intensidad de 40 horas en modalidad virtual. Abordando temas básicos como lo son los modelos de la Capa OSI así como la interacción de estas.' }
                    />
                    <ResumeItem
                       year={ 'Marzo 2019' }
                       title={ 'Curso Gestión de la Seguridad Informática' }
                       subTitle={ 'SENA' }
                       text={ 'Curso de Formación en Gestión de la Seguridad Informática con una intensidad de 40 horas en modalidad virtual. En el cual se trataron temas como la identificación de amenazas mediante MAGERIT.' }
                    />
                    <ResumeItem
                       year={ 'Marzo 2019' }
                       title={ 'Curso Auditoría Informática: Conceptualización' }
                       subTitle={ 'SENA' }
                       text={ 'Curso de Formación en Auditoría Informática: Conceptualización con intensidad de 40 horas en modalidad virtual. Se abordó lo básico que se deben tener en cuenta a la hora de realizar una auditoría.' }
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>
    )
}

const ResumeStyled = styled.section`

    .small-title{
        padding-bottom: 3rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
        padding-bottom: 3rem;
    }
`;

export default Resume
