import React, {FC} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {getMovieThunk, setCurrentPage} from '../../store/slices';
import {useLocation, useParams} from 'react-router-dom';


const Pagination: FC = (): any => {
    const currentPage = useAppSelector(state => state.movies.current_page)
    const dispatch = useAppDispatch()
    const params: any = useParams()

    const handleClick = (goTo: { direction: string }): any => {
        switch (goTo.direction) {
            case 'next':
                if (currentPage + 1 > 0) {
                    dispatch(getMovieThunk({discover: params.search || 'discover', page: currentPage + 1}))
                } else {
                    dispatch(getMovieThunk({discover: params.search || 'discover', page: 1}))
                }
                break
            default :
                if (currentPage - 1 > 0) {
                    dispatch(getMovieThunk({discover: params.search || 'discover', page: currentPage - 1}))
                } else {
                    dispatch(getMovieThunk({discover: params.search || 'discover', page: 1}))
                }

        }
    }
    return (
        <div className={'col-12 d-flex justify-content-center p-2'}>
            <ul className="pagination">
                <li className="page-item">
                    <button type="button" onClick={() => handleClick({direction: 'prev'})} className="page-link"
                            aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </button>
                </li>
                <li className="page-item"><a className="page-link" href="1">{currentPage}</a></li>

                <li className="page-item">
                    <button type="button" onClick={() => handleClick({direction: 'next'})} className="page-link"
                            aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </button>
                </li>
            </ul>
        </div>
    )
}


export default Pagination;