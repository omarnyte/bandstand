// Returns an object with band IDs as keys and their corresponding
// band objects as values
export const fetchBands = () => (
  $.ajax({
    method: 'GET',
    url: 'api/bands'
  })
);

// Returns a single object with :id, :username, :email, and :band_name
export const fetchBand = (bandId) => (
  $.ajax({
    method: 'GET',
    url: `/api/bands/${bandId}`
  })
);
