import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';

import MainLayout from './layouts/Main.Layout';
import PopularPage from './pages/popular/PopularPage';
import WatchedNowPage from './pages/watched_now/WatchedNowPage';
import ComingSoonPage from './pages/coming_soon/ComingSoonPage';
import TheBestPage from './pages/the_best/TheBestPage';
import HomePage from './pages/home/HomePage';


function App() {

    return (
        <Routes>
            <Route path={''} element={<MainLayout/>}>
                <Route path={''} element={<HomePage/>}/>
                <Route path={':search'} element={<PopularPage/>}/>
                {/*<Route path={'popular'} element={<PopularPage/>}/>
                <Route path={'watched_now'} element={<WatchedNowPage/>}/>
                <Route path={'coming_soon'} element={<ComingSoonPage/>}/>
                <Route path={'the_best'} element={<TheBestPage/>}/>*/}
            </Route>
        </Routes>
    )
}

export default App;
