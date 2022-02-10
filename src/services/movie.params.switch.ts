import {useAppSelector} from '../hooks/redux';

export const movieParamsSwitch = (params:{search:string | undefined}) => {
    switch (params.search) {
        case 'popular':
            return () => useAppSelector(state => state.movies.popular)
        case 'upcoming':
            return () => useAppSelector(state => state.movies.upcoming)
        case 'now_playing':
            return () => useAppSelector(state => state.movies.now_playing)
        case 'top_rated':
            return () => useAppSelector(state => state.movies.top_rated)
        default:
            return () => useAppSelector(state => state.movies.movies)
    }
}