import React from 'react'
import styled from 'styled-components'
import profile from '../images/profile.jpeg'
import PrimaryBTN from './PrimaryBTN';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={profile} alt="Foto" />
            </div>
            <div className="right-content">
                <h4>Soy <span>Carlos Daniel Rico Galindo</span></h4>
                <p className="paragraph">
                    Nací en Chinacota - Norte de Santander, pero he vivido desde pequeño en Arauca.
                    Soy Ingeniero de Sistemas apasionado por el Desarrollo de Software. Actualmente
                    realizo el curso intensivo en Academia Geek y en paralelo el de formación en programación
                    de la Misión TIC.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Nombre Completo</p>
                        <p>Edad</p>
                        <p>Nacionalidad </p>
                        <p>Lenguajes </p>
                        <p>Ubicación</p>
                    </div>
                    <div className="info">
                        <p>: Carlos Daniel Rico Galindo</p>
                        <p>: 22</p>
                        <p>: Colombiano </p>
                        <p>: Español </p>
                        <p>: Arauca, Colombia</p>
                    </div>
                </div>
                <PrimaryBTN title={'Descargar HV'} />
            </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`
    display: flex;
    margin-top: 2rem;

    @media screen and (max-width: 1000px){
        flex-direction: column;

        .left-content{
            margin-bottom: 2rem;
        }
    }

    .left-content{
        width: 100%;
        img{
            width: 80%;
            object-fit: cover;

        }
    }

    .right-content{
        h4{
            font-size: 2rem;
            color: var(--white-color);

            span{
                font-size: 2rem;
            }
        }

        .paragraph{
            padding: 1rem 0;
        }

        .about-info{
            display: flex;
            padding-bottom: 1.4rem;

            .info-title{
                padding-right: 3rem;

                P{
                    font-weight: 600;
                }

            }

            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }

`;
export default ImageSection
