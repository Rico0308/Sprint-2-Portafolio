import React from 'react'
import Skills from '../Components/Skills'
import Resume from '../Components/Resume'
import { MainLayout } from '../styles/Layout'

function ResumePage() {
    return (
        <MainLayout>
            <Skills />
            <Resume />
        </MainLayout>
    )
}

export default ResumePage
