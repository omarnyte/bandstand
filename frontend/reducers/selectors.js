export const selectAlbum = ({ albums }, id) => {
  const album = albums[id] || null;
  return album; 
};
