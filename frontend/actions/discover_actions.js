import * as DiscoverAPIUtil from '../utils/discover_api_util';

// export const RECEIVE_PERMITTED_GENRES = 'RECEIVE_PERMITTED_GENRES';
// export const RECEIVE_BANDS_BY_GENRE_ID = 'RECEIVE_BANDS_BY_GENRE_ID';
export const RECEIVE_DISCOVER_BANDS = 'RECEIVE_DISCOVER_BANDS';

// Thunk actions
// export const fetchPermittedGenres = () => dispatch => (
//   GenreAPIUtil.fetchPermittedGenres()
//     .then(genresResp => dispatch(receivePermittedGenres(genresResp)))
// );
//
// export const fetchBandsByGenreId = (genreId) => dispatch => (
//   GenreAPIUtil.fetchBandsByGenreId(genreId)
//     .then(bandsResp => dispatch(receiveBandsByGenreId(bandsResp)))
// );

export const fetchBandsByGenre = (genre) => dispatch => (
  DiscoverAPIUtil.fetchBandsByGenre(genre)
    .then(bandsResp => dispatch(receiveDiscoverBands(bandsResp)))
);


// Sync actions
// const receivePermittedGenres = (genres) => ({
//   type: RECEIVE_PERMITTED_GENRES,
//   genres
// });

// const receiveBandsByGenreId = (bands) => ({
//   type: RECEIVE_BANDS_BY_GENRE_ID,
//   bands
// });

const receiveDiscoverBands = (bands) => ({
  type: RECEIVE_DISCOVER_BANDS,
  bands
});
