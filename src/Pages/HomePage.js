import React from 'react'
import styled from 'styled-components'
import GithubIcon from '@material-ui/icons/GitHub'
import Instagram from '@material-ui/icons/Instagram'
import Particle from '../Components/Particles'

function HomePage() {
    return (
        <HomeStyled>
            <div className="p-particles-js">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, soy <span>Carlos Daniel Rico Galindo</span></h1>
                <div className="icons">
                    <a href="https://github.com/Rico0308" className="icons i-github" target="_blank">
                        <GithubIcon />
                    </a>
                    <a href="https://www.instagram.com/rico0.0/?hl=es-la" className="icons i-instagram" target="_blank">
                        <Instagram />
                    </a>
                </div>
            </div>
        </HomeStyled>
    )
}

const HomeStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;

    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 50%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icons{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;

                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }

                &:not(:last-child){
                    margin-right: .5rem;
                }
                svg{
                    margin: .6rem;
                }
            }
            .i-instagram{
                &:hover{
                    border: 2px solid purple;
                    color: purple;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }

`;

export default HomePage
