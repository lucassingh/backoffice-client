import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import { PodcastScreen } from './pages/PodcastScreen';
import { HomeScreen } from './pages/HomeScreen';
import { Signin } from './pages/Signin';
import { FilesScreen } from './pages/FilesScreen';
import { AuthContextProvider } from './context/AuthContext';
import { Protected } from './components/protected/Protected'

function App() {

    return (
        <>
            <AuthContextProvider>
                <Navbar />
                <Routes>
                    <Route path='/' element={<HomeScreen />}/>
                    <Route path='/signin' element={<Signin />}/>
                    <Route path='/files' element={
                        <Protected>
                            <FilesScreen />
                        </Protected>
                    }/>
                    <Route path='/podcast' element={
                        <Protected>
                            <PodcastScreen />
                        </Protected>
                    }/>
                </Routes>
            </AuthContextProvider>
        </>
    );
}

export default App;
