import React, {FC} from 'react';

import GenreBadge from '../../components/GenreBadge/GenreBadge';
import DiscoverPage from '../discover_page/DiscoverPage';

const HomePage: FC = (): any => {

    return (
        <div className={'d-flex'}>
            <div
                className={
                    'd-flex ' +
                    'flex-column ' +
                    'flex-wrap ' +
                    'align-items-center ' +
                    'col-4 pt-5'
                }
            >
                <GenreBadge/>
            </div>

            <div className={'d-flex col-8'}>
                <DiscoverPage/>
            </div>

        </div>
    )
}


export default HomePage;