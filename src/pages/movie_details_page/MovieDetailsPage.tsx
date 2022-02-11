import React, {FC} from 'react';
import {useLocation} from 'react-router-dom';

import {baseUrlPictures} from '../../config/constants/urls';
import {IResultMovies} from '../../types';
import {Rating} from 'react-simple-star-rating'
import {useAppDispatch} from '../../hooks/redux';
import {postMovieRaiting} from '../../store/slices';

const MovieDetailsPage: FC = () => {

    const dispatch = useAppDispatch()
    const movie: any = useLocation().state
    const addr: string = `${baseUrlPictures}/w500/${movie.data.backdrop_path}`
    const locationState: any = useLocation().state
    const item: IResultMovies = locationState.data
    const url: string = `${baseUrlPictures}/w300${item.poster_path}`
    const handleClickRating = (e:number) => {
        dispatch(postMovieRaiting({value:e, movieId:item.id}))
    }

    return (
        <div className="card d-flex flex-row col-12 vh-100"
             style={{backgroundImage: `url(${addr})`, backgroundSize: 'cover'}}
        >
            <div className="d-flex align-items-center justify-content-center col-md-4 ms-3">
                <img src={url} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="d-flex col-md-8 border" style={{background: 'black', opacity: '.7'}}>
                <div className="card-body text-white">
                    <h1 className="card-title">{item.title}</h1>
                    <div>{new Date(item.release_date).toLocaleDateString()}</div>
                    <div className={'d-flex align-items-center'}>
                        <h3 style={{width: '50px', height: '50px'}}
                            className={'d-flex rounded-circle align-items-center justify-content-center'}>
                            <div>{Math.floor(item.vote_average * 100 / 10)} </div>
                        </h3>
                        <h6 className={'ms-3'}>Пользовательский счет</h6>
                    </div>
                    <Rating ratingValue={3} onClick={(e) => handleClickRating(e)}/>
                    <h5>{item.original_title}</h5>
                    <p className="card-text">Обзор{item.overview}</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>

        </div>
    )
}


export default MovieDetailsPage;