export const followBand = (data) => {
  $.ajax ({
    method: 'POST',
    url: 'api/follows',
    data
  });
};

export const unfollowBand = (bandId) =>{
  $.ajax ({
    method: 'DELETE',
    url: `api/follows/${bandId}`
  });
};
