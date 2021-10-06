import axios from "axios";
import { gameDetailsURL, gameScreenshotsURL } from "../api";

export const loadDetail =
  ({ id }) =>
  async (dispatch) => {
    const gameData = await axios.get(gameDetailsURL(id));
    const screenshotsData = await axios.get(gameScreenshotsURL(id));

    dispatch({
      type: "GET_DETAIL",
      payload: {
        game: gameData.data,
        screen: screenshotsData.data,
      },
    });
  };
