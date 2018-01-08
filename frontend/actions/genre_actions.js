import * as GenreAPIUtil from '../utils/genre_api_util';

export const RECEIVE_PERMITTED_GENRES = 'RECEIVE_PERMITTED_GENRES';
export const RECEIVE_BANDS_BY_GENRE_ID = 'RECEIVE_BANDS_BY_GENRE_ID';

// Thunk actions
export const fetchGenres = () => dispatch => (
  GenreAPIUtil.fetchGenres()
    .then(genresResp => dispatch(receivePermittedGenres(genresResp)))
);

export const fetchBandsByGenreId = (genreId) => dispatch => (
  GenreAPIUtil.fetchBandsByGenreId(genreId)
    .then(bandsResp => dispatch(receiveBandsByGenreId(bandsResp)))
);



// Sync actions
const receivePermittedGenres = (genres) => ({
  type: RECEIVE_PERMITTED_GENRES,
  genres
});

const receiveBandsByGenreId = (bands) => ({
  type: RECEIVE_BANDS_BY_GENRE_ID,
  bands
});
