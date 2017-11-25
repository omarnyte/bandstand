import * as BandAPIUtil from '../utils/album_api_util';

export const RECEIVE_ALL_ALBUMS = 'RECEIVE_ALL_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const REMOVE_ALBUM = 'REMOVE_ALBUMS';

// thunk actions
export const fetchAlbums = () => dispatch => (
  BandAPIUtil.fetchAlbums()
    .then(albumsResp => dispatch(receiveAllAlbums(albumsResp)))
);

export const fetchAlbum = (albumId) => dispatch => (
  BandAPIUtil.fetchAlbum(albumId)
    .then(albumResp => dispatch(receiveAlbum(albumResp)))
);

export const createAlbum = (album) => dispatch => (
  BandAPIUtil.createAlbum(album)
    .then(albumResp => dispatch(receiveAlbum(albumResp)))
);

export const deleteAlbum = (albumId) => dispatch => (
  BandAPIUtil.deleteAlbum(albumId)
   .then(albumResp => dispatch(removeAlbum(albumId)))
);

// sync actions
const receiveAllAlbums = (albums) => ({
  type: RECEIVE_ALL_ALBUMS,
  albums: albums 
});

const receiveAlbum = (album) => ({
  type: RECEIVE_ALBUM,
  album
});

const removeAlbum = (albumId) => ({
  type: REMOVE_ALBUM,
  albumId
});
