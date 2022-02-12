import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {genreService} from '../../services';
import {IGenresState, IGenres} from '../../types'
import {initialGenresState as initialState} from '../../config/state/genres_state/genreInitialState';


export const getGenresThunk = createAsyncThunk(
    'genres/getListThunk',
    async (_, {dispatch, rejectWithValue}) => {
        try {
            await (genreService.getList())
                .then(value => {
                    dispatch(setGenreState({data: {value: value}}))
                })
        } catch (e: any) {
            rejectWithValue(e.message)
        }
    }
)

const genreSlice = createSlice({
    name: 'genres',
    initialState,
    reducers: {
        setGenreState: (state: IGenresState, action: PayloadAction<{ data: any }>): void => {
            state.genres = action.payload.data.value.genres
        },
        setChoosenState: (state: IGenresState, action: PayloadAction<{ data: number }>): any => {
            state.choosen.push(action.payload.data)
        },
        removeChoosenState: (state: IGenresState, action: PayloadAction<{ data: number }>): any => {
            state.choosen = state.choosen.filter(item => item !== action.payload.data)
        }
    }
})


const genreReducer = genreSlice.reducer

export const {setGenreState, setChoosenState, removeChoosenState} = genreSlice.actions
export default genreReducer
