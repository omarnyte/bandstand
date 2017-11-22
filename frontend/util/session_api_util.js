export const signup = band => (
  $.ajax({
    method: 'POST',
    url: '/api/bands',
    data: band
  })
);

export const login = band => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: band
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);
