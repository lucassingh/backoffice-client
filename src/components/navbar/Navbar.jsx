import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

function Navbar() {

    const { user, logOut } = UserAuth();

    const handleLogOut = async () => {

        try {
            await logOut()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <p className="navbar-brand custom-p">
                    <Link className={"link-styles-brand"} to="/">Backoffice</Link>
                </p>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <p className="nav-link custom-p"><span className="sr-only">(current)</span>
                                <Link className={"link-styles"} to="/">Home</Link>
                            </p>
                        </li>

                        {
                            user !== null &&
                            <>
                                <li className="nav-item active">
                                    <p className="nav-link custom-p"><span className="sr-only">(current)</span>
                                        <Link className={"link-styles"} to="/files">Archivos</Link>
                                    </p>
                                </li>
                                <li className="nav-item">
                                    <p className="nav-link custom-p">
                                        <Link className={"link-styles"} to="/podcast">Podcast</Link>
                                    </p>
                                </li>
                                <li className="nav-item">
                                    <p className="nav-link custom-p">
                                        {user.displayName}
                                    </p>
                                </li>
                            </>
                        }

                        {
                            user?.displayName ? (
                                <li className="nav-item">
                                    <button onClick={handleLogOut} className='btn btn-primary'>Salir</button>
                                </li>
                            ) : (
                                <li className="nav-item">
                                    <p className="nav-link custom-p">
                                        <Link className={"link-styles"} to="/signin">Ingresar</Link>
                                    </p>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar