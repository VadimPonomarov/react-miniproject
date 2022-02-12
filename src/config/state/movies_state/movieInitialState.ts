import {IMovieState} from '../../../types';

export const movieInitialState: IMovieState = {
    movies: [],
    top_rated: [],
    upcoming: [],
    latest: [],
    now_playing: [],
    popular: [],
    current_item: null,
    current_page: 1,
    loading: false,
    error: null,
    status: null,
    update: false
}