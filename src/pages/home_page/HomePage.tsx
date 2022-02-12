import React, {FC} from 'react';
import MoviePage from '../movie_page/MoviePage';
import GenreBadge from '../../components/GenreBadge/GenreBadge';

const HomePage: FC = (): any => {

    return (
        <div className={'d-flex'}>
            <div className={'d-flex flex-column flex-wrap align-items-center col-4 pt-5'}>
                <GenreBadge/>
            </div>
            <div className={'d-flex col-8'}>
                <MoviePage/>
            </div>
        </div>
    )
}


export default HomePage;