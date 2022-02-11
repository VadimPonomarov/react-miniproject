import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';

import MainLayout from './layouts/Main.Layout';
import MoviePage from './pages/movie_page/MoviePage';
import MovieDetailsPage from './pages/movie_details_page/MovieDetailsPage';
import HomePage from './pages/home_page/HomePage';


function App() {

    return (
        <Routes>
            <Route path={''} element={<MainLayout/>}>
                <Route path={''} element={<HomePage/>}/>
                <Route path={':search'} element={<MoviePage/>}/>
                <Route path={':search/:movieId'} element={<MovieDetailsPage/>}/>
            </Route>
        </Routes>
    )
}

export default App;
