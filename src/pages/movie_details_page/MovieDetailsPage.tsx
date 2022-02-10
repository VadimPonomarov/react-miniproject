import React, {FC} from 'react';
import {useLocation} from 'react-router-dom';
import { baseUrlPictures } from '../../config/constants/urls';
import {url} from 'inspector';
import {IMovie} from '../../types';

const MovieDetailsPage: FC = () => {
    const movie:any = useLocation().state
    console.log(movie)
    const addr = `${baseUrlPictures}/w300/${movie.data.backdrop_path}`

    return (
        <div className="card col-12 " style={{backgroundImage: `url(${addr})`}}>
            <div className="row g-0">
                <div className="col-md-4">
                    {/*<img src="..." className="img-fluid rounded-start" alt="...">*/}
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MovieDetailsPage;