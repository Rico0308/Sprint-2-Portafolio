import React from 'react'
import styled from 'styled-components'
import { MainLayout, InnerLayout } from '../styles/Layout'
import Title from '../Components/Title'
import PrimaryBTN from '../Components/PrimaryBTN'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import ContactItem from '../Components/ContactItem'
import { useForm } from '@formspree/react';

function ContactPage() {
    const phone = <PhoneIcon />
    const email = <EmailIcon />
    const address = <LocationOnIcon />

    const [state, handleSubmit] = useForm("mqkwernp");

    if (state.succeeded) {
        alert("Gracias por Contactarte")
        return <ContactPage />
    }

    return (
        <MainLayout>
            <Title title={ 'Contáctame' } span={ 'Contáctame' }></Title>
            <ContactStyled>
                <InnerLayout className="contact-section">
                    <div className="left-content">
                        <div className="contact-title">
                            <h4>Ponerse en Contacto</h4>
                        </div>
                        {/* <form className="form" action="https://formspree.io/f/mqkwernp" method="POST" id="form_contact"> */}
                        <form className="form" id="form_contact" onSubmit={handleSubmit}>
                            <div className="form-field">
                                {/* <label htmlFor="name" id="name">Ingresa tu Nombre:</label>
                                <input type="text" id="name" required /> */}
                                <label htmlFor="name" id="name">Ingresa tu Nombre:</label>
                                <input type="text" id="name" required />
                            </div>
                            <div className="form-field">
                                <label htmlFor="email">Email Address</label>
                                <input id="email" type="email" name="email" required />
                                </div>
                            <div className="form-field">
                                <textarea id="message" name="message" required />
                            </div>

                            <div className="form-field f-button">
                                <button type="submit"><PrimaryBTN title={ 'Enviar' } /></button>
                            </div>
                        </form>
                    </div>
                    <div className="right-content">
                        <ContactItem
                            icon={ phone }
                            title={ 'Teléfono' }
                            contact1={ '321 9868 799'}
                        />
                        <ContactItem
                            icon={ email }
                            title={ 'E-mail' }
                            contact1={ 'cdrg420@gmail.com'}
                        />
                        <ContactItem
                            icon={ address }
                            title={ 'Dirección' }
                            contact1={ 'Arauca, Arauca - Colombia'}
                        />
                    </div>
                </InnerLayout>
            </ContactStyled>
        </MainLayout>
    )
}



const ContactStyled = styled.section`

    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;

        @media screen and (max-width: 1000px){
            grid-template-columns: repeat(1, 1fr);

            .f-button{
                margin-bottom: 2rem;
            }
        }

        .right-content{
            display: grid;
            grid-template-columns: repeat(1, 1fr);

            @media screen and (max-width: 502px){
                width: 70%;
            }
        }

        .contact-title{
            h4{
                color: var(--color-white);
                padding: 1rem 0;
                font-size: 1.8rem;
            }
        }

        .form{
            width: 100%;

            @media screen and (max-width: 502px){
                width: 100%;
            }
            .form-field{
                position: relative;
                width: 100%;
                margin-top: 2rem;

                label{
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding: 0 .5rem;
                    color: inherit;
                }

                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding: 0 15px;
                    width: 100%;
                    color: inherit;
                }

                textarea{
                    background-color: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: 1rem 1rem;
                }
            }
        }
    }

`;

export default ContactPage
