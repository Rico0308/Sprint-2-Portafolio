import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import profile from '../images/profile.jpeg'

function Nav() {
    return (
        <NavStyled>
            <div className="profile">
                <img src={ profile } alt="Foto de Perfil" />
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to="/" activeClassName="active-class" exact>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/About" activeClassName="active-class" exact>Acerca de Mi</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/Resume" activeClassName="active-class" exact>Mis Habilidades</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/Portfolio" activeClassName="active-class" exact>Mi Portafolio</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/Contact" activeClassName="active-class" exact>Contáctame</NavLink>
                </li>
            </ul>
            <footer>
                <p>2021 © Carlos Daniel Rico Galindo</p>
            </footer>
        </NavStyled>
    )
}

const NavStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 2px solid var(--border-color);

    .profile{
        width: 70%;
        border-bottom: 1px solid var(--border-color);
        text-align: center;
        padding: 2rem 0;
        img{
            width: 100%;
            border-radius: 50%;
            border: 8px solid var(--border-color);
        }
    }

    .nav-items{
        width: 100%;
        text-align: center;

        .active-class{
            background-color: var(--primary-color);

        }

        li{
            display: block;

            a{
                display: block;
                padding: .4rem 0;
                position: relative;
                text-transform: uppercase;
                transition: all .4s ease-in-out;
                font-weight: 600;
                letter-spacing: 1px;
                &:hover{
                    cursor: pointer;
                }
                &::before{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 50%;
                    background-color: var(--primary-color);
                    transition: All 0.4s cubic-bezier(.72,.03,.28,.91);
                    opacity: 0.2;
                    transform-origin: bottom;
                }
            }

            a:hover::before{
                width: 100%;
                height: 100%;
            }
        }
    }

    footer{
        border-top: 1px solid var(--border-color);
        p{
            font-size: 1rem;
            padding: 1rem 0;
            display: block;
            text-align: center;
        }
    }

`;

export default Nav;
