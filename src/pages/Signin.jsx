import { Jumbotron } from "../components/jumbotron/Jumbotron";
import { GoogleButton } from 'react-google-button';
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function Signin() {

    const { googleSigIn, user } = UserAuth();

    const navigate = useNavigate();

    const handleGoogleSignIn = async() => {
        try {
            await googleSigIn();
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(user !== null) {
            navigate('/files');
        }
    }, [user, navigate])
    

    return (
        <div>
            <Jumbotron title='Iniciar sesión' subtitle='Para poder cargar archivos iniciar sesión con una cuenta de Google'/>

            <div className="container d-flex justify-content-center align-items-center">
                <div className='containerForm'>
                    <GoogleButton onClick={handleGoogleSignIn} />                    
                </div>                
            </div>
        </div>
    )
}