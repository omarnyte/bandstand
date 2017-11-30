export const createFollow = (data) => {
  $.ajax ({
    method: 'POST',
    url: 'api/follows',
    data
  });
}; 
