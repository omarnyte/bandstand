export const fetchAlbums = () => (
  $.ajax({
    method: 'GET',
    url: 'api/albums'
  })
);

export const fetchAlbum = (albumId) => (
  $.ajax({
    method: 'GET',
    url: `api/albums/${albumId}`
  })
);

export const createAlbum = (data) => (
  $.ajax({
      method: 'POST',
      url: 'api/albums',
      data
  })
);

export const deleteAlbum = (albumId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/albums/id${albumId}`
  })
);
