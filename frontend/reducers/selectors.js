export const selectAlbum = ({ albums }, id) => {
  const album = albums[id];
  return album ? album : null;
};

export const selectBand = ({ bands }, id) => {
  const band = bands[id];
  return band ? band : null;
};

export const selectSong = ({ songs }, id) => {
  const song = songs[id];
  return song ? song : null;
};

export const selectAlbumsByBand = (state, band) => {
  return band ? band.album_ids.map(id => state.entities.albums[id]): [];
};

export const selectSongsByAlbum = (state, album) => {
  return album.song_ids ? album.song_ids.map(id => state.entities.songs[id]) : [];
};
