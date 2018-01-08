export const fetchGenres = () => (
  $.ajax({
    method: 'GET',
    url: 'api/genres'
  })
);

export const fetchBandsByGenreId = (genreId) => (
  $.ajax({
    method: 'GET',
    url: `api/genres/${genreId}`
  })
);
