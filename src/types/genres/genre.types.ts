export interface IGenres {
    id: number,
    name: string
}

export interface IGenresState {
    genres: IGenres[],
    errors: string[],
    choosen: number[]
}

export const initialGenresState: IGenresState = {
    genres: [],
    errors: [],
    choosen: []
}