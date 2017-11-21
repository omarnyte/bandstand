export const fetchBands = () => (
  $.ajax({
    method: 'GET',
    url: 'api/bands'
  })
);

export const fetchBand = (bandId) => (
  $.ajax({
    method: 'GET',
    url: `/api/bands/${bandId}`
  })
);
