import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {useLocation, useParams} from 'react-router-dom';

import {IMovie} from '../../types';
import {movieParamsSwitch} from '../../services/movie.params.switch';
import {getMovieThunk} from '../../store/slices';
import {v4 as uuid} from 'uuid';
import Pagination from '../../components/pagination/Pagination';
import MovieList from '../../components/Movielist/MovieList';

const DiscoverPage:FC  = ():any => {
    const dispatch = useAppDispatch()
    const currentPage = useAppSelector(state => state.movies.current_page)
    const genres = useAppSelector((state => state.genres.choosen))
    const params = useParams()
    const state: IMovie [] = movieParamsSwitch({search: params.search})()
    const location = useLocation()

    useEffect(() => {
        dispatch(getMovieThunk({discover: 'discover', with_genres: genres.join(',')}))
    }, [location.pathname, genres])

    return (
        state.map(item => {
            return (
                <div key={uuid()} className={'d-flex flex-wrap'}>
                    <Pagination/>
                    <MovieList movieList={item.results}/>
                </div>
            )
        })
    )
}


export default DiscoverPage;