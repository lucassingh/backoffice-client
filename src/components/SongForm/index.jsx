import { useState } from "react";
import axios from 'axios';
import FileInput from "../FileInput";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

const SongForm = () => {

    const navigate = useNavigate();

    const initialValue = {
        name: "",
        category: "",
        artist: "",
        song: "",
        img: "",
    }

    const [error, setError] = useState(false);

    const [display, setDisplay] = useState(false);

    const [captchaValue, setCaptchaValue] = useState('');

    const [data, setData] = useState({
        name: "",
        category: "",
        artist: "",
        song: "",
        img: "",
    });

    const onChangeCaptcha = (value) => {
        return setCaptchaValue(value)
    }

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleInputState = (name, value) => {
        setData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (data.name === '' || data.category === '' || data.artist === '' || data.song === '' || data.img === '') {
            setError(true)
            return;
        }

        try {
            const url = process.env.REACT_APP_API_URL + "/songs"

            if (captchaValue !== '') {
                await axios.post(url, data);
                setData(initialValue);
                setDisplay(true);
                setTimeout(() => {
                    navigate('/')
                }, 3000);
            }

        } catch (error) {
            console.log(error)
        }
    };

    return (
        <>
            {
                display && (
                    <div className="alert alert-success" role="alert">
                        Cargado correctamente!!!
                    </div>
                )
            }

            <div className={styles.containerForm}>
                <form className={styles.form} onSubmit={handleSubmit} formNoValidate>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="Nombre podcast"
                        name="name"
                        onChange={handleChange}
                        value={data.name}
                    />
                    {error && data.name.length <= 0 ? <span className={styles.validation}>El nombre del podcast es requerido</span> : ''}


                    <input
                        type="text"
                        className={styles.input}
                        placeholder="Categoría"
                        name="category"
                        onChange={handleChange}
                        value={data.category}
                    />
                    {error && data.category.length <= 0 ? <span className={styles.validation}>La categoría es requerida</span> : ''}

                    <input
                        type="text"
                        className={styles.input}
                        placeholder="Autor"
                        name="artist"
                        onChange={handleChange}
                        value={data.artist}
                    />
                    {error && data.artist.length <= 0 ? <span className={styles.validation}>El autor es requerido</span> : ''}

                    <FileInput
                        name="img"
                        label="Imagen Podcast"
                        handleInputState={handleInputState}
                        type="image"
                        value={data.img}
                    />
                    {error && data.img.length <= 0 ? <span className={styles.validation}>La imagen del podcast es requerida</span> : ''}

                    <FileInput
                        name="song"
                        label="Archivo mp3"
                        handleInputState={handleInputState}
                        type="audio"
                        value={data.song}
                    />
                    {error && data.song.length <= 0 ? <span className={styles.validation}>La imagen del podcast es requerida</span> : ''}

                    <div className="mt-4">
                        <ReCAPTCHA
                            sitekey={process.env.REACT_APP_CAPTCHA_KEY}
                            onChange={onChangeCaptcha}
                        />
                    </div>

                    <div className={styles.contButton}>
                        <button type="submit" className='btn btn-primary button-c'>
                            Cargar mp3
                        </button>
                    </div>

                </form>
            </div>
        </>
    );
};

export default SongForm;
