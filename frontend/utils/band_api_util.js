export const fetchBand = (bandId) => (
  $.ajax({
    method: 'GET',
    url: `/api/bands/${bandId}`
  })
);

export const fetchBands = () => (
  $.ajax({
    method: 'GET',
    url: 'api/bands'
  })
);

export const fetchFollowedBands = (userId) => (
  $.ajax({
    method: 'GET',
    url: `api/followed_bands/${userId}`
  })
);
