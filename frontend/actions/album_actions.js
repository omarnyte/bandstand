import * as BandAPIUtil from '../utils/album_api_util';

export const RECEIVE_ALL_ALBUMS = 'RECEIVE_ALL_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';

// thunk actions
export const fetchAlbums = () => dispatch => (
  BandAPIUtil.fetchAlbums()
    .then(albumsResp => dispatch(receiveAllAlbums(albumsResp)))
);

export const fetchAlbum = (albumId) => dispatch => (
  BandAPIUtil.fetchAlbum(albumId)
    .then(albumResp => dispatch(receiveAlbum(albumResp)))
);

// sync actions
const receiveAllAlbums = (albums) => ({
  type: RECEIVE_ALL_ALBUMS,
  albums
});

const receiveAlbum = (album) => ({
  type: RECEIVE_ALBUM,
  album
});
