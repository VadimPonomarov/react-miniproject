import React, {FC, useEffect} from 'react';
import {v4 as uuid} from 'uuid'

import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {getGenresThunk, setChoosenState, removeChoosenState} from '../../store/slices/genres.slice';

const GenreBadge: FC = (): any => {

    const genres = useAppSelector(state => state.genres.genres)
    const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(getGenresThunk())
    }, [])

    const handleClick = (e: any) => {
        const elem: any = document.getElementById(e.target.id)
        elem.classList.toggle('btn-primary')

        if (elem.getAttribute('class').includes('btn-primary')) {
            dispatch(setChoosenState({data: elem.getAttribute('value')}))
        } else {
            dispatch(removeChoosenState({data: elem.getAttribute('value')}))
        }
    }

    return (
        genres.map(item => {
            return (
                <button
                    key={uuid()}
                    id={uuid()}
                    value={item.id}
                    onClick={(e) => handleClick(e)}
                    className={'btn rounded-3 border border-primary m-1'}
                >
                    {item.name}
                </button>
            )

        })
    )
}


export default GenreBadge;