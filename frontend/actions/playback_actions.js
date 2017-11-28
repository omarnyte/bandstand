export const SET_FIRST_SONG = 'SET_FIRST_SONG';
export const RECEIVE_SONG = 'RECEIVE_SONG';
export const CLEAR_SONG = 'CLEAR_SONG';
export const TOGGLE_PLAY_PAUSE = 'TOGGLE_PLAY_PAUSE';
export const HANDLE_VOLUME_CHANGE = 'HANDLE_VOLUME_CHANGE';

export const setFirstSong = (currentSongs) => ({
  type: SET_FIRST_SONG,
  currentSongs
});
export const receiveSong = (song) => ({
  type: RECEIVE_SONG,
  song
});

export const togglePlayPause = () => ({
  type: TOGGLE_PLAY_PAUSE,
});

export const handleVolumeChange = (e) => ({
  type: HANDLE_VOLUME_CHANGE,
  e
});

export const clearSong = () => ({
  type: CLEAR_SONG
});
