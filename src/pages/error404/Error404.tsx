import React, {FC} from 'react';
import {Link} from 'react-router-dom';

const Error404: FC = () => {

    return (
        <div className={
            'd-flex ' +
            'vh-100 ' +
            'align-items-center ' +
            'justify-content-center card'
        }>
            <div
                className={'text-danger'}
                style={{fontSize: '100px'}}
            >
                Error - 404
            </div>
            <Link
                to={'/'}
                style={{textDecoration: 'underline', fontSize: '20px'}}
            >
                Home
            </Link>
        </div>
    )
}


export default Error404;