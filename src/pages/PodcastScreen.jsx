import { Jumbotron } from "../components/jumbotron/Jumbotron"
import SongForm from '../components/SongForm';

export const PodcastScreen = () => {
    return (
       <div>
           <Jumbotron title='Cargar Podcast' subtitle='Completar el formulario para cargar podcasts en la base de datos'/>
           <div className="container d-flex justify-content-center flex-column custom-container">
                <SongForm />
            </div>
       </div>
    )
}