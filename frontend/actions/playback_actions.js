export const RECEIVE_SONG = 'RECEIVE_SONG';
export const CLEAR_SONG = 'CLEAR_SONG';

export const receiveSong = (song) => ({
  type: RECEIVE_SONG,
  song
});

export const clearSong = () => ({
  type: CLEAR_SONG
}); 
