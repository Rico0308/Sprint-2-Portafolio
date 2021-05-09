import React from 'react'
import styled from 'styled-components';
import Nav from './Nav';

function Sidebar({ navToggle }) {
    return (
        <SidebarStyled className={ `${navToggle ? 'nav-toggle' : ''}` }>
            <Nav />
        </SidebarStyled>
    )
}

const SidebarStyled = styled.div`
    width: 16.3rem;
    position: fixed;
    height: 100vh;
    background-color: var(--sidebar-dark-color);
    overflow: hidden;
    transition: all .4s ease-in-out;

    @media screen and (max-width: 1310px){
        transform: translateX(-100%);
        z-index: 20;
    }

    /* @media screen and (max-width: 730px){
        transform: translateX(-100%);
        z-index: 20;
        height: 110vh;
    } */

`;
export default Sidebar
