export const selectAlbum = ({ albums }, id) => {
  const album = albums[id] || null;
  return album;
};

export const selectBand = ({ bands }, id) => {
  const band = bands[id] || null;
  return band;
};

export const selectAlbumsByBand = (state, band) => {
  return band ? band.album_ids.map(id => state.entities.albums[id]): [];
};

export const selectSongsByAlbum = (state, album) => {
  return album ? album.song_ids.map(id => state.entities.songs[id]) : [];
};
