import React, {FC} from 'react';
import {Link} from 'react-router-dom';

import {IResultMovies} from '../../types';
import {baseUrlPictures} from '../../config';

type movieListCardType = {
    item: IResultMovies
}

const MovieListCard: FC<movieListCardType> = ({item}): any => {

    const url: string = `${baseUrlPictures}/w300${item.poster_path}`
    return (
        <div>
            <Link state={{data: item}} to={`${item.id}`} className={'text-decoration-none'}>
                <img src={`${url}`} className="card-img-top rounded-top" alt={``}/>
                <div
                    style={
                        {
                            width: '30px',
                            height: '30px',
                            position: 'relative',
                            margin: '0 auto',
                            top: '-15px'
                        }
                    }
                    className={
                        'bg-white ' +
                        'd-flex ' +
                        'text-primary ' +
                        'border rounded-circle ' +
                        'justify-content-center ' +
                        'align-items-center'
                    }
                >
                    {Math.floor(item.vote_average * 100 / 10)}
                </div>
                <div
                    className={'text-start ms-2'}
                >
                    {new Date(item.release_date).toLocaleDateString()
                    }
                </div>
                <b>
                    <p
                        className={'align-middle text-start p-2'}>
                        {item.title}
                    </p>
                </b>
            </Link>

        </div>
    )
}


export default MovieListCard;