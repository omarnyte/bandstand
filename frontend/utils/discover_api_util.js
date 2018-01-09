// export const fetchPermittedGenres = () => (
//   $.ajax({
//     method: 'GET',
//     url: 'api/genres'
//   })
// );
//
// export const fetchBandsByGenreId = (genreId) => (
//   $.ajax({
//     method: 'GET',
//     url: `api/genres/${genreId}`
//   })
// );

export const fetchBandsByGenre = (genre) => (
  $.ajax({
    method: 'POST',
    url: `api/genres/`,
    data: { genre }
  })
);
