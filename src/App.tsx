import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';

import MainLayout from './layouts/Main.Layout';
import MoviePage from './pages/movie_page/MoviePage';


function App() {

    return (
        <Routes>
            <Route path={''} element={<MainLayout/>}>
                <Route path={''} element={<MoviePage/>}/>
                <Route path={':search'} element={<MoviePage/>}/>
            </Route>
        </Routes>
    )
}

export default App;
