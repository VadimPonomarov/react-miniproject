import {IMovieState} from '../../../types';

export const movieInitialState: IMovieState = {
    movies: [],
    top_rated: [],
    upcoming: [],
    latest: [],
    now_playing: [],
    popular: [],
    current_item: null,
    current_page: null,
    loading: false,
    error: null,
    status: null,
    update: false
}