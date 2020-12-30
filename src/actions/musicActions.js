import { PLAY_SONG } from "./actionTypes";

export const playSong = (song) => {
  return {
    type: PLAY_SONG,
    payload: song,
  };
};
