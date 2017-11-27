const RECEIVE_SONG = 'RECEIVE SONG';

export const receiveSong = (song) => ({
  type: RECEIVE_SONG,
  song
});
