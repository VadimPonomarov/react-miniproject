import React, {FC} from 'react';
import {useAppSelector} from '../../hooks/redux';


const Pagination: FC = (): any => {
    const currentPage = useAppSelector(state => state.movies.current_page)
    console.log(currentPage)
    return (
        <div className={'col-12 d-flex justify-content-center p-2'}>
            <ul className="pagination">
                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li className="page-item"><a className="page-link" href="1">{currentPage}</a></li>

                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}


export default Pagination;