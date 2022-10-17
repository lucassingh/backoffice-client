import React from 'react'
import { Jumbotron } from '../components/jumbotron/Jumbotron'
import image from '../assets/server.jpg'
import { UserAuth } from '../context/AuthContext';

export const HomeScreen = () => {

    const { user } = UserAuth();

    return (
        <div>
            <Jumbotron 
                title={`Bienvenido ${ user !== null ? user.displayName : ''}`} 
                subtitle='Sitio de administracion de la web de oración' 
            />
            <div className='container'>
                <div className='row cont'>
                    <div className='col-sm'>
                        <img className='imgServer' src={image} alt='server' height='80%' width='80%' />
                    </div>
                    <div className='col-sm'>
                        <p className='font-size'>
                            Con esta aplicación web se pueden subir archivos de audio y de tipo PDF.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
