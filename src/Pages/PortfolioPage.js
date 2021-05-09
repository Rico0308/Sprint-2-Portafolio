import React, { useState } from 'react'
import { MainLayout, InnerLayout } from '../styles/Layout'
import Title from '../Components/Title'
import portfolio from '../data/portfolio'
import Menu from '../Components/Menu'
import Button from '../Components/Button'

// const allButtons = ['All', ...portfolio.map(item => item.category)] Repite todas las cdategorías
const allButtons = ['All', ...new Set(portfolio.map(item => item.category))]     //Para no repetir las categorías se usará una estructura de datos y esta solo conservará valores únicos

function PortfolioPage() {
    const [menuItem, setMenuItems] = useState(portfolio);
    const [button, setButton] = useState(allButtons);

    const filter = (button) => {
        if(button === 'All'){
            setMenuItems(portfolio)
            return;
        }

        const filtered = portfolio.filter(item => item.category === button);
        setMenuItems(filtered);
    }

    return (
        <MainLayout>
            <Title title={ 'Portafolio' } span={ 'Portafolio' } />
            <InnerLayout>
                <Button filter={ filter } button={ button } />
                <Menu menuItem={ menuItem } />
            </InnerLayout>
        </MainLayout>
    )
}

export default PortfolioPage
