export const followBand = (followee_id) => (
  $.ajax ({
    method: 'POST',
    url: 'api/follows',
    data: { followee_id }
  })
);

export const unfollowBand = (bandId) => (
  $.ajax ({
    method: 'DELETE',
    url: `api/follows/${bandId}`
  })
); 
